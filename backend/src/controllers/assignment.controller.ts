import { Request, Response } from "express";

import { successResponse } from "../utils/apiResponse";

import { createAssignmentSchema } from "../validators/assignment.validator";

import {
  createAssignmentService,
  getAssignmentsService,
  getAssignmentByIdService,
} from "../services/assignment.service";

export const createAssignment = async (req: Request, res: Response) => {
  const validatedData = createAssignmentSchema.parse(req.body);

  const assignment = await createAssignmentService(validatedData);

  return res
    .status(201)
    .json(successResponse(assignment, "Assignment created successfully"));
};

export const getAssignments = async (_req: Request, res: Response) => {
  const assignments = await getAssignmentsService();

  return res.json(successResponse(assignments));
};

export const getAssignmentById = async (req: Request, res: Response) => {
  const { assignmentId } = req.params;

  const assignment = await getAssignmentByIdService(assignmentId);

  if (!assignment) {
    return res.status(404).json({
      success: false,

      message: "Assignment not found",
    });
  }

  return res.json(successResponse(assignment));
};
