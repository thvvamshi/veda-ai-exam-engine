
import { z } from "zod";

export const assignmentSchema = z.object({
  title: z
    .string()
    .min(3, "Title is required"),

  dueDate: z.string(),

  instructions: z.string().optional(),

  questionTypes: z
    .array(
      z.object({
        type: z.string(),

        count: z.number().min(1),

        marks: z.number().min(1),
      })
    )
    .min(1),
});

export type AssignmentSchemaType =
  z.infer<typeof assignmentSchema>;