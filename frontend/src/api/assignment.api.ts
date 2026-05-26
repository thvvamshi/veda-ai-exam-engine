import { api } from "./axios";

export const createAssignmentAPI = async (formData: FormData) => {
  const response = await api.post("/assignments", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const getAssignmentsAPI = async () => {
  const response = await api.get("/assignments");

  return response.data;
};

export const getAssignmentByIdAPI = async (id: string) => {
  const response = await api.get(`/assignments/${id}`);

  return response.data;
};

export const generateAssignmentAPI = async (assignmentId: string) => {
  const response = await api.post(`/assignments/${assignmentId}/generate`);

  return response.data;
};

export const deleteAssignmentAPI = async (id: string) => {
  const response = await api.delete(`/assignments/${id}`);

  return response.data;
};
