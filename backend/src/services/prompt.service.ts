export const buildPrompt = (assignment: any) => {
  return `
Generate a structured question paper.

Return ONLY valid JSON.

Do NOT return markdown.

Format:

{
  "sections": [
    {
      "title": "",
      "instruction": "",
      "questions": [
        {
          "questionText": "",
          "difficulty": "",
          "marks": 0,
          "type": ""
        }
      ]
    }
  ]
}

Requirements:
- Create sections
- Add questions
- Add difficulty levels
- Add marks
- Make proper exam structure

Assignment Title:
${assignment.title}

Question Types:
${assignment.questionTypes.join(", ")}

Number Of Questions:
${assignment.numberOfQuestions}

Total Marks:
${assignment.totalMarks}

Instructions:
${assignment.instructions}
`;
};
