import express from "express";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(cors());

app.use(express.json());

app.use(compression());

app.use(helmet());

app.use(morgan("dev"));

app.get("/health", (_, res) => {
  res.json({
    success: true,
    message: "Server running"
  });
});

export default app;