import { api } from "./axios";

export const getGeneratedPaperAPI =
  async (
    assignmentId: string
  ) => {
    const response =
      await api.get(
        `/generated-papers/${assignmentId}`
      );

    return response.data;
  };

export const getGeneratedPaperPdfUrl =
  (paperId: string) => {
    return `${
      import.meta.env
        .VITE_API_URL
    }/generated-papers/${paperId}/pdf`;
  };