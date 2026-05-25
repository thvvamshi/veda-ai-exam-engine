// src/api/assignment.api.ts

import { api } from "./axios";

export const createAssignmentAPI =
  async (formData: FormData) => {
    try {
      const response = await api.post(
        "/assignments",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message ||
          "Failed to create assignment"
      );
    }
  };

export const getAssignmentsAPI =
  async () => {
    try {
      const response = await api.get(
        "/assignments"
      );

      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message ||
          "Failed to fetch assignments"
      );
    }
  };

export const getAssignmentByIdAPI =
  async (id: string) => {
    try {
      const response = await api.get(
        `/assignments/${id}`
      );

      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message ||
          "Failed to fetch assignment"
      );
    }
  };