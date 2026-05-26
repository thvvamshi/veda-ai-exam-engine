"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generationQueue = void 0;
const bullmq_1 = require("bullmq");
const redis_1 = require("../config/redis");
exports.generationQueue = new bullmq_1.Queue("generation-queue", {
    connection: redis_1.redisConnection,
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
