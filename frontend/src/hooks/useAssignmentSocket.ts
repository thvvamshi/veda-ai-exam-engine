import { useEffect } from "react";

import { socket } from "../sockets/socket";

import { useAssignmentStore } from "../store/assignment.store";

export const useAssignmentSocket =
  () => {
    const setGeneratedPaper =
      useAssignmentStore(
        (state) =>
          state.setGeneratedPaper
      );

    useEffect(() => {
      socket.on(
        "assignment-completed",
        (data) => {
          setGeneratedPaper(
            data.assignmentId,
            data.generatedPaper
          );
        }
      );

      return () => {
        socket.off(
          "assignment-completed"
        );
      };
    }, [setGeneratedPaper]);
  };