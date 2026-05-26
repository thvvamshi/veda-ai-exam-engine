export interface QuestionType {
  type: string;

  count: number;

  marks: number;
}

export interface GeneratedQuestion {
  id?: string;

  text: string;

  difficulty:
    | "easy"
    | "moderate"
    | "hard";

  marks: number;
}

export interface GeneratedSection {
  title: string;

  instruction: string;

  questions: GeneratedQuestion[];
}

export interface AnswerKey {
  questionId?: string;

  answer: string;
}

export interface GeneratedPaper {
  id?: string;

  schoolName: string;

  subject: string;

  className: string;

  timeAllowed: number;

  maxMarks: number;

  generatedMessage?: string;

  sections: GeneratedSection[];

  answerKeys: AnswerKey[];
}

export interface Assignment {
  id: string;

  title: string;

  schoolName?: string;

  subject?: string;

  className?: string;

  dueDate: string;

  instructions?: string;

  additionalInstructions?: string;

  uploadedFileUrl?: string;

  questionTypes: QuestionType[];

  generatedPaper?: GeneratedPaper;

  status:
    | "pending"
    | "processing"
    | "completed"
    | "failed"
    | "draft";

  createdAt: string;

  updatedAt?: string;
}