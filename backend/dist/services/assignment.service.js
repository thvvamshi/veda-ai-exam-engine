"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAssignmentService = exports.getAssignmentByIdService = exports.getAssignmentsService = exports.createAssignmentService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Assignment_1 = require("../models/Assignment");
const GeneratedPaper_1 = require("../models/GeneratedPaper");
// ================= CREATE =================
const createAssignmentService = async (data) => {
    return Assignment_1.Assignment.create(data);
};
exports.createAssignmentService = createAssignmentService;
// ================= GET ALL =================
const getAssignmentsService = async () => {
    return Assignment_1.Assignment.find().sort({
        createdAt: -1,
    });
};
exports.getAssignmentsService = getAssignmentsService;
// ================= GET BY ID =================
const getAssignmentByIdService = async (assignmentId) => {
    return Assignment_1.Assignment.findById(assignmentId);
};
exports.getAssignmentByIdService = getAssignmentByIdService;
// ================= DELETE =================
const deleteAssignmentService = async (assignmentId) => {
    try {
        console.log("DELETE SERVICE ID:", assignmentId);
        // VALIDATE ID
        if (!mongoose_1.default.Types.ObjectId.isValid(assignmentId)) {
            throw new Error("Invalid assignment ID");
        }
        // DELETE GENERATED PAPERS
        await GeneratedPaper_1.GeneratedPaper.deleteMany({
            assignmentId,
        });
        // DELETE ASSIGNMENT
        const deletedAssignment = await Assignment_1.Assignment.findByIdAndDelete(assignmentId);
        console.log("DELETED:", deletedAssignment);
        return deletedAssignment;
    }
    catch (error) {
        console.error("DELETE ERROR:", error);
        throw error;
    }
};
exports.deleteAssignmentService = deleteAssignmentService;
