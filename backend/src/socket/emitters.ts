import { getIO } from "./index";

export const emitToAssignmentRoom = (
  assignmentId: string,
  event: string,
  payload: unknown,
) => {
  try {
    if (!assignmentId) {
      throw new Error("Assignment ID is required");
    }

    const io = getIO();

    io.to(`assignment:${assignmentId}`).emit(event, payload);

    console.log(`Socket event emitted: ${event} -> assignment:${assignmentId}`);
  } catch (error) {
    console.error("Socket emit failed:", error);
  }
};
