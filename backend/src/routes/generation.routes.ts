import { Router } from "express";

import { generatePaper } from "../controllers/generation.controller";

import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

router.post(
  "/:assignmentId/generate",

  asyncHandler(generatePaper),
);

export default router;
