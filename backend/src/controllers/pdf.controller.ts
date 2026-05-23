import { Request, Response } from "express";

import { GeneratedPaper } from "../models/GeneratedPaper";

import { generateQuestionPaperPDF } from "../services/pdf.service";

export const downloadQuestionPaperPDF = async (
  req: Request,

  res: Response,
) => {
  try {
    const { generatedPaperId } = req.params;

    const generatedPaper = await GeneratedPaper.findById(generatedPaperId);

    if (!generatedPaper) {
      return res.status(404).json({
        success: false,

        message: "Generated paper not found",
      });
    }

    return generateQuestionPaperPDF(
      generatedPaper,

      res,
    );
  } catch (error) {
    console.error("PDF generation failed:", error);

    return res.status(500).json({
      success: false,

      message: "Failed to generate PDF",
    });
  }
};
