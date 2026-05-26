import { Request, Response } from "express";

import { successResponse } from "../utils/apiResponse";

import { createAssignmentSchema } from "../validators/assignment.validator";

import {
  createAssignmentService,
  getAssignmentsService,
  getAssignmentByIdService,
  deleteAssignmentService,
} from "../services/assignment.service";

// ================= CREATE =================

export const createAssignment = async (req: Request, res: Response) => {
  if (req.body.questionTypes && typeof req.body.questionTypes === "string") {
    req.body.questionTypes = JSON.parse(req.body.questionTypes);
  }

  const typeMap: Record<string, string> = {
    "Multiple Choice Questions": "mcq",

    "Short Questions": "short",

    "Long Questions": "long",

    "Numerical Problems": "numerical",

    "Diagram/Graph-Based Questions": "diagram",
  };

  if (Array.isArray(req.body.questionTypes)) {
    req.body.questionTypes = req.body.questionTypes.map((item: any) => ({
      ...item,

      type: typeMap[item.type] || item.type,
    }));
  }

  if (req.file) {
    const file = req.file as Express.Multer.File & {
      path: string;
    };

    req.body.uploadedFileUrl = file.path;
  }

  const validatedData = createAssignmentSchema.parse(req.body);

  const assignment = await createAssignmentService(validatedData);

  return res
    .status(201)
    .json(successResponse(assignment, "Assignment created successfully"));
};

// ================= GET ALL =================

export const getAssignments = async (_req: Request, res: Response) => {
  const assignments = await getAssignmentsService();

  return res.json(successResponse(assignments));
};

// ================= GET BY ID =================

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

// ================= DELETE =================

export const deleteAssignment = async (req: Request, res: Response) => {
  try {
    const { assignmentId } = req.params;

    console.log("DELETE CONTROLLER ID:", assignmentId);

    const deletedAssignment = await deleteAssignmentService(assignmentId);

    if (!deletedAssignment) {
      return res.status(404).json({
        success: false,
        message: "Assignment not found",
      });
    }

    return res.json(
      successResponse(deletedAssignment, "Assignment deleted successfully"),
    );
  } catch (error: any) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to delete assignment",
    });
  }
};
