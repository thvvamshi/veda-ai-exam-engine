"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emitToAssignmentRoom = void 0;
const index_1 = require("./index");
const emitToAssignmentRoom = (assignmentId, event, payload) => {
    try {
        if (!assignmentId) {
            throw new Error("Assignment ID is required");
        }
        const io = (0, index_1.getIO)();
        io.to(`assignment:${assignmentId}`).emit(event, payload);
        console.log(`Socket event emitted: ${event} -> assignment:${assignmentId}`);
    }
    catch (error) {
        console.error("Socket emit failed:", error);
    }
};
exports.emitToAssignmentRoom = emitToAssignmentRoom;
