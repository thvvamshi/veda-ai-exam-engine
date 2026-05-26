"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pdf_controller_1 = require("../controllers/pdf.controller");
const router = (0, express_1.Router)();
router.get("/:generatedPaperId/pdf", pdf_controller_1.downloadQuestionPaperPDF);
exports.default = router;
