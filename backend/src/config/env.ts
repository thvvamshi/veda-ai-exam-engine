import dotenv from "dotenv";

dotenv.config();

const requiredEnvVariables = [
  "MONGO_URI",
  "REDIS_URL",
  "OPENROUTER_API_KEY"
];

requiredEnvVariables.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(
      `Missing required environment variable: ${key}`
    );
  }
});

export const env = {
  PORT: process.env.PORT || 5000,

  NODE_ENV:
    process.env.NODE_ENV || "development",

  MONGO_URI: process.env.MONGO_URI!,

  REDIS_URL: process.env.REDIS_URL!,

  OPENROUTER_API_KEY:
    process.env.OPENROUTER_API_KEY!
};