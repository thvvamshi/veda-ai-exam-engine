"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const requiredEnvVariables = [
    "MONGO_URI",
    "REDIS_URL",
    "OPENROUTER_API_KEY",
    "CLOUDINARY_CLOUD_NAME",
    "CLOUDINARY_API_KEY",
    "CLOUDINARY_API_SECRET",
];
requiredEnvVariables.forEach((key) => {
    if (!process.env[key]) {
        throw new Error(`Missing required environment variable: ${key}`);
    }
});
exports.env = {
    PORT: process.env.PORT || 5000,
    NODE_ENV: process.env.NODE_ENV ||
        "development",
    MONGO_URI: process.env.MONGO_URI,
    REDIS_URL: process.env.REDIS_URL,
    OPENROUTER_API_KEY: process.env
        .OPENROUTER_API_KEY,
    CLOUDINARY_CLOUD_NAME: process.env
        .CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env
        .CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env
        .CLOUDINARY_API_SECRET,
};
