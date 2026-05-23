import { UnifiedAIProvider } from "./providers/ai.provider";

const provider = new UnifiedAIProvider();

export const generateQuestions = async (prompt: string) => {
  try {
    return await provider.generate(prompt);
  } catch (error) {
    console.error("AI service failed:", error);

    throw error;
  }
};
