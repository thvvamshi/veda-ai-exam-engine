import { Queue } from "bullmq";

import { redisConnection } from "../config/redis";

export const generationQueue = new Queue("generation-queue", {
  connection: redisConnection,

  defaultJobOptions: {
    attempts: 3,

    backoff: {
      type: "exponential",

      delay: 3000,
    },

    removeOnComplete: 50,

    removeOnFail: 20,
  },
});
