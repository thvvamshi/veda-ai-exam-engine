// src/components/upload-material/QuestionTypeList.tsx

import { ChevronDown, Plus, X } from "lucide-react";

type QuestionType = {
  type: string;

  count: number;

  marks: number;
};

type Props = {
  mobile?: boolean;

  questionTypes: QuestionType[];

  setQuestionTypes: React.Dispatch<React.SetStateAction<QuestionType[]>>;
};

const QUESTION_OPTIONS = [
  "Multiple Choice Questions",

  "Short Questions",

  "Long Questions",

  "Diagram/Graph-Based Questions",

  "Numerical Problems",
];

export default function QuestionTypeList({
  mobile = false,

  questionTypes,

  setQuestionTypes,
}: Props) {
  /* ================= UPDATE ================= */

  const updateQuestion = (
    index: number,

    key: "type" | "count" | "marks",

    value: string | number,
  ) => {
    const updated = [...questionTypes];

    updated[index] = {
      ...updated[index],

      [key]: value,
    };

    setQuestionTypes(updated);
  };

  /* ================= REMOVE ================= */

  const removeQuestion = (index: number) => {
    if (questionTypes.length === 1) return;

    setQuestionTypes(questionTypes.filter((_, i) => i !== index));
  };

  /* ================= ADD ================= */

  const addQuestionType = () => {
    setQuestionTypes([
      ...questionTypes,

      {
        type: "Short Questions",

        count: 1,

        marks: 1,
      },
    ]);
  };

  /* ================= TOTALS ================= */

  const totalQuestions = questionTypes.reduce(
    (total, item) => total + item.count,
    0,
  );

  const totalMarks = questionTypes.reduce(
    (total, item) => total + item.count * item.marks,
    0,
  );

  /* ================= MOBILE ================= */

  if (mobile) {
    return (
      <div>
        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          <h3
            className="
              text-[18px]
              font-[700]

              text-[#1F1F1F]
            "
          >
            Question Type
          </h3>
        </div>

        <div className="mt-[18px] flex flex-col gap-[18px]">
          {questionTypes.map((question, index) => (
            <div
              key={index}
              className="
                  rounded-[28px]

                  bg-[#F6F6F6]

                  p-[20px]
                "
            >
              {/* TOP */}

              <div
                className="
                    flex
                    items-center
                    gap-[10px]
                  "
              >
                {/* SELECT */}

                <div className="flex-1 relative">
                  <select
                    value={question.type}
                    onChange={(e) =>
                      updateQuestion(index, "type", e.target.value)
                    }
                    className="
                        w-full
                        h-[56px]

                        rounded-full

                        bg-white

                        px-[20px]
                        pr-[52px]

                        appearance-none

                        text-[16px]
                        font-[500]

                        outline-none
                      "
                  >
                    {QUESTION_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    size={22}
                    className="
                        absolute
                        right-[18px]
                        top-1/2
                        -translate-y-1/2

                        text-[#444444]

                        pointer-events-none
                      "
                  />
                </div>

                {/* DELETE */}

                <button
                  onClick={() => removeQuestion(index)}
                  className="
                      w-[46px]
                      h-[46px]

                      rounded-full

                      flex
                      items-center
                      justify-center

                      text-[#2D2D2D]
                    "
                >
                  <X size={26} />
                </button>
              </div>

              {/* COUNTERS */}

              <div
                className="
                    mt-[18px]

                    rounded-[26px]

                    bg-[#ECECEC]

                    p-[18px]
                  "
              >
                <div
                  className="
                      grid
                      grid-cols-2

                      gap-[14px]
                    "
                >
                  {/* QUESTIONS */}

                  <div>
                    <p
                      className="
                          text-center

                          text-[14px]
                          font-[700]

                          text-[#3A3A3A]
                        "
                    >
                      No. of Questions
                    </p>

                    <div
                      className="
                          mt-[10px]

                          h-[58px]

                          rounded-full

                          bg-white

                          px-[16px]

                          flex
                          items-center
                          justify-between
                        "
                    >
                      <button
                        onClick={() =>
                          updateQuestion(
                            index,
                            "count",
                            Math.max(1, question.count - 1),
                          )
                        }
                        className="
                            text-[32px]

                            text-[#B8B8B8]
                          "
                      >
                        −
                      </button>

                      <span
                        className="
                            text-[22px]
                            font-[700]
                          "
                      >
                        {question.count}
                      </span>

                      <button
                        onClick={() =>
                          updateQuestion(index, "count", question.count + 1)
                        }
                        className="
                            text-[32px]

                            text-[#B8B8B8]
                          "
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* MARKS */}

                  <div>
                    <p
                      className="
                          text-center

                          text-[14px]
                          font-[700]

                          text-[#3A3A3A]
                        "
                    >
                      Marks
                    </p>

                    <div
                      className="
                          mt-[10px]

                          h-[58px]

                          rounded-full

                          bg-white

                          px-[16px]

                          flex
                          items-center
                          justify-between
                        "
                    >
                      <button
                        onClick={() =>
                          updateQuestion(
                            index,
                            "marks",
                            Math.max(1, question.marks - 1),
                          )
                        }
                        className="
                            text-[32px]

                            text-[#B8B8B8]
                          "
                      >
                        −
                      </button>

                      <span
                        className="
                            text-[22px]
                            font-[700]
                          "
                      >
                        {question.marks}
                      </span>

                      <button
                        onClick={() =>
                          updateQuestion(index, "marks", question.marks + 1)
                        }
                        className="
                            text-[32px]

                            text-[#B8B8B8]
                          "
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ADD */}

        <button
          onClick={addQuestionType}
          className="
            mt-[24px]

            flex
            items-center
            gap-[14px]
          "
        >
          <div
            className="
              w-[56px]
              h-[56px]

              rounded-full

              bg-[#1F1F1F]

              flex
              items-center
              justify-center
            "
          >
            <Plus size={30} className="text-white" />
          </div>

          <span
            className="
              text-[18px]
              font-[700]

              text-[#1F1F1F]
            "
          >
            Add Question Type
          </span>
        </button>

        {/* TOTALS */}

        <div
          className="
            mt-[28px]

            flex
            flex-col
            items-end

            gap-[8px]
          "
        >
          <p
            className="
              text-[18px]
              font-[700]
            "
          >
            Total Questions : {totalQuestions}
          </p>

          <p
            className="
              text-[18px]
              font-[700]
            "
          >
            Total Marks : {totalMarks}
          </p>
        </div>
      </div>
    );
  }

  /* ================= DESKTOP ================= */

  return (
    <div>
      {/* HEADER */}

      <div
        className="
          grid

          grid-cols-[1fr_220px_180px]

          gap-[26px]

          mb-[14px]
        "
      >
        <h3
          className="
            text-[20px]
            font-[700]

            text-[#1F1F1F]
          "
        >
          Question Type
        </h3>

        <h3
          className="
            text-[20px]
            font-[700]

            text-center

            text-[#1F1F1F]
          "
        >
          No. of Questions
        </h3>

        <h3
          className="
            text-[20px]
            font-[700]

            text-center

            text-[#1F1F1F]
          "
        >
          Marks
        </h3>
      </div>

      {/* LIST */}

      <div className="flex flex-col gap-[18px]">
        {questionTypes.map((question, index) => (
          <div
            key={index}
            className="
                grid

                grid-cols-[1fr_220px_180px]

                gap-[26px]

                items-center
              "
          >
            {/* LEFT */}

            <div className="flex items-center gap-[14px]">
              {/* SELECT */}

              <div className="relative flex-1">
                <select
                  value={question.type}
                  onChange={(e) =>
                    updateQuestion(index, "type", e.target.value)
                  }
                  className="
                      w-full
                      h-[72px]

                      rounded-full

                      bg-[#F7F7F7]

                      px-[32px]
                      pr-[70px]

                      appearance-none

                      text-[20px]
                      font-[500]

                      text-[#2A2A2A]

                      outline-none
                    "
                >
                  {QUESTION_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={28}
                  className="
                      absolute
                      right-[26px]
                      top-1/2
                      -translate-y-1/2

                      text-[#444444]

                      pointer-events-none
                    "
                />
              </div>

              {/* DELETE */}

              <button
                onClick={() => removeQuestion(index)}
                className="
                    w-[50px]
                    h-[50px]

                    flex
                    items-center
                    justify-center
                  "
              >
                <X size={32} className="text-[#2A2A2A]" />
              </button>
            </div>

            {/* QUESTIONS */}

            <div
              className="
                  h-[72px]

                  rounded-full

                  bg-[#F7F7F7]

                  px-[24px]

                  flex
                  items-center
                  justify-between
                "
            >
              <button
                onClick={() =>
                  updateQuestion(
                    index,
                    "count",
                    Math.max(1, question.count - 1),
                  )
                }
                className="
                    text-[38px]

                    text-[#D0D0D0]
                  "
              >
                −
              </button>

              <span
                className="
                    text-[26px]
                    font-[700]

                    text-[#3A3A3A]
                  "
              >
                {question.count}
              </span>

              <button
                onClick={() =>
                  updateQuestion(index, "count", question.count + 1)
                }
                className="
                    text-[38px]

                    text-[#D0D0D0]
                  "
              >
                +
              </button>
            </div>

            {/* MARKS */}

            <div
              className="
                  h-[72px]

                  rounded-full

                  bg-[#F7F7F7]

                  px-[24px]

                  flex
                  items-center
                  justify-between
                "
            >
              <button
                onClick={() =>
                  updateQuestion(
                    index,
                    "marks",
                    Math.max(1, question.marks - 1),
                  )
                }
                className="
                    text-[38px]

                    text-[#D0D0D0]
                  "
              >
                −
              </button>

              <span
                className="
                    text-[26px]
                    font-[700]

                    text-[#3A3A3A]
                  "
              >
                {question.marks}
              </span>

              <button
                onClick={() =>
                  updateQuestion(index, "marks", question.marks + 1)
                }
                className="
                    text-[38px]

                    text-[#D0D0D0]
                  "
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ADD */}

      <button
        onClick={addQuestionType}
        className="
          mt-[30px]

          flex
          items-center
          gap-[16px]
        "
      >
        <div
          className="
            w-[60px]
            h-[60px]

            rounded-full

            bg-[#1F1F1F]

            flex
            items-center
            justify-center
          "
        >
          <Plus size={34} className="text-white" />
        </div>

        <span
          className="
            text-[22px]
            font-[700]

            text-[#1F1F1F]
          "
        >
          Add Question Type
        </span>
      </button>

      {/* TOTALS */}

      <div
        className="
          mt-[26px]

          flex
          flex-col
          items-end

          gap-[10px]
        "
      >
        <p
          className="
            text-[24px]
            font-[700]

            text-[#1F1F1F]
          "
        >
          Total Questions : {totalQuestions}
        </p>

        <p
          className="
            text-[24px]
            font-[700]

            text-[#1F1F1F]
          "
        >
          Total Marks : {totalMarks}
        </p>
      </div>
    </div>
  );
}
