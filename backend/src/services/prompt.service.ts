import { extractTextFromFile } from "./fileTextExtraction.service";

export const buildPrompt = async (assignment: any) => {
  // Basic details and question breakdown
  const questionBreakdown = assignment.questionTypes
    .map(
      (q: any) =>
        `
Question Type: ${q.type}
Number Of Questions: ${q.count}
Marks Per Question: ${q.marks}
`,
    )
    .join("\n");

  // Extract text from uploaded file
  let extractedContext = "";

  if (assignment.uploadedFileUrl) {
    extractedContext = await extractTextFromFile(assignment.uploadedFileUrl);
  }

  // limit context size
  const limitedContext = extractedContext?.trim()?.slice(0, 12000);

  console.log("Extracted Context:", limitedContext);

  // build prompt with clear instructions and expected JSON format
  return `
Generate a professional school question paper.

Assignment Details:

Title:
${assignment.title}

School:
${assignment.schoolName}

Subject:
${assignment.subject}

Class:
${assignment.className}

Question Breakdown:
${questionBreakdown}

Instructions:
${assignment.instructions}

Additional Instructions:
${assignment.additionalInstructions}

Uploaded Syllabus Context:
${limitedContext || "No uploaded context provided."}

IMPORTANT RULES:

1. Return ONLY valid JSON

2. Group similar questions into sections

3. Every question must contain:
   - questionText
   - difficulty
   - marks
   - type

4. For MCQ questions:
   - generate EXACTLY 4 options
   - options are mandatory
   - correctAnswer is mandatory

5. Difficulty must be:
   - easy
   - medium
   - hard

6. If uploaded syllabus/content exists:
   - generate questions STRICTLY from the uploaded material
   - prioritize topic-specific questions over generic theory questions
   - avoid unrelated or hallucinated concepts
   - reflect the terminology, concepts, and difficulty level of the uploaded content
   - generate conceptual, analytical, and problem-solving questions where applicable

7. Maintain professional academic formatting

8. Ensure all generated answers and explanations are factually correct.

9. Avoid vague or overly generic questions.

10. Questions should test understanding of concepts, algorithms, comparisons, and problem-solving where applicable.

11. Maintain academic correctness and standard university-level terminology.

Expected JSON Format:

{
  "sections": [
    {
      "title": "Section A",

      "instruction":
        "Attempt all questions.",

      "questions": [
        {
          "questionText":
            "What is electroplating?",

          "difficulty":
            "easy",

          "marks":
            1,

          "type":
            "mcq",

          "options": [
            "Metal coating process",
            "Heating process",
            "Cooling process",
            "Magnetic process"
          ],

          "correctAnswer":
            "Metal coating process"
        }
      ]
    }
  ],

  "answerKey": [
    {
      "question":
        "What is electroplating?",

      "answer":
        "Metal coating process"
    }
  ]
}
`;
};
