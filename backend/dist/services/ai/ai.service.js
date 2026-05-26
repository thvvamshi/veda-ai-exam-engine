"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateQuestions = void 0;
const ai_provider_1 = require("./providers/ai.provider");
const provider = new ai_provider_1.UnifiedAIProvider();
const generateQuestions = async (prompt) => {
    try {
        return await provider.generate(prompt);
    }
    catch (error) {
        console.error("AI service failed:", error);
        throw error;
    }
};
exports.generateQuestions = generateQuestions;
