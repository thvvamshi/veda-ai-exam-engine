// src/components/ai-toolkit/AnswerKeySection.tsx

type Props = {
  mobile?: boolean;
};

export default function AnswerKeySection({
  mobile = false,
}: Props) {
  return (
    <div
      className={`
        mt-[20px]

        flex
        flex-col

        ${
          mobile
            ? "gap-[12px]"
            : "gap-[18px]"
        }
      `}
    >
      <h2
        className={`
          font-[700]

          text-[#1F1F1F]

          ${
            mobile
              ? `
                text-[18px]
                leading-[28px]
              `
              : `
                text-[32px]
                leading-[42px]
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

                space-y-[12px]
              `
              : `
                pl-[28px]

                space-y-[18px]
              `
          }
        `}
      >
        <li
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
          Electroplating is the process of
          depositing a thin layer of metal on the
          surface of another metal using electric
          current.
        </li>

        <li
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
          A conductor allows the flow of electric
          current, causing ions in the electrolyte
          to move and enabling chemical changes at
          electrodes.
        </li>
      </ol>
    </div>
  );
}