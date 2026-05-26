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
      const fetchAssignments =
        async () => {
          try {
            setLoading(true);

            setError(null);

            const response =
              await getAssignmentsAPI();

            console.log(
              "API RESPONSE:",
              response
            );

            // IMPORTANT
            setAssignments(
              response?.data || []
            );
          } catch (error: any) {
            console.error(error);

            setError(
              error.message
            );
          } finally {
            setLoading(false);
          }
        };

      fetchAssignments();
    }, []);
  };