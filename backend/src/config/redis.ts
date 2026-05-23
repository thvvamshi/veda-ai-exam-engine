import IORedis from "ioredis";

import { env } from "./env";

export const redisConnection = new IORedis(env.REDIS_URL, {
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

redisConnection.on("connect", () => {
  console.log("Redis connected");
});

redisConnection.on("ready", () => {
  console.log("Redis ready");
});

redisConnection.on("error", (error) => {
  console.error("Redis connection error:", error);
});

redisConnection.on("close", () => {
  console.warn("Redis connection closed");
});

redisConnection.on("reconnecting", () => {
  console.log("Redis reconnecting...");
});
