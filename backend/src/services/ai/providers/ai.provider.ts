import Groq from "groq-sdk";

import OpenAI from "openai";

import { extractJson } from "../../../utils/extractJson";

import { AIProvider } from "../types";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const openrouter = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,

  baseURL: "https://openrouter.ai/api/v1",

  timeout: 60000,
});

// Note: OpenRouter's free tier has limited models, so we can try multiple if needed
const OPENROUTER_MODELS = process.env.OPENROUTER_MODEL
  ? [process.env.OPENROUTER_MODEL]
  : ["openrouter/free", "deepseek/deepseek-v4-flash:free",];

export class UnifiedAIProvider implements AIProvider {
  async generate(prompt: string) {
    try {
      console.log("Trying GROQ...");

      const completion = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",

        messages: [
          {
            role: "system",

            content:
              "You are a professional exam paper generator. Always return valid JSON only.",
          },

          {
            role: "user",

            content: prompt,
          },
        ],

        temperature: 0.3,

        max_tokens: 1800,
      });

      const response = completion.choices?.[0]?.message?.content;

      if (!response) {
        throw new Error("Empty GROQ response");
      }

      console.log("GROQ succeeded");

      return this.normalizeResponse(response);
    } catch (error) {
      console.error("GROQ failed:", error);
    }

    let lastError: any = null;

    for (const model of OPENROUTER_MODELS) {
      try {
        console.log(`Trying OpenRouter model: ${model}`);

        const completion = await openrouter.chat.completions.create({
          model,

          messages: [
            {
              role: "system",

              content:
                "You are a professional exam paper generator. Always return valid JSON only.",
            },

            {
              role: "user",

              content: prompt,
            },
          ],

          temperature: 0.3,

          max_tokens: 1800,
        });

        const response = completion.choices?.[0]?.message?.content;

        if (!response) {
          throw new Error("Empty OpenRouter response");
        }

        console.log(`OpenRouter succeeded: ${model}`);

        return this.normalizeResponse(response);
      } catch (error: any) {
        console.error(`OpenRouter failed: ${model}`, error?.message);

        lastError = error;
      }
    }

    throw new Error(lastError?.message || "All AI providers failed");
  }

  private normalizeResponse(rawResponse: string) {
    const jsonString = extractJson(rawResponse);

    const parsedResponse = JSON.parse(jsonString);

    if (!parsedResponse.sections || !Array.isArray(parsedResponse.sections)) {
      throw new Error("Invalid AI response structure");
    }

    parsedResponse.sections = parsedResponse.sections.map((section: any) => ({
      ...section,

      title: section.title || "Untitled Section",

      instruction: section.instruction || "",

      questions: Array.isArray(section.questions)
        ? section.questions.map((question: any) => {
            question.questionText =
              question.questionText?.toString()?.trim() || "Untitled Question";

            question.difficulty = question.difficulty?.toLowerCase()?.trim();

            if (!["easy", "medium", "hard"].includes(question.difficulty)) {
              question.difficulty = "medium";
            }

            question.type = question.type?.toLowerCase()?.trim();

            const validTypes = ["mcq", "short", "long", "numerical", "diagram"];

            if (!validTypes.includes(question.type)) {
              question.type = "short";
            }

            question.marks = Number(question.marks) || 1;

            if (question.type === "mcq") {
              question.options = Array.isArray(question.options)
                ? question.options
                    .filter(
                      (option: any) =>
                        typeof option === "string" && option.trim() !== "",
                    )
                    .slice(0, 4)
                : [];

              while (question.options.length < 4) {
                question.options.push(`Option ${question.options.length + 1}`);
              }

              if (
                !question.correctAnswer ||
                !question.options.includes(question.correctAnswer)
              ) {
                question.correctAnswer = question.options[0];
              }
            } else {
              question.options = [];

              question.correctAnswer = null;
            }

            return question;
          })
        : [],
    }));

    parsedResponse.answerKey =
      Array.isArray(parsedResponse.answerKey) &&
      parsedResponse.answerKey.length > 0
        ? parsedResponse.answerKey
        : parsedResponse.sections.flatMap((section: any) =>
            section.questions.map((question: any) => ({
              question: question.questionText,

              answer: question.correctAnswer || "Refer explanation",
            })),
          );

    parsedResponse.totalQuestions = parsedResponse.sections.reduce(
      (acc: number, section: any) => acc + section.questions.length,

      0,
    );

    parsedResponse.totalMarks = parsedResponse.sections.reduce(
      (acc: number, section: any) =>
        acc +
        section.questions.reduce(
          (qAcc: number, question: any) => qAcc + question.marks,

          0,
        ),

      0,
    );

    return parsedResponse;
  }
}
