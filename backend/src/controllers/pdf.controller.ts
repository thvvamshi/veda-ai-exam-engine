import { Request, Response } from "express";

import { GeneratedPaper } from "../models/GeneratedPaper";

import { Assignment } from "../models/Assignment";

import { generateQuestionPaperPDF } from "../services/pdf.service";

export const downloadQuestionPaperPDF = async (
  req: Request,

  res: Response,
) => {
  try {
    const { generatedPaperId } = req.params;
    // Find generated paper
    const generatedPaper = await GeneratedPaper.findById(generatedPaperId);

    if (!generatedPaper) {
      return res.status(404).json({
        success: false,

        message: "Generated paper not found",
      });
    }
    // Find associated assignment
    const assignment = await Assignment.findById(generatedPaper.assignmentId);

    if (!assignment) {
      return res.status(404).json({
        success: false,

        message: "Assignment not found",
      });
    }
    // Generate and send PDF
    return generateQuestionPaperPDF(
      generatedPaper,

      assignment,

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
