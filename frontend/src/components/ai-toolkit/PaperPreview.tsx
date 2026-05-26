// type Props = {
//   assignment?: any;

//   mobile?: boolean;
// };

// export default function PaperPreview({
//   assignment,

//   mobile = false,
// }: Props) {
//   // LOADING
//   if (!assignment) {
//     return (
//       <div
//         className="
//           rounded-[32px]

//           bg-white

//           p-[32px]
//         "
//       >
//         <h2
//           className="
//             text-[24px]
//             font-[700]
//           "
//         >
//           Loading paper...
//         </h2>
//       </div>
//     );
//   }

//   // NOW ASSIGNMENT IS ACTUAL PAPER
//   const paper = assignment;

//   return (
//     <div
//       className={`
//         rounded-[32px]

//         bg-white

//         ${mobile ? "p-[20px]" : "p-[40px]"}
//       `}
//     >
//       {/* SCHOOL */}
//       <div className="text-center">
//         <h1
//           className={`
//             font-[800]
//             text-[#1F1F1F]

//             ${mobile ? "text-[26px]" : "text-[42px]"}
//           `}
//         >
//           {paper.schoolName || "Delhi Public School"}
//         </h1>

//         <div className="mt-[12px]">
//           <p
//             className={`
//               font-[700]

//               ${mobile ? "text-[16px]" : "text-[28px]"}
//             `}
//           >
//             Subject: {paper.subject}
//           </p>

//           <p
//             className={`
//               mt-[6px]

//               font-[700]

//               ${mobile ? "text-[16px]" : "text-[28px]"}
//             `}
//           >
//             Class: {paper.className}
//           </p>
//         </div>
//       </div>

//       {/* DETAILS */}
//       <div
//         className="
//           mt-[40px]

//           flex
//           items-center
//           justify-between
//         "
//       >
//         <p
//           className={`
//             font-[600]

//             ${mobile ? "text-[14px]" : "text-[20px]"}
//           `}
//         >
//           Time Allowed: {paper.timeAllowed || 45} minutes
//         </p>

//         <p
//           className={`
//             font-[600]

//             ${mobile ? "text-[14px]" : "text-[20px]"}
//           `}
//         >
//           Maximum Marks: {paper.maxMarks}
//         </p>
//       </div>

//       {/* INSTRUCTIONS */}
//       <div className="mt-[28px]">
//         <p
//           className={`
//             ${mobile ? "text-[14px]" : "text-[18px]"}
//           `}
//         >
//           All questions are compulsory unless stated otherwise.
//         </p>
//       </div>

//       {/* STUDENT DETAILS */}
//       <div className="mt-[36px]">
//         <p>Name: __________________</p>

//         <p className="mt-[8px]">Roll Number: __________________</p>

//         <p className="mt-[8px]">Class Section: __________________</p>
//       </div>

//       {/* SECTIONS */}
//       <div className="mt-[60px]">
//         {paper.sections?.map((section: any, sectionIndex: number) => (
//           <div key={sectionIndex} className="mb-[60px]">
//             {/* TITLE */}
//             <h2
//               className={`
//                   text-center
//                   font-[800]

//                   ${mobile ? "text-[24px]" : "text-[42px]"}
//                 `}
//             >
//               Section {String.fromCharCode(65 + sectionIndex)}
//             </h2>

//             <div className="mt-[20px]">
//               <h3
//                 className={`
//                     font-[700]

//                     ${mobile ? "text-[18px]" : "text-[28px]"}
//                   `}
//               >
//                 {section.title}
//               </h3>

//               <p
//                 className={`
//                     mt-[8px]

//                     italic
//                     text-[#666666]

//                     ${mobile ? "text-[13px]" : "text-[18px]"}
//                   `}
//               >
//                 {section.instruction}
//               </p>
//             </div>

//             {/* QUESTIONS */}
//             <ol
//               className={`
//                   list-decimal

//                   ${mobile ? "pl-[22px]" : "pl-[30px]"}

//                   mt-[28px]

//                   space-y-[18px]
//                 `}
//             >
//               {section.questions?.map((question: any, qIndex: number) => (
//                 <li
//                   key={qIndex}
//                   className={`
//                         leading-[180%]

//                         ${mobile ? "text-[15px]" : "text-[22px]"}
//                       `}
//                 >
//                   [{question.difficulty}] {question.questionText} [
//                   {question.marks} Marks]
//                 </li>
//               ))}
//             </ol>
//           </div>
//         ))}
//       </div>

//       {/* END */}
//       <div className="mt-[40px]">
//         <h2
//           className={`
//             font-[800]

//             ${mobile ? "text-[18px]" : "text-[30px]"}
//           `}
//         >
//           End of Question Paper
//         </h2>
//       </div>

//       {/* ANSWER KEY */}
//       <div className="mt-[70px]">
//         <h2
//           className={`
//             font-[800]

//             ${mobile ? "text-[24px]" : "text-[42px]"}
//           `}
//         >
//           Answer Key:
//         </h2>

//         <ol
//           className={`
//             list-decimal

//             ${mobile ? "pl-[22px]" : "pl-[30px]"}

//             mt-[28px]

//             space-y-[18px]
//           `}
//         >
//           {paper.answerKey?.map((answer: any, index: number) => (
//             <li
//               key={index}
//               className={`
//                   leading-[180%]

//                   ${mobile ? "text-[15px]" : "text-[22px]"}
//                 `}
//             >
//               {answer.answer}
//             </li>
//           ))}
//         </ol>
//       </div>
//     </div>
//   );
// }



// src/components/ai-toolkit/PaperPreview.tsx

type Props = {
  assignment?: any;

  mobile?: boolean;
};

export default function PaperPreview({
  assignment,

  mobile = false,
}: Props) {
  // ================= LOADING =================

  if (!assignment) {
    return (
      <div
        className="
          rounded-[32px]

          bg-white

          p-[32px]
        "
      >
        <h2
          className="
            text-[24px]
            font-[700]
          "
        >
          Loading paper...
        </h2>
      </div>
    );
  }

  // ================= PAPER =================

  const paper = assignment;

  // ================= TOTAL MARKS =================

  const totalMarks =
    paper.sections?.reduce(
      (
        total: number,
        section: any,
      ) =>
        total +
        section.questions.reduce(
          (
            sum: number,
            question: any,
          ) =>
            sum +
            (question.marks ||
              0),
          0,
        ),
      0,
    ) || 0;

  return (
    <div
      className={`
        rounded-[32px]

        bg-white

        ${
          mobile
            ? "p-[20px]"
            : "p-[40px]"
        }
      `}
    >
      {/* ================= HEADER ================= */}

      <div className="text-center">
        <h1
          className={`
            font-[800]

            tracking-[-0.04em]

            text-[#1F1F1F]

            ${
              mobile
                ? "text-[26px]"
                : "text-[42px]"
            }
          `}
        >
          {paper.schoolName ||
            "Delhi Public School"}
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
            Subject:{" "}
            {paper.subject}
          </p>

          <p
            className={`
              mt-[6px]

              font-[700]

              ${
                mobile
                  ? "text-[16px]"
                  : "text-[28px]"
              }
            `}
          >
            Class:{" "}
            {paper.className}
          </p>
        </div>
      </div>

      {/* ================= DETAILS ================= */}

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
          Time Allowed:{" "}
          {paper.timeAllowed ||
            45}{" "}
          minutes
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
          Maximum Marks:{" "}
          {totalMarks}
        </p>
      </div>

      {/* ================= INSTRUCTIONS ================= */}

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
          All questions are
          compulsory unless stated
          otherwise.
        </p>
      </div>

      {/* ================= STUDENT DETAILS ================= */}

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

      {/* ================= SECTIONS ================= */}

      <div className="mt-[60px]">
        {paper.sections?.map(
          (
            section: any,
            sectionIndex: number,
          ) => (
            <div
              key={sectionIndex}
              className="mb-[60px]"
            >
              {/* ================= TITLE ================= */}

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
                  65 + sectionIndex,
                )}
              </h2>

              <div className="mt-[20px]">
                <h3
                  className={`
                    font-[700]

                    ${
                      mobile
                        ? "text-[18px]"
                        : "text-[28px]"
                    }
                  `}
                >
                  {section.title}
                </h3>

                <p
                  className={`
                    mt-[8px]

                    italic

                    text-[#666666]

                    ${
                      mobile
                        ? "text-[13px]"
                        : "text-[18px]"
                    }
                  `}
                >
                  {
                    section.instruction
                  }
                </p>
              </div>

              {/* ================= QUESTIONS ================= */}

              <div className="mt-[28px] flex flex-col gap-[24px]">
                {section.questions?.map(
                  (
                    question: any,
                    qIndex: number,
                  ) => (
                    <div
                      key={qIndex}
                    >
                      {/* QUESTION */}

                      <p
                        className={`
                          leading-[180%]

                          ${
                            mobile
                              ? "text-[15px]"
                              : "text-[22px]"
                          }
                        `}
                      >
                        <span className="font-[700]">
                          {qIndex +
                            1}
                          .
                        </span>{" "}
                        [
                        {
                          question.difficulty
                        }
                        ]{" "}
                        {
                          question.questionText
                        }{" "}
                        [
                        {
                          question.marks
                        }{" "}
                        Marks]
                      </p>

                      {/* ================= MCQ OPTIONS ================= */}

                      {question.type ===
                        "mcq" &&
                        question.options?.length >
                          0 && (
                          <div
                            className="
                              mt-[12px]
                              ml-[26px]

                              flex
                              flex-col
                              gap-[10px]
                            "
                          >
                            {question.options.map(
                              (
                                option: string,
                                optionIndex: number,
                              ) => (
                                <p
                                  key={
                                    optionIndex
                                  }
                                  className={`
                                    text-[#555555]

                                    ${
                                      mobile
                                        ? "text-[14px]"
                                        : "text-[18px]"
                                    }
                                  `}
                                >
                                  {String.fromCharCode(
                                    65 +
                                      optionIndex,
                                  )}
                                  .{" "}
                                  {
                                    option
                                  }
                                </p>
                              ),
                            )}
                          </div>
                        )}
                    </div>
                  ),
                )}
              </div>
            </div>
          ),
        )}
      </div>

      {/* ================= END ================= */}

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

      {/* ================= ANSWER KEY ================= */}

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
          {paper.answerKey?.map(
            (
              answer: any,
              index: number,
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
            ),
          )}
        </ol>
      </div>
    </div>
  );
}