import { Worker } from "bullmq";

import { redisConnection } from "../config/redis";

import { Assignment } from "../models/Assignment";

import { GeneratedPaper } from "../models/GeneratedPaper";

import { buildPrompt } from "../services/prompt.service";

import { generateQuestions } from "../services/ai.service";

new Worker(
  "generation-queue",

  async (job) => {
    const { assignmentId } = job.data;

    console.log(`Processing assignment: ${assignmentId}`);

    const assignment = await Assignment.findById(assignmentId);

    if (!assignment) {
      throw new Error("Assignment not found");
    }

    try {

        // Mark the assignment as processing when the worker starts processing it
      assignment.status = "processing";

      await assignment.save();

    //   Build prompt based on assignment details
      const prompt = buildPrompt(assignment);

    //   generate questions using AI service
      const generatedData = await generateQuestions(prompt);

      await GeneratedPaper.create({
        assignmentId,

        sections: generatedData.sections,
      });

      assignment.status = "completed";

      await assignment.save();

      console.log(`Paper generated successfully for ${assignmentId}`);
    } catch (error) {
      console.error("Worker generation failed:", error);

    // If the job has failed after all retry attempts, mark the assignment as failed
      if (job.attemptsMade >= (job.opts.attempts || 1) - 1) {
        assignment.status = "failed";

        await assignment.save();

        console.error(`Assignment marked as failed: ${assignmentId}`);
      }

      throw error;
    }
  },

  {
    connection: redisConnection,

    concurrency: 5,
  },
);
