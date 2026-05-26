type Props = {
  mobile?: boolean;

  answers: any[];
};

export default function AnswerKeySection({
  mobile = false,
  answers,
}: Props) {
  return (
    <div
      className={`
        ${
          mobile
            ? "mt-[50px]"
            : "mt-[80px]"
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
              `
              : `
                text-[42px]
              `
          }
        `}
      >
        Answer Key:
      </h2>

      <ol
        className={`
          list-decimal

          ${
            mobile
              ? `
                pl-[22px]

                mt-[22px]

                space-y-[18px]
              `
              : `
                pl-[34px]

                mt-[36px]

                space-y-[28px]
              `
          }
        `}
      >
        {answers?.map(
          (
            answer,
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
              {answer.answer}
            </li>
          )
        )}
      </ol>
    </div>
  );
}