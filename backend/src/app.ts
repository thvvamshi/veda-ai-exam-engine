import express from "express";

import cors from "cors";

import compression from "compression";

import helmet from "helmet";

import morgan from "morgan";

import healthRoutes from "./routes/health.routes";

import { errorMiddleware } from "./middleware/error.middleware";

import assignmentRoutes from "./routes/assignment.routes";

import generationRoutes from "./routes/generation.routes";

import generatedPaperRoutes from "./routes/generatedPaper.routes";

import uploadRoutes from "./routes/upload.routes";

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  }),
);

app.use(
  express.json({
    limit: "10mb",
  }),
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "10mb",
  }),
);

app.use(compression());

app.use(
  helmet({
    crossOriginResourcePolicy: false,
  }),
);

app.use(morgan("dev"));

// Routes
app.use("/api/v1/health", healthRoutes);

app.use("/api/v1/assignments", assignmentRoutes);

app.use("/api/v1/assignments", generationRoutes);

app.use("/api/v1/generated-papers", generatedPaperRoutes);

app.use("/api/v1/uploads", uploadRoutes);

// Default Route
app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Veda AI Backend API Running",
  });
});

// 404 Route Handler
app.use((_req, res) => {
  return res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Global Error Handler
app.use(errorMiddleware);

export default app;
