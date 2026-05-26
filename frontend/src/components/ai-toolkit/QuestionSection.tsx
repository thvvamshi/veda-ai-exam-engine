type Props = {
  mobile?: boolean;

  title: string;

  instruction: string;

  questions: any[];
};

export default function QuestionSection({
  mobile = false,
  title,
  instruction,
  questions,
}: Props) {
  return (
    <div
      className={`
        ${
          mobile
            ? "mt-[40px]"
            : "mt-[70px]"
        }
      `}
    >
      <h2
        className={`
          font-[800]

          text-[#1F1F1F]

          ${
            mobile
              ? `
                text-[24px]
                leading-[34px]
              `
              : `
                text-[42px]
                leading-[56px]
              `
          }
        `}
      >
        {title}
      </h2>

      <p
        className={`
          italic

          text-[#666666]

          ${
            mobile
              ? `
                mt-[8px]

                text-[14px]
                leading-[24px]
              `
              : `
                mt-[12px]

                text-[22px]
                leading-[36px]
              `
          }
        `}
      >
        {instruction}
      </p>

      <ol
        className={`
          list-decimal

          ${
            mobile
              ? `
                pl-[22px]

                mt-[20px]

                space-y-[18px]
              `
              : `
                pl-[32px]

                mt-[36px]

                space-y-[28px]
              `
          }
        `}
      >
        {questions?.map(
          (
            question,
            index
          ) => (
            <li
              key={index}
              className={`
                text-[#2B2B2B]

                ${
                  mobile
                    ? `
                      text-[16px]
                      leading-[34px]
                    `
                    : `
                      text-[24px]
                      leading-[48px]
                    `
                }
              `}
            >
              [
              {question.difficulty}
              ]
              {" "}
              {question.text}
              {" "}
              [
              {question.marks}
              {" "}
              Marks]
            </li>
          )
        )}
      </ol>
    </div>
  );
}