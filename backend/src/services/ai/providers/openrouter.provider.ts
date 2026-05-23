import OpenAI from "openai";

import { extractJson } from "../../../utils/extractJson";

import { AIProvider } from "../types";

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,

  baseURL: "https://openrouter.ai/api/v1",

  timeout: 60000,
});

// first model is from OpenRouter (free)
// second is OpenAI as fallback (paid, but more reliable)

const MODELS = [
  process.env.OPENROUTER_MODEL || "google/gemma-2-9b-it:free",

  "openai/gpt-3.5-turbo",
];

export class OpenRouterProvider implements AIProvider {
  async generate(prompt: string) {
    let lastError: any = null;

    // Try each model in order until one succeeds
    for (const model of MODELS) {
      try {
        console.log(`Trying model: ${model}`);

        // | Call OpenRouter API
        const completion = await client.chat.completions.create({
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

          temperature: 0.7,

          max_tokens: 4000,
        });

        // validate response structure
        const response = completion.choices?.[0]?.message?.content;

        if (!response) {
          throw new Error("Empty AI response received");
        }

        // extract JSON from response
        const jsonString = extractJson(response);

        // parse JSON and validate structure
        const parsedResponse = JSON.parse(jsonString);

        // validate expected structure
        if (
          !parsedResponse.sections ||
          !Array.isArray(parsedResponse.sections)
        ) {
          throw new Error("Invalid AI response structure");
        }

        console.log(`Model succeeded: ${model}`);

        // normalize difficulty levels to lowercase
        parsedResponse.sections = parsedResponse.sections.map(
          (section: any) => ({
            ...section,

            questions: section.questions.map((question: any) => ({
              ...question,

              difficulty: question.difficulty?.toLowerCase()?.trim(),
            })),
          }),
        );

        return parsedResponse;
      } catch (error: any) {
        console.error(`Model failed: ${model}`, error?.message);

        lastError = error;

        // Define non-retryable errors that should skip remaining models
        continue;
      }
    }

    // all models failed
    console.error("All OpenRouter models failed");

    if (lastError?.status === 401) {
      throw new Error("Invalid OpenRouter API key");
    }

    if (lastError?.status === 429) {
      throw new Error("OpenRouter rate limit exceeded");
    }

    if (lastError?.status >= 500) {
      throw new Error("OpenRouter service unavailable");
    }

    if (lastError instanceof SyntaxError) {
      throw new Error("Invalid AI JSON response");
    }

    if (lastError?.status === 404) {
      throw new Error("OpenRouter model not found");
    }

    throw new Error(
      lastError?.message || "Failed to generate questions using OpenRouter",
    );
  }
}
