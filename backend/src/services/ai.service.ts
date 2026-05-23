import { geminiModel } from "../config/ai";

import { extractJson } from "../utils/extractJson";

export const generateQuestions = async (prompt: string) => {
  try {
    const result = await geminiModel.generateContent(prompt);

    const response = result.response.text();

    if (!response) {
      throw new Error("Empty AI response");
    }

    const jsonString = extractJson(response);

    return JSON.parse(jsonString);
  } catch (error: any) {
    console.error("AI generation failed:", error);

    // handle specific AI errors like quota limits
    if (error.status === 429) {
      throw new Error("AI quota exceeded");
    }

    // give generic error for all other cases to avoid exposing internal details
    throw new Error("Failed to generate AI response");
  }
};
