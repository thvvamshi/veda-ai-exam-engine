import {
  useEffect,
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

    useEffect(() => {
      let mounted = true;

      const fetchAssignments =
        async () => {
          try {
            const response =
              await getAssignmentsAPI();

            if (!mounted)
              return;

            const assignments =
              Array.isArray(
                response
              )
                ? response
                : response?.assignments ||
                  [];

            setAssignments(
              assignments
            );
          } catch (error) {
            console.error(
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
    }, []);
  };