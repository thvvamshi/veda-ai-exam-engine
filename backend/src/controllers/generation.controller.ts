import { Request, Response } from "express";

import { Assignment } from "../models/Assignment";

import { generationQueue } from "../queues/generation.queue";

import { successResponse } from "../utils/apiResponse";

import { emitToAssignmentRoom } from "../socket/emitters";

import { SOCKET_EVENTS } from "../socket/events";

export const generatePaper = async (
  req: Request,

  res: Response,
) => {
  const { assignmentId } = req.params;

  // Validate assignment ID
  const assignment = await Assignment.findById(assignmentId);

  if (!assignment) {
    return res.status(404).json({
      success: false,

      message: "Assignment not found",
    });
  }

  // Prevent duplicate generation jobs for the same assignment
  if (assignment.status === "processing" || assignment.status === "queued") {
    return res.status(400).json({
      success: false,

      message: "Assignment generation already in progress",
    });
  }

// Update assignment status to queued
  assignment.status = "queued";

  await assignment.save();

  // Add job to the generation queue
  const job = await generationQueue.add(
    "generate-paper",

    {
      assignmentId,
    },

    {
      attempts: 3,

      backoff: {
        type: "exponential",

        delay: 2000,
      },

      removeOnComplete: 50,

      removeOnFail: 20,
    },
  );

  // Emit socket event to notify clients about the new job
  emitToAssignmentRoom(
    assignmentId,

    SOCKET_EVENTS.GENERATION_QUEUED,

    {
      assignmentId,

      status: "queued",

      jobId: job.id,
    },
  );

  // Respond with job ID for tracking
  return res.status(200).json(
    successResponse(
      {
        jobId: job.id,
      },
      "Generation job queued",
    ),
  );
};
