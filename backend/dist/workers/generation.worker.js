"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bullmq_1 = require("bullmq");
const redis_1 = require("../config/redis");
const Assignment_1 = require("../models/Assignment");
const GeneratedPaper_1 = require("../models/GeneratedPaper");
const prompt_service_1 = require("../services/prompt.service");
const ai_service_1 = require("../services/ai/ai.service");
const emitters_1 = require("../socket/emitters");
const events_1 = require("../socket/events");
new bullmq_1.Worker("generation-queue", async (job) => {
    const { assignmentId } = job.data;
    console.log(`Processing assignment: ${assignmentId}`);
    const assignment = await Assignment_1.Assignment.findById(assignmentId);
    if (!assignment) {
        throw new bullmq_1.UnrecoverableError("Assignment not found");
    }
    try {
        // Update assignment status to processing
        assignment.status = "processing";
        await assignment.save();
        // Emit processing event to clients
        (0, emitters_1.emitToAssignmentRoom)(assignmentId, events_1.SOCKET_EVENTS.GENERATION_PROCESSING, {
            assignmentId,
            status: "processing",
        });
        // Build prompt for AI generation
        const prompt = await (0, prompt_service_1.buildPrompt)(assignment);
        // Generate questions using AI
        const generatedData = await (0, ai_service_1.generateQuestions)(prompt);
        // Validate generated data structure
        if (!generatedData.sections || !Array.isArray(generatedData.sections)) {
            throw new bullmq_1.UnrecoverableError("Invalid generated paper structure");
        }
        // Delete any existing generated paper for the assignment
        await GeneratedPaper_1.GeneratedPaper.deleteMany({
            assignmentId,
        });
        // Create new generated paper document
        const generatedPaper = await GeneratedPaper_1.GeneratedPaper.create({
            assignmentId,
            sections: generatedData.sections,
            answerKey: generatedData.answerKey,
            totalQuestions: generatedData.totalQuestions,
            totalMarks: generatedData.totalMarks,
        });
        // Update assignment status to completed
        assignment.status = "completed";
        await assignment.save();
        // Emit completion event with paper ID
        (0, emitters_1.emitToAssignmentRoom)(assignmentId, events_1.SOCKET_EVENTS.GENERATION_COMPLETED, {
            assignmentId,
            paperId: generatedPaper._id,
            status: "completed",
        });
        console.log(`Paper generated successfully for ${assignmentId}`);
    }
    catch (error) {
        console.error("Worker generation failed:", error);
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        // List of error messages that should not be retried
        const nonRetryableErrors = [
            "model not found",
            "Invalid OpenRouter API key",
            "Invalid GROQ API key",
            "Invalid AI JSON response",
            "Invalid generated paper structure",
            "Assignment not found",
        ];
        const shouldNotRetry = nonRetryableErrors.some((msg) => errorMessage.toLowerCase().includes(msg.toLowerCase()));
        // Mark assignment as failed and emit failure event if error is non-retryable
        if (shouldNotRetry) {
            assignment.status = "failed";
            await assignment.save();
            (0, emitters_1.emitToAssignmentRoom)(assignmentId, events_1.SOCKET_EVENTS.GENERATION_FAILED, {
                assignmentId,
                status: "failed",
                error: errorMessage,
            });
            console.error(`Non-retryable failure for assignment: ${assignmentId}`);
            throw new bullmq_1.UnrecoverableError(errorMessage);
        }
        //  Mark as failed if max retries reached
        if (job.attemptsMade >= (job.opts.attempts || 1) - 1) {
            assignment.status = "failed";
            await assignment.save();
            (0, emitters_1.emitToAssignmentRoom)(assignmentId, events_1.SOCKET_EVENTS.GENERATION_FAILED, {
                assignmentId,
                status: "failed",
                error: errorMessage,
            });
            console.error(`Assignment marked as failed after retries: ${assignmentId}`);
        }
        // Re-throw error to trigger retry if applicable
        throw error;
    }
}, {
    connection: redis_1.redisConnection,
    concurrency: 5,
});
