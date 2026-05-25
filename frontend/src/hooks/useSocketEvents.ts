import {
  useEffect,
} from "react";

import { socket } from "../sockets/socket";

import { useAssignmentStore } from "../store/assignment.store";

import { useNotificationStore } from "../store/notification.store";

export const useSocketEvents =
  () => {
    const updateAssignment =
      useAssignmentStore(
        (state) =>
          state.updateAssignment
      );

    const setSelectedAssignment =
      useAssignmentStore(
        (state) =>
          state.setSelectedAssignment
      );

    const addNotification =
      useNotificationStore(
        (state) =>
          state.addNotification
      );

    useEffect(() => {
      const handleCompleted =
        (data: any) => {
          try {
            if (
              data?.assignment
            ) {
              updateAssignment(
                data.assignment
              );

              setSelectedAssignment(
                data.assignment
              );

              addNotification({
                id: crypto.randomUUID(),

                title:
                  "Assignment Ready",

                message:
                  "Question paper generated successfully",

                read: false,
              });
            }
          } catch (error) {
            console.error(
              error
            );
          }
        };

      const handleFailed =
        () => {
          addNotification({
            id: crypto.randomUUID(),

            title:
              "Generation Failed",

            message:
              "Failed to generate paper",

            read: false,
          });
        };

      socket.on(
        "assignment-completed",
        handleCompleted
      );

      socket.on(
        "assignment-failed",
        handleFailed
      );

      return () => {
        socket.off(
          "assignment-completed",
          handleCompleted
        );

        socket.off(
          "assignment-failed",
          handleFailed
        );
      };
    }, []);
  };