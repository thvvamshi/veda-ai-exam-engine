import { Router } from "express";

import { generatePaper } from "../controllers/generation.controller";

import { generationLimiter } from "../middleware/rateLimit.middleware";

import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

router.post(
  "/:assignmentId/generate",

  generationLimiter,

  asyncHandler(generatePaper),
);

export default router;
