// src/components/upload-material/QuestionTypeRow.tsx

import {
  ChevronDown,
  Minus,
  Plus,
  X,
} from "lucide-react";

type Props = {
  title: string;
  questions: number;
  marks: number;
  mobile?: boolean;
};

export default function QuestionTypeRow({
  title,
  questions,
  marks,
  mobile = false,
}: Props) {
  if (mobile) {
    return (
      <div
        className="
          rounded-[26px]

          bg-white

          px-[20px]
          py-[20px]
        "
      >
        {/* TOP */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[14px]">
            <span
              className="
                text-[18px]
                font-semibold
                text-[#2A2A2A]
              "
            >
              {title}
            </span>

            <ChevronDown className="w-[24px] h-[24px]" />
          </div>

          <X className="w-[28px] h-[28px]" />
        </div>

        {/* BOX */}
        <div
          className="
            mt-[18px]

            rounded-[24px]

            bg-[#F3F3F3]

            px-[18px]
            py-[16px]
          "
        >
          <div className="grid grid-cols-2 gap-[16px]">
            {/* QUESTIONS */}
            <div>
              <h4
                className="
                  text-center

                  text-[16px]
                  font-bold
                  text-[#2A2A2A]
                "
              >
                No. of Questions
              </h4>

              <div
                className="
                  mt-[12px]

                  h-[64px]

                  rounded-full

                  bg-white

                  px-[18px]

                  flex
                  items-center
                  justify-between
                "
              >
                <Minus className="w-[24px] h-[24px]" />

                <span
                  className="
                    text-[22px]
                    font-bold
                  "
                >
                  {questions}
                </span>

                <Plus className="w-[24px] h-[24px]" />
              </div>
            </div>

            {/* MARKS */}
            <div>
              <h4
                className="
                  text-center

                  text-[16px]
                  font-bold
                  text-[#2A2A2A]
                "
              >
                Marks
              </h4>

              <div
                className="
                  mt-[12px]

                  h-[64px]

                  rounded-full

                  bg-white

                  px-[18px]

                  flex
                  items-center
                  justify-between
                "
              >
                <Minus className="w-[24px] h-[24px]" />

                <span
                  className="
                    text-[22px]
                    font-bold
                  "
                >
                  {marks}
                </span>

                <Plus className="w-[24px] h-[24px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="
        grid

        grid-cols-[1fr_60px_180px_180px]

        items-center

        gap-[18px]
      "
    >
      {/* SELECT */}
      <div
        className="
          h-[58px]

          rounded-full

          bg-white

          px-[28px]

          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            text-[18px]
            font-semibold
            text-[#2A2A2A]
          "
        >
          {title}
        </span>

        <ChevronDown className="w-[22px] h-[22px]" />
      </div>

      {/* DELETE */}
      <button
        className="
          flex
          items-center
          justify-center
        "
      >
        <X className="w-[24px] h-[24px]" />
      </button>

      {/* QUESTIONS */}
      <div
        className="
          h-[58px]

          rounded-full

          bg-white

          px-[18px]

          flex
          items-center
          justify-between
        "
      >
        <Minus className="w-[20px] h-[20px] text-[#D0D0D0]" />

        <span
          className="
            text-[18px]
            font-bold
          "
        >
          {questions}
        </span>

        <Plus className="w-[20px] h-[20px] text-[#D0D0D0]" />
      </div>

      {/* MARKS */}
      <div
        className="
          h-[58px]

          rounded-full

          bg-white

          px-[18px]

          flex
          items-center
          justify-between
        "
      >
        <Minus className="w-[20px] h-[20px] text-[#D0D0D0]" />

        <span
          className="
            text-[18px]
            font-bold
          "
        >
          {marks}
        </span>

        <Plus className="w-[20px] h-[20px] text-[#D0D0D0]" />
      </div>
    </div>
  );
}