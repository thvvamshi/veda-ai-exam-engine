import { OpenRouterProvider } from "./providers/openrouter.provider";

const provider = new OpenRouterProvider();

export const generateQuestions = async (prompt: string) => {
  try {
    return await provider.generate(prompt);
  } catch (error) {
    console.error("AI service failed:", error);

    throw error;
  }
};
