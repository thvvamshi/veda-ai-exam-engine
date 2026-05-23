import { Request, Response } from "express";

import { Assignment } from "../models/Assignment";

import { generationQueue } from "../queues/generation.queue";

import { successResponse } from "../utils/apiResponse";

export const generatePaper = async (req: Request, res: Response) => {
  const { assignmentId } = req.params;

  const assignment = await Assignment.findById(assignmentId);

  if (!assignment) {
    return res.status(404).json({
      success: false,

      message: "Assignment not found",
    });
  }

  assignment.status = "queued";

  await assignment.save();

  const job = await generationQueue.add("generate-paper", {
    assignmentId,
  });

  return res.json(
    successResponse(
      {
        jobId: job.id,
      },
      "Generation job queued",
    ),
  );
};
