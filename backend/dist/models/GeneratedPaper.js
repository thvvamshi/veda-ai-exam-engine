"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratedPaper = void 0;
const mongoose_1 = __importStar(require("mongoose"));
// subdocument schema for question types in assignment creation
const questionSchema = new mongoose_1.Schema({
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
}, {
    _id: false,
});
// schemas for generated paper sections and questions
const sectionSchema = new mongoose_1.Schema({
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
}, {
    _id: false,
});
// schema for answer key
const answerKeySchema = new mongoose_1.Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
}, {
    _id: false,
});
// schemas for generated paper sections and questions
const generatedPaperSchema = new mongoose_1.Schema({
    assignmentId: {
        type: mongoose_1.Schema.Types.ObjectId,
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
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
        versionKey: false,
        transform: (_doc, ret) => {
            ret.id = ret._id.toString();
            delete ret._id;
        },
    },
});
exports.GeneratedPaper = mongoose_1.default.model("GeneratedPaper", generatedPaperSchema);
