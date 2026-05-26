"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAssignmentSchema = void 0;
const zod_1 = require("zod");
exports.createAssignmentSchema = zod_1.z.object({
    title: zod_1.z.string().min(3),
    schoolName: zod_1.z.string().optional(),
    subject: zod_1.z.string().optional(),
    className: zod_1.z.string().optional(),
    dueDate: zod_1.z.string(),
    questionTypes: zod_1.z
        .array(zod_1.z.object({
        type: zod_1.z.enum(["mcq", "short", "long", "numerical", "diagram"]),
        count: zod_1.z.number().min(1),
        marks: zod_1.z.number().min(1),
    }))
        .min(1),
    instructions: zod_1.z.string().optional(),
    additionalInstructions: zod_1.z.string().optional(),
    uploadedFileUrl: zod_1.z.string().url().nullable().optional(),
});
