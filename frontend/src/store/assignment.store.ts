import { create } from "zustand";

import { Assignment } from "../types/assignment.types";

interface AssignmentStore {
  assignments: Assignment[];

  selectedAssignment:
    | Assignment
    | null;

  loading: boolean;

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

  setSelectedAssignment: (
    assignment: Assignment | null
  ) => void;

  setGeneratedPaper: (
    assignmentId: string,
    generatedPaper: any
  ) => void;

  setLoading: (
    value: boolean
  ) => void;

  setError: (
    value: string | null
  ) => void;
}

export const useAssignmentStore =
  create<AssignmentStore>(
    (set) => ({
      assignments: [],

      selectedAssignment:
        null,

      loading: false,

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
                item.id ===
                assignment.id
                  ? assignment
                  : item
            ),

          selectedAssignment:
            state.selectedAssignment
              ? state
                  .selectedAssignment
                  .id ===
                assignment.id
                ? assignment
                : state.selectedAssignment
              : null,
        })),

      setSelectedAssignment:
        (assignment) =>
          set({
            selectedAssignment:
              assignment,
          }),

      setGeneratedPaper: (
        assignmentId,
        generatedPaper
      ) =>
        set((state) => ({
          assignments:
            state.assignments.map(
              (assignment) =>
                assignment.id ===
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

      setError: (value) =>
        set({
          error: value,
        }),
    })
  );