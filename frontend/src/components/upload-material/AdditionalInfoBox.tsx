// src/components/upload-material/AdditionalInfoBox.tsx

import { Mic } from "lucide-react";

type Props = {
  mobile?: boolean;
};

export default function AdditionalInfoBox({
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
          Additional Information (For better output)
        </h2>

        {/* BOX */}
        <div
          className="
            mt-[18px]

            min-h-[180px]

            rounded-[28px]

            border-[2px]
            border-dashed
            border-[#E0E0E0]

            bg-[#FAFAFA]

            p-[22px]

            relative
          "
        >
          <textarea
            placeholder="e.g Generate a question paper for 3 hour exam duration..."
            className="
              w-full
              h-[110px]

              resize-none

              bg-transparent

              outline-none

              text-[18px]
              leading-[170%]

              text-[#2A2A2A]

              placeholder:text-[#9B9B9B]
            "
          />

          {/* MIC */}
          <button
            className="
              absolute
              right-[20px]
              bottom-[20px]

              w-[56px]
              h-[56px]

              rounded-full

              bg-white

              flex
              items-center
              justify-center

              shadow-[0px_10px_25px_rgba(0,0,0,0.06)]
            "
          >
            <Mic className="w-[24px] h-[24px]" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* TITLE */}
      <h2
        className="
          text-[20px]
          font-black
          text-[#2A2A2A]
        "
      >
        Additional Information (For better output)
      </h2>

      {/* BOX */}
      <div
        className="
          mt-[16px]

          min-h-[170px]

          rounded-[28px]

          border-[2px]
          border-dashed
          border-[#E0E0E0]

          bg-[#FAFAFA]

          p-[24px]

          relative
        "
      >
        <textarea
          placeholder="e.g Generate a question paper for 3 hour exam duration..."
          className="
            w-full
            h-[100px]

            resize-none

            bg-transparent

            outline-none

            text-[18px]
            leading-[170%]

            text-[#2A2A2A]

            placeholder:text-[#9B9B9B]
          "
        />

        {/* MIC */}
        <button
          className="
            absolute
            right-[22px]
            bottom-[20px]

            w-[48px]
            h-[48px]

            rounded-full

            bg-white

            flex
            items-center
            justify-center

            shadow-[0px_10px_25px_rgba(0,0,0,0.05)]
          "
        >
          <Mic className="w-[20px] h-[20px]" />
        </button>
      </div>
    </div>
  );
}