"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const env_1 = require("./config/env");
const db_1 = require("./config/db");
const redis_1 = require("./config/redis");
const socket_1 = require("./socket");
require("./workers/generation.worker");
const startServer = async () => {
    try {
        // Connect to the database
        await (0, db_1.connectDB)();
        // Test Redis connection
        await redis_1.redisConnection.ping();
        // Create HTTP server
        const server = http_1.default.createServer(app_1.default);
        // Initialize Socket.IO
        (0, socket_1.initSocket)(server);
        // Start the server
        server.listen(env_1.env.PORT, () => {
            console.log(`Server running on port ${env_1.env.PORT}`);
        });
        // Handle graceful shutdown
        process.on("SIGINT", async () => {
            console.log("Gracefully shutting down server...");
            try {
                await redis_1.redisConnection.quit();
                console.log("Redis disconnected");
            }
            catch (error) {
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
    }
    catch (error) {
        console.error("Server startup failed:", error);
        process.exit(1);
    }
};
startServer();
