// src/components/ai-toolkit/PaperPreview.tsx

import PaperHeader from "./PaperHeader";
import QuestionSection from "./QuestionSection";
import AnswerKeySection from "./AnswerKeySection";

type Props = {
  mobile?: boolean;
};

export default function PaperPreview({
  mobile = false,
}: Props) {
  return (
    <div
      className={`
        w-full

        bg-[#FFFFFF]

        ${
          mobile
            ? `
              rounded-[34px]

              p-[9px]
            `
            : `
              rounded-[32px]

              p-[16px]
            `
        }
      `}
    >
      <div
        className={`
          w-full

          bg-[#F8F8F8]

          ${
            mobile
              ? `
                rounded-[28px]

                px-[18px]
                py-[20px]
              `
              : `
                rounded-[28px]

                px-[40px]
                py-[42px]
              `
          }
        `}
      >
        <div
          className={`
            flex
            flex-col

            ${
              mobile
                ? "gap-[22px]"
                : "gap-[34px]"
            }
          `}
        >
          <PaperHeader mobile={mobile} />

          <div
            className={`
              flex
              justify-between

              ${
                mobile
                  ? `
                    flex-col
                    gap-[6px]
                  `
                  : ""
              }
            `}
          >
            <p
              className={`
                font-[600]

                text-[#1F1F1F]

                ${
                  mobile
                    ? `
                      text-[14px]
                      leading-[22px]
                    `
                    : `
                      text-[18px]
                      leading-[30px]
                    `
                }
              `}
            >
              Time Allowed: 45 minutes
            </p>

            <p
              className={`
                font-[600]

                text-[#1F1F1F]

                ${
                  mobile
                    ? `
                      text-[14px]
                      leading-[22px]
                    `
                    : `
                      text-[18px]
                      leading-[30px]
                    `
                }
              `}
            >
              Maximum Marks: 20
            </p>
          </div>

          <p
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
            All questions are compulsory unless
            stated otherwise.
          </p>

          <div
            className={`
              flex
              flex-col

              ${
                mobile
                  ? "gap-[4px]"
                  : "gap-[8px]"
              }
            `}
          >
            <p
              className={`
                text-[#1F1F1F]

                ${
                  mobile
                    ? `
                      text-[14px]
                      leading-[24px]
                    `
                    : `
                      text-[18px]
                      leading-[30px]
                    `
                }
              `}
            >
              Name: ______________
            </p>

            <p
              className={`
                text-[#1F1F1F]

                ${
                  mobile
                    ? `
                      text-[14px]
                      leading-[24px]
                    `
                    : `
                      text-[18px]
                      leading-[30px]
                    `
                }
              `}
            >
              Roll Number: ______________
            </p>

            <p
              className={`
                text-[#1F1F1F]

                ${
                  mobile
                    ? `
                      text-[14px]
                      leading-[24px]
                    `
                    : `
                      text-[18px]
                      leading-[30px]
                    `
                }
              `}
            >
              Class: 5th Section: ________
            </p>
          </div>

          <h2
            className={`
              text-center
              font-[700]

              text-[#1F1F1F]

              ${
                mobile
                  ? `
                    text-[20px]
                    leading-[28px]
                  `
                  : `
                    text-[42px]
                    leading-[54px]
                  `
              }
            `}
          >
            Section A
          </h2>

          <QuestionSection mobile={mobile} />

          <AnswerKeySection mobile={mobile} />
        </div>
      </div>
    </div>
  );
}