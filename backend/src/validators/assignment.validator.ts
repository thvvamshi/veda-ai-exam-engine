import { z } from "zod";

export const createAssignmentSchema = z.object({
  title: z.string().min(3),

  schoolName: z.string().optional(),

  subject: z.string().optional(),

  className: z.string().optional(),

  dueDate: z.string(),

  questionTypes: z
    .array(
      z.object({
        type: z.enum(["mcq", "short", "long", "numerical", "diagram"]),

        count: z.number().min(1),

        marks: z.number().min(1),
      }),
    )
    .min(1),

  instructions: z.string().optional(),

  additionalInstructions: z.string().optional(),

  uploadedFileUrl: z.string().nullable().optional(),
});
