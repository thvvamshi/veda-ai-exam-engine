"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAssignment = exports.getAssignmentById = exports.getAssignments = exports.createAssignment = void 0;
const apiResponse_1 = require("../utils/apiResponse");
const assignment_validator_1 = require("../validators/assignment.validator");
const assignment_service_1 = require("../services/assignment.service");
// ================= CREATE =================
const createAssignment = async (req, res) => {
    if (req.body.questionTypes && typeof req.body.questionTypes === "string") {
        req.body.questionTypes = JSON.parse(req.body.questionTypes);
    }
    const typeMap = {
        "Multiple Choice Questions": "mcq",
        "Short Questions": "short",
        "Long Questions": "long",
        "Numerical Problems": "numerical",
        "Diagram/Graph-Based Questions": "diagram",
    };
    if (Array.isArray(req.body.questionTypes)) {
        req.body.questionTypes = req.body.questionTypes.map((item) => ({
            ...item,
            type: typeMap[item.type] || item.type,
        }));
    }
    if (req.file) {
        const file = req.file;
        req.body.uploadedFileUrl = file.path;
    }
    const validatedData = assignment_validator_1.createAssignmentSchema.parse(req.body);
    const assignment = await (0, assignment_service_1.createAssignmentService)(validatedData);
    return res
        .status(201)
        .json((0, apiResponse_1.successResponse)(assignment, "Assignment created successfully"));
};
exports.createAssignment = createAssignment;
// ================= GET ALL =================
const getAssignments = async (_req, res) => {
    const assignments = await (0, assignment_service_1.getAssignmentsService)();
    return res.json((0, apiResponse_1.successResponse)(assignments));
};
exports.getAssignments = getAssignments;
// ================= GET BY ID =================
const getAssignmentById = async (req, res) => {
    const { assignmentId } = req.params;
    const assignment = await (0, assignment_service_1.getAssignmentByIdService)(assignmentId);
    if (!assignment) {
        return res.status(404).json({
            success: false,
            message: "Assignment not found",
        });
    }
    return res.json((0, apiResponse_1.successResponse)(assignment));
};
exports.getAssignmentById = getAssignmentById;
// ================= DELETE =================
const deleteAssignment = async (req, res) => {
    try {
        const { assignmentId } = req.params;
        console.log("DELETE CONTROLLER ID:", assignmentId);
        const deletedAssignment = await (0, assignment_service_1.deleteAssignmentService)(assignmentId);
        if (!deletedAssignment) {
            return res.status(404).json({
                success: false,
                message: "Assignment not found",
            });
        }
        return res.json((0, apiResponse_1.successResponse)(deletedAssignment, "Assignment deleted successfully"));
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message || "Failed to delete assignment",
        });
    }
};
exports.deleteAssignment = deleteAssignment;
