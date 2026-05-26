import {
  useEffect,
  useRef,
} from "react";

import { getAssignmentsAPI } from "../api/assignment.api";

import { useAssignmentStore } from "../store/assignment.store";

export const useAssignmentPolling =
  () => {
    const setAssignments =
      useAssignmentStore(
        (state) =>
          state.setAssignments
      );

    const previousDataRef =
      useRef("");

    useEffect(() => {
      let mounted = true;

      const fetchAssignments =
        async () => {
          try {
            const response =
              await getAssignmentsAPI();

            if (!mounted)
              return;

            let assignments =
              [];

            if (
              Array.isArray(
                response
              )
            ) {
              assignments =
                response;
            } else if (
              Array.isArray(
                response?.assignments
              )
            ) {
              assignments =
                response.assignments;
            }

            // IMPORTANT:
            // ONLY UPDATE IF DATA CHANGED

            const serialized =
              JSON.stringify(
                assignments
              );

            if (
              previousDataRef.current !==
              serialized
            ) {
              previousDataRef.current =
                serialized;

              setAssignments(
                assignments
              );
            }
          } catch (error) {
            console.error(
              "Polling failed:",
              error
            );
          }
        };

      // INITIAL FETCH
      fetchAssignments();

      // POLLING
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