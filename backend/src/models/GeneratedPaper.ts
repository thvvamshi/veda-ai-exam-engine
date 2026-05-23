import mongoose, { Schema } from "mongoose";

// subdocument schema for question types in assignment creation
const questionSchema = new Schema(
  {
    questionText: {
      type: String,

      required: true,

      trim: true,
    },

    difficulty: {
      type: String,

      required: true,

      enum: ["easy", "medium", "hard"],
    },

    marks: {
      type: Number,

      required: true,

      min: 1,
    },

    type: {
      type: String,

      required: true,

      enum: ["mcq", "short", "long", "numerical", "diagram"],
    },

    // for MCQs
    options: {
      type: [String],

      default: [],
    },

    // for answer key
    correctAnswer: {
      type: String,

      default: null,
    },
  },

  {
    _id: false,
  },
);

// schemas for generated paper sections and questions
const sectionSchema = new Schema(
  {
    title: {
      type: String,

      required: true,
    },

    instruction: {
      type: String,

      default: "",
    },

    questions: {
      type: [questionSchema],

      required: true,
    },
  },

  {
    _id: false,
  },
);

// schema for answer key
const answerKeySchema = new Schema(
  {
    question: {
      type: String,

      required: true,
    },

    answer: {
      type: String,

      required: true,
    },
  },

  {
    _id: false,
  },
);

// schemas for generated paper sections and questions
const generatedPaperSchema = new Schema(
  {
    assignmentId: {
      type: Schema.Types.ObjectId,

      ref: "Assignment",

      required: true,

      unique: true,
    },

    sections: {
      type: [sectionSchema],

      required: true,
    },

    answerKey: {
      type: [answerKeySchema],

      default: [],
    },
  },

  {
    timestamps: true,

    toJSON: {
      virtuals: true,

      versionKey: false,

      transform: (_doc, ret) => {
        ret.id = ret._id.toString();

        delete ret._id;
      },
    },
  },
);

export const GeneratedPaper = mongoose.model(
  "GeneratedPaper",

  generatedPaperSchema,
);
