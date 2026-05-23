import rateLimit from "express-rate-limit";

// Rate limiter for AI generation endpoint to prevent abuse and manage load
export const generationLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,

  max: 5,

  standardHeaders: true,

  legacyHeaders: false,

  message: {
    success: false,

    message: "Too many AI generation requests. Please try again later.",
  },
});
