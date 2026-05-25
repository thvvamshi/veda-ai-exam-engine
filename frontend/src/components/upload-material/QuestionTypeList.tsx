// src/components/upload-material/QuestionTypeList.tsx

import { Plus } from "lucide-react";

import MobileQuestionCard from "../mobile/MobileQuestionCard";

import QuestionTypeRow from "./QuestionTypeRow";

type Props = {
  mobile?: boolean;
};

const rows = [
  {
    title: "Multiple Choice Questions",
    questions: 4,
    marks: 1,
  },
  {
    title: "Short Questions",
    questions: 3,
    marks: 2,
  },
  {
    title: "Diagram/Graph-Based Questions",
    questions: 5,
    marks: 5,
  },
  {
    title: "Numerical Problems",
    questions: 5,
    marks: 5,
  },
];

export default function QuestionTypeList({
  mobile = false,
}: Props) {
  if (mobile) {
    return (
      <div>
        {/* TITLE */}
        <h2
          className="
            text-[24px]
            font-black
            text-[#2A2A2A]
          "
        >
          Question Type
        </h2>

        {/* LIST */}
        <div className="mt-[22px] flex flex-col gap-[18px]">
          {rows.map((row) => (
            <QuestionTypeRow
              key={row.title}
              title={row.title}
              questions={row.questions}
              marks={row.marks}
              mobile
            />
          ))}
        </div>

        {/* ADD */}
        <button
          className="
            mt-[24px]

            flex
            items-center
            gap-[14px]
          "
        >
          <div
            className="
              w-[58px]
              h-[58px]

              rounded-full

              bg-[#232323]

              flex
              items-center
              justify-center
            "
          >
            <Plus className="w-[32px] h-[32px] text-white" />
          </div>

          <span
            className="
              text-[18px]
              font-black
              text-[#2A2A2A]
            "
          >
            Add Question Type
          </span>
        </button>

        {/* TOTAL */}
        <div
          className="
            mt-[34px]

            flex
            flex-col
            items-end

            gap-[10px]
          "
        >
          <div
            className="
              text-[20px]
              font-semibold
              text-[#2A2A2A]
            "
          >
            Total Questions : 25
          </div>

          <div
            className="
              text-[20px]
              font-semibold
              text-[#2A2A2A]
            "
          >
            Total Marks : 60
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* HEADER */}
      <div
        className="
          grid

          grid-cols-[1fr_60px_180px_180px]

          gap-[18px]

          items-center
        "
      >
        <h2
          className="
            text-[20px]
            font-black
            text-[#2A2A2A]
          "
        >
          Question Type
        </h2>

        <div />

        <div
          className="
            text-center

            text-[18px]
            font-black
            text-[#2A2A2A]
          "
        >
          No. of Questions
        </div>

        <div
          className="
            text-center

            text-[18px]
            font-black
            text-[#2A2A2A]
          "
        >
          Marks
        </div>
      </div>

      {/* ROWS */}
      <div className="mt-[22px] flex flex-col gap-[18px]">
        {rows.map((row) => (
          <QuestionTypeRow
            key={row.title}
            title={row.title}
            questions={row.questions}
            marks={row.marks}
          />
        ))}
      </div>

      {/* ADD */}
      <button
        className="
          mt-[24px]

          flex
          items-center
          gap-[14px]
        "
      >
        <div
          className="
            w-[48px]
            h-[48px]

            rounded-full

            bg-[#232323]

            flex
            items-center
            justify-center
          "
        >
          <Plus className="w-[28px] h-[28px] text-white" />
        </div>

        <span
          className="
            text-[18px]
            font-black
            text-[#2A2A2A]
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
        <div
          className="
            text-[18px]
            font-semibold
            text-[#2A2A2A]
          "
        >
          Total Questions : 25
        </div>

        <div
          className="
            text-[18px]
            font-semibold
            text-[#2A2A2A]
          "
        >
          Total Marks : 60
        </div>
      </div>
    </div>
  );
}