import { Assignment } from "../models/Assignment";

export const createAssignmentService = async (data: any) => {
  return Assignment.create(data);
};

export const getAssignmentsService = async () => {
  return Assignment.find().sort({ createdAt: -1 });
};

export const getAssignmentByIdService = async (assignmentId: string) => {
  return Assignment.findById(assignmentId);
};
