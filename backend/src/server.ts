import http from "http";

import app from "./app";

import { env } from "./config/env";

import { connectDB } from "./config/db";

import "./config/redis";

import { testGeminiConnection } from "./config/ai";

import "./workers/generation.worker";

const startServer = async () => {
  await connectDB();
    
  // ##temporarily disabling gemini connection test to avoid delays in server startup.
  //  Will enable it once the connection is stable.
  // await testGeminiConnection();  

  const server = http.createServer(app);

  server.listen(env.PORT, () => {
    console.log(`Server running on port ${env.PORT}`);
  });
};

startServer();
