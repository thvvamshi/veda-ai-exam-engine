import {
  useEffect,
} from "react";

import { getAssignmentsAPI } from "../api/assignment.api";

import { useAssignmentStore } from "../store/assignment.store";

export const useAssignments =
  () => {
    const setAssignments =
      useAssignmentStore(
        (state) =>
          state.setAssignments
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

    useEffect(() => {
      let mounted = true;

      const fetchAssignments =
        async () => {
          try {
            setLoading(true);

            setError(null);

            const response =
              await getAssignmentsAPI();

            console.log(
              "Assignments Response:",
              response
            );

            if (!mounted)
              return;

            let assignments =
              [];

            // ARRAY DIRECTLY
            if (
              Array.isArray(
                response
              )
            ) {
              assignments =
                response;
            }

            // RESPONSE.ASSIGNMENTS
            else if (
              Array.isArray(
                response?.assignments
              )
            ) {
              assignments =
                response.assignments;
            }

            // RESPONSE.DATA
            else if (
              Array.isArray(
                response?.data
              )
            ) {
              assignments =
                response.data;
            }

            // FALLBACK
            else {
              assignments =
                [];
            }

            setAssignments(
              assignments
            );
          } catch (error: any) {
            console.error(
              "Assignments Error:",
              error
            );

            if (!mounted)
              return;

            setAssignments([]);

            setError(
              error?.message ||
                "Failed to fetch assignments"
            );
          } finally {
            if (mounted) {
              setLoading(
                false
              );
            }
          }
        };

      fetchAssignments();

      return () => {
        mounted = false;
      };
    }, []);
  };