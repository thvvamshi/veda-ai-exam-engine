import { z } from "zod";

export const createAssignmentSchema = z.object({
  title: z.string().min(3).max(200),

  dueDate: z.string().datetime(),

  questionTypes: z.array(z.string()).min(1),

  numberOfQuestions: z.number().positive(),

  totalMarks: z.number().positive(),

  instructions: z.string().optional(),
});
