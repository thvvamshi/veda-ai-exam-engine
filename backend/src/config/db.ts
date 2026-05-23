import mongoose from "mongoose";

import { env } from "./env";

export const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);

    const connection =
      await mongoose.connect(
        env.MONGO_URI
      );

    console.log(
      `MongoDB connected: ${connection.connection.host}`
    );

    mongoose.connection.on(
      "disconnected",
      () => {
        console.error(
          "MongoDB disconnected"
        );
      }
    );

    mongoose.connection.on(
      "reconnected",
      () => {
        console.log(
          "MongoDB reconnected"
        );
      }
    );

    mongoose.connection.on(
      "error",
      (error) => {
        console.error(
          "MongoDB connection error:",
          error
        );
      }
    );
  } catch (error) {
    console.error(
      "Failed to connect MongoDB:",
      error
    );

    process.exit(1);
  }
};