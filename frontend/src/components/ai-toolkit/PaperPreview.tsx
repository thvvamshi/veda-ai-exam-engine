import { Assignment } from "../../types/assignment.types";

type Props = {
  assignment: Assignment;

  mobile?: boolean;
};

export default function PaperPreview({
  assignment,
  mobile = false,
}: Props) {
  const paper =
    assignment.generatedPaper;

  if (!paper) {
    return (
      <div
        className="
          rounded-[32px]
          bg-white
          p-[32px]
        "
      >
        No generated paper found
      </div>
    );
  }

  return (
    <div
      className={`
        w-full

        rounded-[32px]

        bg-white

        ${
          mobile
            ? "p-[20px]"
            : "p-[40px]"
        }
      `}
    >
      {/* SCHOOL */}
      <div className="text-center">
        <h1
          className={`
            font-[800]
            text-[#1F1F1F]

            ${
              mobile
                ? "text-[24px]"
                : "text-[42px]"
            }
          `}
        >
          {paper.schoolName}
        </h1>

        <div className="mt-[12px]">
          <p
            className={`
              font-[700]

              ${
                mobile
                  ? "text-[16px]"
                  : "text-[28px]"
              }
            `}
          >
            Subject: {paper.subject}
          </p>

          <p
            className={`
              font-[700]

              ${
                mobile
                  ? "text-[16px]"
                  : "text-[28px]"
              }
            `}
          >
            Class: {paper.className}
          </p>
        </div>
      </div>

      {/* DETAILS */}
      <div
        className="
          mt-[40px]

          flex
          items-center
          justify-between
        "
      >
        <p
          className={`
            font-[600]

            ${
              mobile
                ? "text-[14px]"
                : "text-[20px]"
            }
          `}
        >
          Time Allowed:
          {" "}
          {paper.timeAllowed} minutes
        </p>

        <p
          className={`
            font-[600]

            ${
              mobile
                ? "text-[14px]"
                : "text-[20px]"
            }
          `}
        >
          Maximum Marks:
          {" "}
          {paper.maxMarks}
        </p>
      </div>

      {/* INSTRUCTIONS */}
      <div className="mt-[28px]">
        <p
          className={`
            ${
              mobile
                ? "text-[14px]"
                : "text-[18px]"
            }
          `}
        >
          All questions are compulsory unless stated otherwise.
        </p>
      </div>

      {/* STUDENT DETAILS */}
      <div className="mt-[36px]">
        <p>Name: __________________</p>

        <p className="mt-[8px]">
          Roll Number:
          __________________
        </p>

        <p className="mt-[8px]">
          Class Section:
          __________________
        </p>
      </div>

      {/* SECTIONS */}
      <div className="mt-[60px]">
        {paper.sections.map(
          (section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="mb-[60px]"
            >
              {/* SECTION TITLE */}
              <h2
                className={`
                  text-center
                  font-[800]

                  ${
                    mobile
                      ? "text-[24px]"
                      : "text-[42px]"
                  }
                `}
              >
                Section{" "}
                {String.fromCharCode(
                  65 + sectionIndex
                )}
              </h2>

              <div className="mt-[32px]">
                <h3
                  className={`
                    font-[700]

                    ${
                      mobile
                        ? "text-[18px]"
                        : "text-[30px]"
                    }
                  `}
                >
                  {section.title}
                </h3>

                <p
                  className={`
                    italic
                    text-[#666666]

                    mt-[8px]

                    ${
                      mobile
                        ? "text-[13px]"
                        : "text-[18px]"
                    }
                  `}
                >
                  {section.instruction}
                </p>
              </div>

              {/* QUESTIONS */}
              <ol
                className={`
                  list-decimal

                  ${
                    mobile
                      ? "pl-[22px]"
                      : "pl-[30px]"
                  }

                  mt-[28px]

                  space-y-[18px]
                `}
              >
                {section.questions.map(
                  (question) => (
                    <li
                      key={question._id}
                      className={`
                        leading-[180%]

                        ${
                          mobile
                            ? "text-[15px]"
                            : "text-[22px]"
                        }
                      `}
                    >
                      [
                      {
                        question.difficulty
                      }
                      ]
                      {" "}
                      {
                        question.text
                      }
                      {" "}
                      [
                      {
                        question.marks
                      }
                      {" "}
                      Marks]
                    </li>
                  )
                )}
              </ol>
            </div>
          )
        )}
      </div>

      {/* END */}
      <div className="mt-[40px]">
        <h2
          className={`
            font-[800]

            ${
              mobile
                ? "text-[18px]"
                : "text-[30px]"
            }
          `}
        >
          End of Question Paper
        </h2>
      </div>

      {/* ANSWER KEY */}
      <div className="mt-[70px]">
        <h2
          className={`
            font-[800]

            ${
              mobile
                ? "text-[24px]"
                : "text-[42px]"
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
                ? "pl-[22px]"
                : "pl-[30px]"
            }

            mt-[28px]

            space-y-[18px]
          `}
        >
          {paper.answerKeys.map(
            (
              answer,
              index
            ) => (
              <li
                key={index}
                className={`
                  leading-[180%]

                  ${
                    mobile
                      ? "text-[15px]"
                      : "text-[22px]"
                  }
                `}
              >
                {answer.answer}
              </li>
            )
          )}
        </ol>
      </div>
    </div>
  );
}