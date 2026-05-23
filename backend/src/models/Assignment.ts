import mongoose, { Schema } from "mongoose";

// subdocument schema for question types in assignment creation
const questionTypeSchema = new Schema(
  {
    type: {
      type: String,

      required: true,

      enum: ["mcq", "short", "long", "numerical", "diagram"],
    },

    count: {
      type: Number,

      required: true,

      min: 1,
    },

    marks: {
      type: Number,

      required: true,

      min: 1,
    },
  },

  {
    _id: false,
  },
);

// schemas for generated paper sections and questions
const assignmentSchema = new Schema(
  {
    title: {
      type: String,

      required: true,

      trim: true,
    },

    schoolName: {
      type: String,

      trim: true,

      default: "",
    },

    subject: {
      type: String,

      trim: true,

      default: "",
    },

    className: {
      type: String,

      trim: true,

      default: "",
    },

    dueDate: {
      type: Date,

      required: true,
    },

    questionTypes: {
      type: [questionTypeSchema],

      required: true,

      validate: {
        validator: (value: any[]) => value.length > 0,

        message: "At least one question type is required",
      },
    },

    instructions: {
      type: String,

      trim: true,

      default: "",
    },

    additionalInstructions: {
      type: String,

      trim: true,

      default: "",
    },

    uploadedFileUrl: {
      type: String,

      default: null,
    },

    // status of paper generation process
    status: {
      type: String,

      enum: ["draft", "queued", "processing", "completed", "failed"],

      default: "draft",
    },
  },

  {
    timestamps: true,
    // transform _id to id and remove __v
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

export const Assignment = mongoose.model(
  "Assignment",

  assignmentSchema,
);
