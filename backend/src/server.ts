import http from "http";
import app from "./app";
import { env } from "./config/env";
import { connectDB } from "./config/db";
import { redisConnection } from "./config/redis";
import { initSocket } from "./socket";
import "./workers/generation.worker";

const startServer = async () => {
  try {
    // Connect to the database
    await connectDB();

    // Test Redis connection
    await redisConnection.ping();

    // Create HTTP server
    const server = http.createServer(app);

    // Initialize Socket.IO
    initSocket(server);

    // Start the server
    server.listen(env.PORT, () => {
      console.log(`Server running on port ${env.PORT}`);
    });

    // Handle graceful shutdown
    process.on("SIGINT", async () => {
      console.log("Gracefully shutting down server...");

      try {
        await redisConnection.quit();

        console.log("Redis disconnected");
      } catch (error) {
        console.error("Redis shutdown failed:", error);
      }

      process.exit(0);
    });

    // Handle unhandled promise rejections
    process.on("unhandledRejection", (reason) => {
      console.error("Unhandled Promise Rejection:", reason);
    });

    // Handle uncaught exceptions
    process.on("uncaughtException", (error) => {
      console.error("Uncaught Exception:", error);

      process.exit(1);
    });
  } catch (error) {
    console.error("Server startup failed:", error);

    process.exit(1);
  }
};

startServer();
