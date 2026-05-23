import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory
} from "@google/generative-ai";

import { env } from "./env";

const genAI = new GoogleGenerativeAI(
  env.GEMINI_API_KEY
);

export const geminiModel =
  genAI.getGenerativeModel({
    model: "gemini-2.0-flash",

    safetySettings: [
      {
        category:
          HarmCategory.HARM_CATEGORY_HARASSMENT,

        threshold:
          HarmBlockThreshold.BLOCK_NONE
      },

      {
        category:
          HarmCategory.HARM_CATEGORY_HATE_SPEECH,

        threshold:
          HarmBlockThreshold.BLOCK_NONE
      }
    ]
  });

export const testGeminiConnection =
  async () => {
    try {
      const result =
        await geminiModel.generateContent(
          "Reply with: OK"
        );

      const response =
        result.response.text();

      console.log(
        "Gemini connected:",
        response
      );
    } catch (error) {
      console.error(
        "Gemini connection failed:",
        error
      );

      process.exit(1);
    }
  };