"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePaper = void 0;
const Assignment_1 = require("../models/Assignment");
const generation_queue_1 = require("../queues/generation.queue");
const apiResponse_1 = require("../utils/apiResponse");
const emitters_1 = require("../socket/emitters");
const events_1 = require("../socket/events");
const generatePaper = async (req, res) => {
    const { assignmentId } = req.params;
    // Validate assignment ID
    const assignment = await Assignment_1.Assignment.findById(assignmentId);
    if (!assignment) {
        return res.status(404).json({
            success: false,
            message: "Assignment not found",
        });
    }
    // Prevent duplicate generation jobs for the same assignment
    if (assignment.status === "processing" || assignment.status === "queued") {
        return res.status(400).json({
            success: false,
            message: "Assignment generation already in progress",
        });
    }
    // Update assignment status to queued
    assignment.status = "queued";
    await assignment.save();
    // Add job to the generation queue
    const job = await generation_queue_1.generationQueue.add("generate-paper", {
        assignmentId,
    }, {
        attempts: 3,
        backoff: {
            type: "exponential",
            delay: 2000,
        },
        removeOnComplete: 50,
        removeOnFail: 20,
    });
    // Emit socket event to notify clients about the new job
    (0, emitters_1.emitToAssignmentRoom)(assignmentId, events_1.SOCKET_EVENTS.GENERATION_QUEUED, {
        assignmentId,
        status: "queued",
        jobId: job.id,
    });
    // Respond with job ID for tracking
    return res.status(200).json((0, apiResponse_1.successResponse)({
        jobId: job.id,
    }, "Generation job queued"));
};
exports.generatePaper = generatePaper;
