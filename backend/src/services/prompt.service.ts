export const buildPrompt = (assignment: any) => {
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
