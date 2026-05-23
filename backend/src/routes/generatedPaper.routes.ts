import { Router } from "express";

import { getGeneratedPaper } from "../controllers/generatedPaper.controller";

import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

router.get(
  "/:assignmentId",

  asyncHandler(getGeneratedPaper),
);

export default router;
