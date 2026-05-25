export interface QuestionType {
  type: string;

  count: number;

  marks: number;
}

export interface GeneratedQuestion {
  _id: string;

  text: string;

  difficulty: "easy" | "moderate" | "hard";

  marks: number;
}

export interface GeneratedSection {
  title: string;

  instruction: string;

  questions: GeneratedQuestion[];
}

export interface AnswerKey {
  questionId: string;

  answer: string;
}

export interface GeneratedPaper {
  schoolName: string;

  subject: string;

  className: string;

  timeAllowed: number;

  maxMarks: number;

  generatedMessage: string;

  sections: GeneratedSection[];

  answerKeys: AnswerKey[];
}

export interface Assignment {
  _id: string;

  title: string;

  dueDate: string;

  instructions?: string;

  questionTypes: QuestionType[];

  generatedPaper?: GeneratedPaper;

  status: "pending" | "processing" | "completed" | "failed";

  createdAt: string;
}
