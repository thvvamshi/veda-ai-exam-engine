import IORedis from "ioredis";

import { env } from "./env";

export const redisConnection =
  new IORedis(env.REDIS_URL, {
    maxRetriesPerRequest: null,

    enableReadyCheck: false,

    retryStrategy(times) {
      const delay = Math.min(
        times * 100,
        3000
      );

      return delay;
    }
  });

redisConnection.on("connect", () => {
  console.log("Redis connected");
});

redisConnection.on("ready", () => {
  console.log("Redis ready");
});

redisConnection.on("error", (error) => {
  console.error(
    "Redis connection error:",
    error
  );
});

redisConnection.on("close", () => {
  console.warn("Redis connection closed");
});

redisConnection.on(
  "reconnecting",
  () => {
    console.log(
      "Redis reconnecting..."
    );
  }
);