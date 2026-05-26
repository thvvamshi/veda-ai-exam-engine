import mongoose from "mongoose";

import { Assignment } from "../models/Assignment";

import { GeneratedPaper } from "../models/GeneratedPaper";

// ================= CREATE =================

export const createAssignmentService = async (data: any) => {
  return Assignment.create(data);
};

// ================= GET ALL =================

export const getAssignmentsService = async () => {
  return Assignment.find().sort({
    createdAt: -1,
  });
};

// ================= GET BY ID =================

export const getAssignmentByIdService = async (assignmentId: string) => {
  return Assignment.findById(assignmentId);
};

// ================= DELETE =================

export const deleteAssignmentService = async (assignmentId: string) => {
  try {
    console.log("DELETE SERVICE ID:", assignmentId);

    // VALIDATE ID

    if (!mongoose.Types.ObjectId.isValid(assignmentId)) {
      throw new Error("Invalid assignment ID");
    }

    // DELETE GENERATED PAPERS

    await GeneratedPaper.deleteMany({
      assignmentId,
    });

    // DELETE ASSIGNMENT

    const deletedAssignment = await Assignment.findByIdAndDelete(assignmentId);

    console.log("DELETED:", deletedAssignment);

    return deletedAssignment;
  } catch (error) {
    console.error("DELETE ERROR:", error);

    throw error;
  }
};
