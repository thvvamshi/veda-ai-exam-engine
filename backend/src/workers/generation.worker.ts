import { Worker, UnrecoverableError } from "bullmq";

import { redisConnection } from "../config/redis";

import { Assignment } from "../models/Assignment";

import { GeneratedPaper } from "../models/GeneratedPaper";

import { buildPrompt } from "../services/prompt.service";

import { generateQuestions } from "../services/ai/ai.service";

import { emitToAssignmentRoom } from "../socket/emitters";

import { SOCKET_EVENTS } from "../socket/events";

new Worker(
  "generation-queue",

  async (job) => {
    const { assignmentId } = job.data;

    console.log(`Processing assignment: ${assignmentId}`);

    const assignment = await Assignment.findById(assignmentId);

    if (!assignment) {
      throw new UnrecoverableError("Assignment not found");
    }

    try {
      // Update assignment status to processing
      assignment.status = "processing";

      await assignment.save();

      // Emit processing event to clients
      emitToAssignmentRoom(
        assignmentId,

        SOCKET_EVENTS.GENERATION_PROCESSING,

        {
          assignmentId,

          status: "processing",
        },
      );

      // Build prompt for AI generation
      const prompt = await buildPrompt(assignment);
      // Generate questions using AI
      const generatedData = await generateQuestions(prompt);

      // Validate generated data structure
      if (!generatedData.sections || !Array.isArray(generatedData.sections)) {
        throw new UnrecoverableError("Invalid generated paper structure");
      }

      // Delete any existing generated paper for the assignment
      await GeneratedPaper.deleteMany({
        assignmentId,
      });

      // Create new generated paper document
      const generatedPaper = await GeneratedPaper.create({
        assignmentId,

        sections: generatedData.sections,

        answerKey: generatedData.answerKey,

        totalQuestions: generatedData.totalQuestions,

        totalMarks: generatedData.totalMarks,
      });

      // Update assignment status to completed
      assignment.status = "completed";

      await assignment.save();

      // Emit completion event with paper ID
      emitToAssignmentRoom(
        assignmentId,

        SOCKET_EVENTS.GENERATION_COMPLETED,

        {
          assignmentId,

          paperId: generatedPaper._id,

          status: "completed",
        },
      );

      console.log(`Paper generated successfully for ${assignmentId}`);
    } catch (error) {
      console.error("Worker generation failed:", error);

      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";

      // List of error messages that should not be retried
      const nonRetryableErrors = [
        "model not found",

        "Invalid OpenRouter API key",

        "Invalid GROQ API key",

        "Invalid AI JSON response",

        "Invalid generated paper structure",

        "Assignment not found",
      ];

      const shouldNotRetry = nonRetryableErrors.some((msg) =>
        errorMessage.toLowerCase().includes(msg.toLowerCase()),
      );

      // Mark assignment as failed and emit failure event if error is non-retryable
      if (shouldNotRetry) {
        assignment.status = "failed";

        await assignment.save();

        emitToAssignmentRoom(
          assignmentId,

          SOCKET_EVENTS.GENERATION_FAILED,

          {
            assignmentId,

            status: "failed",

            error: errorMessage,
          },
        );

        console.error(`Non-retryable failure for assignment: ${assignmentId}`);

        throw new UnrecoverableError(errorMessage);
      }

      //  Mark as failed if max retries reached
      if (job.attemptsMade >= (job.opts.attempts || 1) - 1) {
        assignment.status = "failed";

        await assignment.save();

        emitToAssignmentRoom(
          assignmentId,

          SOCKET_EVENTS.GENERATION_FAILED,

          {
            assignmentId,

            status: "failed",

            error: errorMessage,
          },
        );

        console.error(
          `Assignment marked as failed after retries: ${assignmentId}`,
        );
      }

      // Re-throw error to trigger retry if applicable
      throw error;
    }
  },

  {
    connection: redisConnection,
    concurrency: 5,
  },
);
