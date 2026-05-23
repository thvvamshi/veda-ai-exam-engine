import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },

  difficulty: {
    type: String,

    enum: ["easy", "medium", "hard"],

    required: true,
  },

  marks: {
    type: Number,
    required: true,
  },

  type: {
    type: String,
    required: true,
  },
});

const sectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  instruction: {
    type: String,
    required: true,
  },

  questions: [questionSchema],
});

const generatedPaperSchema = new mongoose.Schema(
  {
    assignmentId: {
      type: mongoose.Schema.Types.ObjectId,

      ref: "Assignment",

      required: true,
    },

    sections: [sectionSchema],

    pdfUrl: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

generatedPaperSchema.index({
  assignmentId: 1,
});

export const GeneratedPaper = mongoose.model(
  "GeneratedPaper",
  generatedPaperSchema,
);
