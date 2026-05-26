import toast from "react-hot-toast";

import {
  createAssignmentAPI,
  generateAssignmentAPI,
} from "../api/assignment.api";

import { useAssignmentStore } from "../store/assignment.store";

import { useNotificationStore } from "../store/notification.store";

export const useCreateAssignment =
  () => {
    const addAssignment =
      useAssignmentStore(
        (state) =>
          state.addAssignment
      );

    const setLoading =
      useAssignmentStore(
        (state) =>
          state.setLoading
      );

    const setError =
      useAssignmentStore(
        (state) =>
          state.setError
      );

    const addNotification =
      useNotificationStore(
        (state) =>
          state.addNotification
      );

    const createAssignment =
      async (
        formData: FormData
      ) => {
        const toastId =
          toast.loading(
            "Creating assignment..."
          );

        try {
          setLoading(true);

          setError(null);

          // CREATE
          const response =
            await createAssignmentAPI(
              formData
            );

          const assignment =
            response?.data;

          if (!assignment) {
            throw new Error(
              "Invalid assignment response"
            );
          }

          // ADD TO STORE
          addAssignment({
            ...assignment,

            status:
              "processing",
          });

          // GENERATE AI PAPER
          await generateAssignmentAPI(
            assignment.id
          );

          // NOTIFICATION
          addNotification({
            id: crypto.randomUUID(),

            title:
              "AI Generation Started",

            message:
              "Question paper generation started.",

            read: false,

            createdAt:
              new Date().toISOString(),
          });

          toast.success(
            "Assignment created successfully",
            {
              id: toastId,
            }
          );

          return assignment;
        } catch (error: any) {
          console.error(error);

          const message =
            error?.message ||
            "Failed to create assignment";

          setError(message);

          addNotification({
            id: crypto.randomUUID(),

            title:
              "Creation Failed",

            message,

            read: false,

            createdAt:
              new Date().toISOString(),
          });

          toast.error(
            message,
            {
              id: toastId,
            }
          );

          throw error;
        } finally {
          setLoading(false);
        }
      };

    return {
      createAssignment,
    };
  };