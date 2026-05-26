import { Router } from "express";

import {
  createAssignment,
  getAssignments,
  getAssignmentById,
} from "../controllers/assignment.controller";

import { asyncHandler } from "../utils/asyncHandler";

import { upload } from "../middleware/upload.middleware";

const router = Router();

// CREATE ASSIGNMENT
router.post("/",upload.single("file"),asyncHandler(createAssignment),);

// GET ALL ASSIGNMENTS
router.get("/", asyncHandler(getAssignments));

// GET ASSIGNMENTS BY ID
router.get("/:assignmentId", asyncHandler(getAssignmentById));

export default router;
