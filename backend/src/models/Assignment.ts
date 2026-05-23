import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    dueDate: {
      type: Date,
      required: true,
    },

    questionTypes: {
      type: [String],
      required: true,
    },

    numberOfQuestions: {
      type: Number,
      required: true,
      min: 1,
    },

    totalMarks: {
      type: Number,
      required: true,
      min: 1,
    },

    instructions: {
      type: String,
      default: "",
    },

    uploadedFileUrl: {
      type: String,
      default: null,
    },

    status: {
      type: String,

      enum: ["draft", "queued", "processing", "completed", "failed"],

      default: "draft",
    },
  },
  {
    timestamps: true,
  },
);

assignmentSchema.index({
  createdAt: -1,
});

export const Assignment = mongoose.model("Assignment", assignmentSchema);
