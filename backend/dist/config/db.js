"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = require("./env");
const connectDB = async () => {
    try {
        mongoose_1.default.set("strictQuery", true);
        const connection = await mongoose_1.default.connect(env_1.env.MONGO_URI);
        console.log(`MongoDB connected: ${connection.connection.host}`);
        mongoose_1.default.connection.on("disconnected", () => {
            console.error("MongoDB disconnected");
        });
        mongoose_1.default.connection.on("reconnected", () => {
            console.log("MongoDB reconnected");
        });
        mongoose_1.default.connection.on("error", (error) => {
            console.error("MongoDB connection error:", error);
        });
    }
    catch (error) {
        console.error("Failed to connect MongoDB:", error);
        process.exit(1);
    }
};
exports.connectDB = connectDB;
