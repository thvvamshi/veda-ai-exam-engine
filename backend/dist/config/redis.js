"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisConnection = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
const env_1 = require("./env");
exports.redisConnection = new ioredis_1.default(env_1.env.REDIS_URL, {
    maxRetriesPerRequest: null,
    enableReadyCheck: true,
    retryStrategy(times) {
        const delay = Math.min(times * 1000, 5000);
        console.log(`Redis reconnect attempt: ${times}`);
        return delay;
    },
    reconnectOnError(error) {
        console.error("Redis reconnect error:", error.message);
        return true;
    },
    tls: {},
});
exports.redisConnection.on("connect", () => {
    console.log("Redis connected");
});
exports.redisConnection.on("ready", () => {
    console.log("Redis ready");
});
exports.redisConnection.on("error", (error) => {
    console.error("Redis connection error:", error);
});
exports.redisConnection.on("close", () => {
    console.warn("Redis connection closed");
});
exports.redisConnection.on("reconnecting", () => {
    console.log("Redis reconnecting...");
});
