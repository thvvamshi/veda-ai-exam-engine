import { Router } from "express";

import {
  createAssignment,
  getAssignments,
  getAssignmentById,
} from "../controllers/assignment.controller";

import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

router.post("/", asyncHandler(createAssignment));

router.get("/", asyncHandler(getAssignments));

router.get("/:assignmentId", asyncHandler(getAssignmentById));

export default router;
