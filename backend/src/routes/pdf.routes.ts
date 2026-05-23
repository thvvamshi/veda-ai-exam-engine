import { Router } from "express";

import { downloadQuestionPaperPDF } from "../controllers/pdf.controller";

const router = Router();

router.get(
  "/:generatedPaperId/pdf",

  downloadQuestionPaperPDF,
);

export default router;
