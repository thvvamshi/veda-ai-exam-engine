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

import pdfRoutes from "./routes/pdf.routes";


const app = express();

// CORS
app.use(
  cors({
    origin: "http://localhost:5173",

    credentials: true,
  }),
);

// BODY PARSER
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

// COMPRESSION
app.use(compression());

// SECURITY
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  }),
);

// LOGGER
app.use(morgan("dev"));

// ROUTES
app.use("/api/v1/health", healthRoutes);

app.use("/api/v1/assignments", assignmentRoutes);

app.use("/api/v1/assignments", generationRoutes);

app.use("/api/v1/generated-papers", generatedPaperRoutes);

app.use("/api/v1/uploads", uploadRoutes);

app.use("/api/v1/generated-papers", pdfRoutes);

// ROOT
app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Veda AI Backend API Running",
  });
});

// 404
app.use((_req, res) => {
  return res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// ERROR
app.use(errorMiddleware);

export default app;
