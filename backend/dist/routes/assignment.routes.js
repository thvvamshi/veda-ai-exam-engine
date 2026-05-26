"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const assignment_controller_1 = require("../controllers/assignment.controller");
const asyncHandler_1 = require("../utils/asyncHandler");
const upload_middleware_1 = require("../middleware/upload.middleware");
const router = (0, express_1.Router)();
// CREATE
router.post("/", upload_middleware_1.upload.single("file"), (0, asyncHandler_1.asyncHandler)(assignment_controller_1.createAssignment));
// GET ALL
router.get("/", (0, asyncHandler_1.asyncHandler)(assignment_controller_1.getAssignments));
// GET BY ID
router.get("/:assignmentId", (0, asyncHandler_1.asyncHandler)(assignment_controller_1.getAssignmentById));
// DELETE
router.delete("/:assignmentId", (0, asyncHandler_1.asyncHandler)(assignment_controller_1.deleteAssignment));
exports.default = router;
