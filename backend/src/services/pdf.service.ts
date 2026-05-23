import PDFDocument from "pdfkit";

import { Response } from "express";

export const generateQuestionPaperPDF = (
  generatedPaper: any,

  res: Response,
) => {
  // initialize PDF document with appropriate margins
  const doc = new PDFDocument({
    margin: 50,
  });

  //   set response headers for PDF download
  res.setHeader("Content-Type", "application/pdf");

  res.setHeader(
    "Content-Disposition",

    `attachment; filename=question-paper-${generatedPaper.assignmentId}.pdf`,
  );
  // pipe PDF stream to response
  doc.pipe(res);
  // add title to the PDF
  doc.fontSize(22).text("Question Paper", {
    align: "center",
  });

  doc.moveDown();
  // add assignment details
  generatedPaper.sections.forEach((section: any, sectionIndex: number) => {
    // add section title
    doc.fontSize(18).text(section.title);

    doc.moveDown(0.5);
    //  add section instructions if available
    doc.fontSize(12).text(section.instruction);

    doc.moveDown();
    // add questions for the section
    section.questions.forEach((question: any, questionIndex: number) => {
      doc.fontSize(13).text(`${questionIndex + 1}. ${question.questionText}`);

      doc.moveDown(0.5);
      // add options for MCQs
      if (question.type === "mcq" && question.options?.length) {
        question.options.forEach((option: string, optionIndex: number) => {
          doc.text(`${String.fromCharCode(65 + optionIndex)}. ${option}`);
        });

        doc.moveDown();
      }
      // add marks and difficulty level below each question
      doc
        .fontSize(10)
        .text(`Marks: ${question.marks} | Difficulty: ${question.difficulty}`);

      doc.moveDown();
    });

    doc.moveDown();
  });
  // finalize PDF and end stream
  doc.end();
};
