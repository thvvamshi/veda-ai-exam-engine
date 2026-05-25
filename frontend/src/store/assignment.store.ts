import { create } from "zustand";

import {
  Assignment,
  GeneratedPaper,
} from "../types/assignment.types";

interface AssignmentStore {
  assignments: Assignment[];

  loading: boolean;

  selectedAssignment: Assignment | null;

  error: string | null;

  setAssignments: (
    assignments: Assignment[]
  ) => void;

  addAssignment: (
    assignment: Assignment
  ) => void;

  updateAssignment: (
    assignment: Assignment
  ) => void;

  setGeneratedPaper: (
    assignmentId: string,
    generatedPaper: GeneratedPaper
  ) => void;

  setLoading: (
    value: boolean
  ) => void;

  setError: (
    value: string | null
  ) => void;

  setSelectedAssignment: (
    assignment: Assignment | null
  ) => void;
}

export const useAssignmentStore =
  create<AssignmentStore>(
    (set) => ({
      assignments: [],

      loading: false,

      selectedAssignment:
        null,

      error: null,

      setAssignments: (
        assignments
      ) =>
        set({
          assignments,
        }),

      addAssignment: (
        assignment
      ) =>
        set((state) => ({
          assignments: [
            assignment,
            ...state.assignments,
          ],
        })),

      updateAssignment: (
        assignment
      ) =>
        set((state) => ({
          assignments:
            state.assignments.map(
              (item) =>
                item._id ===
                assignment._id
                  ? assignment
                  : item
            ),
        })),

      setGeneratedPaper: (
        assignmentId,
        generatedPaper
      ) =>
        set((state) => ({
          assignments:
            state.assignments.map(
              (assignment) =>
                assignment._id ===
                assignmentId
                  ? {
                      ...assignment,
                      generatedPaper,
                      status:
                        "completed",
                    }
                  : assignment
            ),
        })),

      setLoading: (
        value
      ) =>
        set({
          loading: value,
        }),

      setError: (
        value
      ) =>
        set({
          error: value,
        }),

      setSelectedAssignment:
        (assignment) =>
          set({
            selectedAssignment:
              assignment,
          }),
    })
  );