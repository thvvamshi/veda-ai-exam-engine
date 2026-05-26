"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadQuestionPaperPDF = void 0;
const GeneratedPaper_1 = require("../models/GeneratedPaper");
const Assignment_1 = require("../models/Assignment");
const pdf_service_1 = require("../services/pdf.service");
const downloadQuestionPaperPDF = async (req, res) => {
    try {
        const { generatedPaperId } = req.params;
        // Find generated paper
        const generatedPaper = await GeneratedPaper_1.GeneratedPaper.findById(generatedPaperId);
        if (!generatedPaper) {
            return res.status(404).json({
                success: false,
                message: "Generated paper not found",
            });
        }
        // Find associated assignment
        const assignment = await Assignment_1.Assignment.findById(generatedPaper.assignmentId);
        if (!assignment) {
            return res.status(404).json({
                success: false,
                message: "Assignment not found",
            });
        }
        // Generate and send PDF
        return (0, pdf_service_1.generateQuestionPaperPDF)(generatedPaper, assignment, res);
    }
    catch (error) {
        console.error("PDF generation failed:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to generate PDF",
        });
    }
};
exports.downloadQuestionPaperPDF = downloadQuestionPaperPDF;
