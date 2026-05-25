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
          {title}
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
          {instruction}
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
              {question.text} [
              {question.marks} Marks]
            </li>
          )
        )}
      </ol>
    </div>
  );
}