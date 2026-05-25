import { useEffect } from "react";

import { getAssignmentsAPI } from "../api/assignment.api";

import { useAssignmentStore } from "../store/assignment.store";

export const useAssignmentPolling =
  () => {
    const setAssignments =
      useAssignmentStore(
        (state) =>
          state.setAssignments
      );

    useEffect(() => {
      let mounted = true;

      const fetchAssignments =
        async () => {
          try {
            const response =
              await getAssignmentsAPI();

            console.log(
              "Polling response:",
              response
            );

            if (!mounted)
              return;

            const assignments =
              Array.isArray(
                response
              )
                ? response
                : Array.isArray(
                      response?.assignments
                    )
                  ? response.assignments
                  : [];

            setAssignments(
              assignments
            );
          } catch (error) {
            console.error(
              "Polling failed:",
              error
            );
          }
        };

      fetchAssignments();

      const interval =
        setInterval(
          fetchAssignments,
          10000
        );

      return () => {
        mounted = false;

        clearInterval(
          interval
        );
      };
    }, [setAssignments]);
  };