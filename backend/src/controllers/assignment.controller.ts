import { Request, Response } from "express";

import { successResponse } from "../utils/apiResponse";

import { createAssignmentSchema } from "../validators/assignment.validator";

import {
  createAssignmentService,
  getAssignmentsService,
  getAssignmentByIdService,
} from "../services/assignment.service";

export const createAssignment = async (
  req: Request,
  res: Response
) => {
  /* ================= PARSE QUESTION TYPES ================= */

  if (
    req.body.questionTypes &&
    typeof req.body.questionTypes ===
      "string"
  ) {
    req.body.questionTypes =
      JSON.parse(
        req.body.questionTypes
      );
  }

  /* ================= MAP UI LABELS ================= */

  const typeMap: Record<
    string,
    string
  > = {
    "Multiple Choice Questions":
      "mcq",

    "Short Questions":
      "short",

    "Long Questions":
      "long",

    "Numerical Problems":
      "numerical",

    "Diagram/Graph-Based Questions":
      "diagram",
  };

  if (
    Array.isArray(
      req.body.questionTypes
    )
  ) {
    req.body.questionTypes =
      req.body.questionTypes.map(
        (item: any) => ({
          ...item,

          type:
            typeMap[
              item.type
            ] || item.type,
        })
      );
  }

  /* ================= FILE URL ================= */

  if (req.file) {
    const file =
      req.file as Express.Multer.File & {
        path: string;
      };

    req.body.uploadedFileUrl =
      file.path;
  }

  /* ================= VALIDATE ================= */

  const validatedData =
    createAssignmentSchema.parse(
      req.body
    );

  /* ================= CREATE ================= */

  const assignment =
    await createAssignmentService(
      validatedData
    );

  /* ================= RESPONSE ================= */

  return res
    .status(201)
    .json(
      successResponse(
        assignment,
        "Assignment created successfully"
      )
    );
};

export const getAssignments =
  async (
    _req: Request,
    res: Response
  ) => {
    const assignments =
      await getAssignmentsService();

    return res.json(
      successResponse(
        assignments
      )
    );
  };

export const getAssignmentById =
  async (
    req: Request,
    res: Response
  ) => {
    const { assignmentId } =
      req.params;

    const assignment =
      await getAssignmentByIdService(
        assignmentId
      );

    if (!assignment) {
      return res
        .status(404)
        .json({
          success: false,

          message:
            "Assignment not found",
        });
    }

    return res.json(
      successResponse(
        assignment
      )
    );
  };