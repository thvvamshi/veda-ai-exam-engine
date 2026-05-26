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
exports.Assignment = void 0;
const mongoose_1 = __importStar(require("mongoose"));
// subdocument schema for question types in assignment creation
const questionTypeSchema = new mongoose_1.Schema({
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
}, {
    _id: false,
});
// schemas for generated paper sections and questions
const assignmentSchema = new mongoose_1.Schema({
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
            validator: (value) => value.length > 0,
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
}, {
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
});
exports.Assignment = mongoose_1.default.model("Assignment", assignmentSchema);
