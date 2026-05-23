import OpenAI from "openai";

import { extractJson } from "../../../utils/extractJson";

import { AIProvider } from "../types";

// initialize OpenAI client with OpenRouter configuration
const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,

  baseURL: "https://openrouter.ai/api/v1",

  timeout: 60000,
});

const MODELS = [
  process.env.OPENROUTER_MODEL || "google/gemma-2-9b-it:free",

  "openai/gpt-3.5-turbo",
];



export class OpenRouterProvider implements AIProvider {
  async generate(prompt: string) {
    let lastError: any = null;



    for (const model of MODELS) {
      try {
        console.log(`Trying model: ${model}`);


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


        const response = completion.choices?.[0]?.message?.content;

        if (!response) {
          throw new Error("Empty AI response received");
        }


        const jsonString = extractJson(response);


        const parsedResponse = JSON.parse(jsonString);


        if (
          !parsedResponse.sections ||
          !Array.isArray(parsedResponse.sections)
        ) {
          throw new Error("Invalid AI response structure");
        }


        parsedResponse.sections = parsedResponse.sections.map(
          (section: any) => ({
            ...section,

            title: section.title || "Untitled Section",

            instruction: section.instruction || "",

            questions: Array.isArray(section.questions)
              ? section.questions.map((question: any) => {

                  question.questionText =
                    question.questionText?.toString()?.trim() ||
                    "Untitled Question";

                  question.difficulty = question.difficulty
                    ?.toLowerCase()
                    ?.trim();

                  if (
                    !["easy", "medium", "hard"].includes(question.difficulty)
                  ) {
                    question.difficulty = "medium";
                  }

                  question.type = question.type?.toLowerCase()?.trim();
                //   normalize question type, default to "short" if invalid
                  const validTypes = [
                    "mcq",
                    "short",
                    "long",
                    "numerical",
                    "diagram",
                  ];

                  if (!validTypes.includes(question.type)) {
                    question.type = "short";
                  }

                //   normalize marks
                  question.marks = Number(question.marks) || 1;
                //   if marks is less than 1, default to 1
                  if (question.type === "mcq") {
                    // ensure options is an array of non-empty strings, max 4
                    question.options = Array.isArray(question.options)
                      ? question.options
                          .filter(
                            (option: any) =>
                              typeof option === "string" &&
                              option.trim() !== "",
                          )
                          .slice(0, 4)
                      : [];
                      
                    //   if less than 4 options, fill the rest with placeholders
                    while (question.options.length < 4) {
                      question.options.push(
                        `Option ${question.options.length + 1}`,
                      );
                    }

                    // if correctAnswer is missing or not in options, default to first option
                    if (
                      !question.correctAnswer ||
                      !question.options.includes(question.correctAnswer)
                    ) {
                      question.correctAnswer = question.options[0];
                    }
                  } else {

                    // for non-MCQ questions, ensure options and correctAnswer are null/empty
                    question.options = [];

                    question.correctAnswer = null;
                  }

                  return question;
                })
              : [],
          }),
        );

        // ensure answerKey is an array even if AI returns null or invalid format
        parsedResponse.answerKey = Array.isArray(parsedResponse.answerKey)
          ? parsedResponse.answerKey
          : [];

        console.log(`Model succeeded: ${model}`);

        return parsedResponse;
      } catch (error: any) {
        console.error(`Model failed: ${model}`, error?.message);

        lastError = error;

        // define non-retryable errors that should mark the assignment as failed immediately
        continue;
      }
    }

    // if we exhaust all models, throw a user-friendly error without exposing internal details
    console.error("All OpenRouter models failed");
    
    // map known error patterns to user-friendly messages without exposing internal details
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

    // fallback generic error message without exposing internal details
    throw new Error(
      lastError?.message || "Failed to generate questions using OpenRouter",
    );
  }
}
