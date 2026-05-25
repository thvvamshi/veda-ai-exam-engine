// src/components/upload-material/DueDateInput.tsx

import { CalendarDays } from "lucide-react";

type Props = {
  mobile?: boolean;
};

export default function DueDateInput({
  mobile = false,
}: Props) {
  if (mobile) {
    return (
      <div>
        {/* LABEL */}
        <h3
          className="
            text-[24px]
            font-black
            text-[#2A2A2A]
          "
        >
          Due Date
        </h3>

        {/* INPUT */}
        <div
          className="
            mt-[14px]

            h-[82px]

            rounded-full

            border-[2px]
            border-[#DDDDDD]

            bg-[#F7F7F7]

            px-[26px]

            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              text-[22px]
              font-semibold
              text-[#B1B1B1]
            "
          >
            DD-MM-YYYY
          </span>

          <CalendarDays
            className="
              w-[34px]
              h-[34px]

              text-[#2D2D2D]
            "
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* LABEL */}
      <h3
        className="
          text-[18px]
          font-black
          text-[#2A2A2A]
        "
      >
        Due Date
      </h3>

      {/* INPUT */}
      <div
        className="
          mt-[12px]

          h-[58px]

          rounded-full

          border-[2px]
          border-[#DDDDDD]

          bg-[#F7F7F7]

          px-[20px]

          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            text-[16px]
            font-semibold
            text-[#B1B1B1]
          "
        >
          DD-MM-YYYY
        </span>

        <CalendarDays
          className="
            w-[24px]
            h-[24px]

            text-[#2D2D2D]
          "
        />
      </div>
    </div>
  );
}