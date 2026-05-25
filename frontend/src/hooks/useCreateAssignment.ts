// src/hooks/useCreateAssignment.ts

import { createAssignmentAPI } from "../api/assignment.api";

import { useAssignmentStore } from "../store/assignment.store";

import { useNotificationStore } from "../store/notification.store";

export const useCreateAssignment = () => {
  const addAssignment =
    useAssignmentStore(
      (state) => state.addAssignment
    );

  const setLoading =
    useAssignmentStore(
      (state) => state.setLoading
    );

  const setError =
    useAssignmentStore(
      (state) => state.setError
    );

  const addNotification =
    useNotificationStore(
      (state) => state.addNotification
    );

  const createAssignment = async (
    formData: FormData
  ) => {
    try {
      setLoading(true);

      setError(null);

      const response =
        await createAssignmentAPI(
          formData
        );

      if (!response?.assignment) {
        throw new Error(
          "Invalid assignment response"
        );
      }

      addAssignment(
        response.assignment
      );

      addNotification({
        id: crypto.randomUUID(),

        title: "Assignment Created",

        message:
          "Assignment submitted successfully",

        read: false,
      });

      return response;
    } catch (error: any) {
      console.error(error);

      const message =
        error?.message ||
        "Failed to create assignment";

      setError(message);

      addNotification({
        id: crypto.randomUUID(),

        title: "Creation Failed",

        message,

        read: false,
      });

      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    createAssignment,
  };
};