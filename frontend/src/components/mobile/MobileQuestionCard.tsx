// src/components/mobile/MobileQuestionCard.tsx

import {
  ChevronDown,
  Plus,
  Minus,
  X,
} from "lucide-react";

type Props = {
  title: string;
  questions: number;
  marks: number;
};

export default function MobileQuestionCard({
  title,
  questions,
  marks,
}: Props) {
  return (
    <div
      className="
        w-full

        rounded-[28px]

        bg-white

        p-[16px]

        flex
        flex-col
        gap-[18px]
      "
    >
      {/* TOP */}
      <div
        className="
          flex
          items-start
          justify-between
          gap-[12px]
        "
      >
        <h3
          className="
            flex-1

            text-[16px]
            leading-[24px]
            font-[600]

            tracking-[-0.03em]

            text-[#2B2B2B]
          "
        >
          {title}
        </h3>

        <div className="flex items-center gap-[14px]">
          <ChevronDown size={22} />

          <X size={24} />
        </div>
      </div>

      {/* STATS */}
      <div
        className="
          rounded-[24px]

          bg-[#F5F5F5]

          px-[14px]
          py-[16px]

          flex
          items-start
          justify-between
          gap-[12px]
        "
      >
        {/* QUESTIONS */}
        <div
          className="
            flex
            flex-col
            items-center
            gap-[8px]
          "
        >
          <span
            className="
              text-[14px]
              leading-[20px]
              font-[600]
              text-center

              text-[#2B2B2B]
            "
          >
            No. of Questions
          </span>

          <div
            className="
              w-[112px]
              h-[52px]

              rounded-full

              bg-white

              px-[14px]

              flex
              items-center
              justify-between
            "
          >
            <Minus
              size={18}
              color="#3B3B3B"
            />

            <span
              className="
                text-[18px]
                font-[600]
              "
            >
              {questions}
            </span>

            <Plus
              size={18}
              color="#3B3B3B"
            />
          </div>
        </div>

        {/* MARKS */}
        <div
          className="
            flex
            flex-col
            items-center
            gap-[8px]
          "
        >
          <span
            className="
              text-[14px]
              leading-[20px]
              font-[600]
              text-center

              text-[#2B2B2B]
            "
          >
            Marks
          </span>

          <div
            className="
              w-[112px]
              h-[52px]

              rounded-full

              bg-white

              px-[14px]

              flex
              items-center
              justify-between
            "
          >
            <Minus
              size={18}
              color="#3B3B3B"
            />

            <span
              className="
                text-[18px]
                font-[600]
              "
            >
              {marks}
            </span>

            <Plus
              size={18}
              color="#3B3B3B"
            />
          </div>
        </div>
      </div>
    </div>
  );
}