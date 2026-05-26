"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const generatedPaper_controller_1 = require("../controllers/generatedPaper.controller");
const asyncHandler_1 = require("../utils/asyncHandler");
const router = (0, express_1.Router)();
router.get("/:assignmentId", (0, asyncHandler_1.asyncHandler)(generatedPaper_controller_1.getGeneratedPaper));
exports.default = router;
