import { Router } from "express";

import {
  createAssignment,
  getAssignments,
  getAssignmentById,
  deleteAssignment,
} from "../controllers/assignment.controller";

import { asyncHandler } from "../utils/asyncHandler";

import { upload } from "../middleware/upload.middleware";

const router = Router();

// CREATE

router.post("/", upload.single("file"), asyncHandler(createAssignment));

// GET ALL

router.get("/", asyncHandler(getAssignments));

// GET BY ID

router.get("/:assignmentId", asyncHandler(getAssignmentById));

// DELETE

router.delete("/:assignmentId", asyncHandler(deleteAssignment));

export default router;
