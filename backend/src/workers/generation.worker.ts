import {
  Worker,
  UnrecoverableError,
} from "bullmq";

import { redisConnection } from "../config/redis";

import { Assignment } from "../models/Assignment";

import { GeneratedPaper } from "../models/GeneratedPaper";

import { buildPrompt } from "../services/prompt.service";

import { generateQuestions } from "../services/ai/ai.service";

new Worker(
  "generation-queue",

  async (job) => {
    const { assignmentId } =
      job.data;

    console.log(
      `Processing assignment: ${assignmentId}`
    );

    const assignment =
      await Assignment.findById(
        assignmentId
      );

    if (!assignment) {
      throw new UnrecoverableError(
        "Assignment not found"
      );
    }

    try {

      // update assignment status to processing
      assignment.status =
        "processing";

      await assignment.save();

     
      // | Build AI Prompt
      const prompt =
        buildPrompt(assignment);

      // Generate AI Questions
      const generatedData =
        await generateQuestions(
          prompt
        );

        // validate generated data structure
      if (
        !generatedData.sections ||
        !Array.isArray(
          generatedData.sections
        )
      ) {
        throw new UnrecoverableError(
          "Invalid generated paper structure"
        );
      }

      // save generated paper to database
      await GeneratedPaper.create({
        assignmentId,

        sections:
          generatedData.sections,
      });

      // update assignment status to completed
      assignment.status =
        "completed";

      await assignment.save();

      console.log(
        `Paper generated successfully for ${assignmentId}`
      );
    } catch (error) {
      console.error(
        "Worker generation failed:",
        error
      );

      const errorMessage =
        error instanceof Error
          ? error.message
          : "Unknown error";
          
      // define non-retryable errors that should mark the assignment as failed immediately
      const nonRetryableErrors = [
        "model not found",

        "Invalid OpenRouter API key",

        "Invalid AI JSON response",

        "Invalid generated paper structure",

        "Assignment not found",
      ];

      const shouldNotRetry =
        nonRetryableErrors.some(
          (msg) =>
            errorMessage
              .toLowerCase()
              .includes(
                msg.toLowerCase()
              )
        );

        // mark assignment as failed for non-retryable errors
      if (shouldNotRetry) {
        assignment.status =
          "failed";

        await assignment.save();

        console.error(
          `Non-retryable failure for assignment: ${assignmentId}`
        );

        throw new UnrecoverableError(
          errorMessage
        );
      }

      // mark as failed if max retries reached
      if (
        job.attemptsMade >=
        (job.opts.attempts || 1) -
          1
      ) {
        assignment.status =
          "failed";

        await assignment.save();

        console.error(
          `Assignment marked as failed after retries: ${assignmentId}`
        );
      }

      // rethrow error to trigger retry
      throw error;
    }
  },

  {
    connection:
      redisConnection,

    concurrency: 5,
  }
);