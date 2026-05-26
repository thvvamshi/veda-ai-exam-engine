"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const generation_controller_1 = require("../controllers/generation.controller");
const rateLimit_middleware_1 = require("../middleware/rateLimit.middleware");
const asyncHandler_1 = require("../utils/asyncHandler");
const router = (0, express_1.Router)();
router.post("/:assignmentId/generate", rateLimit_middleware_1.generationLimiter, (0, asyncHandler_1.asyncHandler)(generation_controller_1.generatePaper));
exports.default = router;
