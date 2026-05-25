// src/components/ai-toolkit/QuestionSection.tsx

type Props = {
  mobile?: boolean;
};

const questions = [
  "[Easy] Define electroplating. Explain its purpose. [2 Marks]",
  "[Moderate] What is the role of a conductor in the process of electrolysis? [2 Marks]",
  "[Easy] Why does a solution of copper sulfate conduct electricity? [2 Marks]",
  "[Moderate] Describe one example of the chemical effect of electric current in daily life. [2 Marks]",
  "[Moderate] Explain why electric current is said to have chemical effects. [2 Marks]",
  "[Challenging] How is sodium hydroxide prepared during the electrolysis of brine? Write the chemical reaction involved. [2 Marks]",
  "[Challenging] What happens at the cathode and anode during the electrolysis of water? Name the gases evolved. [2 Marks]",
  "[Easy] Mention the type of current used in electroplating and justify why it is used. [2 Marks]",
  "[Moderate] What is the importance of electric current in the field of metallurgy? [2 Marks]",
  "[Challenging] Explain with a chemical equation how copper is deposited during the electroplating of an object. [2 Marks]",
];

export default function QuestionSection({
  mobile = false,
}: Props) {
  return (
    <div
      className={`
        flex
        flex-col

        ${
          mobile
            ? "gap-[12px]"
            : "gap-[18px]"
        }
      `}
    >
      <div>
        <h2
          className={`
            font-[700]

            text-[#1F1F1F]

            ${
              mobile
                ? `
                  text-[16px]
                  leading-[24px]
                `
                : `
                  text-[32px]
                  leading-[42px]
                `
            }
          `}
        >
          Short Answer Questions
        </h2>

        <p
          className={`
            italic

            text-[#555555]

            ${
              mobile
                ? `
                  mt-[4px]

                  text-[13px]
                  leading-[20px]
                `
                : `
                  mt-[6px]

                  text-[18px]
                  leading-[28px]
                `
            }
          `}
        >
          Attempt all questions. Each question
          carries 2 marks
        </p>
      </div>

      <ol
        className={`
          list-decimal

          ${
            mobile
              ? `
                pl-[22px]

                space-y-[10px]
              `
              : `
                pl-[28px]

                space-y-[18px]
              `
          }
        `}
      >
        {questions.map((question, index) => (
          <li
            key={index}
            className={`
              text-[#2B2B2B]

              ${
                mobile
                  ? `
                    text-[14px]
                    leading-[28px]
                  `
                  : `
                    text-[18px]
                    leading-[36px]
                  `
              }
            `}
          >
            {question}
          </li>
        ))}
      </ol>

      <p
        className={`
          font-[700]

          text-[#1F1F1F]

          ${
            mobile
              ? `
                mt-[10px]

                text-[15px]
                leading-[24px]
              `
              : `
                mt-[18px]

                text-[24px]
                leading-[34px]
              `
          }
        `}
      >
        End of Question Paper
      </p>
    </div>
  );
}