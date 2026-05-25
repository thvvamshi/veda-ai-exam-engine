// src/components/upload-material/UploadMaterialActions.tsx

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

type Props = {
  mobile?: boolean;
};

export default function UploadMaterialActions({
  mobile = false,
}: Props) {
  if (mobile) {
    return (
      <div
        className="
          fixed
          bottom-[104px]
          left-0
          right-0

          z-40

          px-[16px]

          lg:hidden
        "
      >
        <div
          className="
            flex
            items-center
            gap-[14px]
          "
        >
          {/* PREVIOUS */}
          <button
            className="
              flex-1
              h-[68px]

              rounded-full

              bg-white

              flex
              items-center
              justify-center
              gap-[10px]

              shadow-[0px_8px_20px_rgba(0,0,0,0.08)]
            "
          >
            <ArrowLeft size={28} />

            <span
              className="
                text-[18px]
                font-[600]

                text-[#1F1F1F]
              "
            >
              Previous
            </span>
          </button>

          {/* NEXT */}
          <button
            className="
              flex-1
              h-[68px]

              rounded-full

              border-[2px]
              border-[#3D3D3D]

              bg-[linear-gradient(180deg,#181818_0%,#101010_100%)]

              flex
              items-center
              justify-center
              gap-[10px]
            "
          >
            <span
              className="
                text-[18px]
                font-[600]

                text-white
              "
            >
              Next
            </span>

            <ArrowRight
              size={28}
              color="white"
            />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="
        mt-[36px]

        w-full
        max-w-[1120px]

        mx-auto

        flex
        items-center
        justify-between
      "
    >
      <button
        className="
          h-[64px]
          px-[30px]

          rounded-full

          bg-white

          flex
          items-center
          gap-[12px]
        "
      >
        <ArrowLeft size={24} />

        <span
          className="
            text-[20px]
            font-[500]
          "
        >
          Previous
        </span>
      </button>

      <button
        className="
          h-[64px]
          px-[32px]

          rounded-full

          border-[2px]
          border-[#3D3D3D]

          bg-[linear-gradient(180deg,#181818_0%,#101010_100%)]

          flex
          items-center
          gap-[12px]
        "
      >
        <span
          className="
            text-white
            text-[20px]
            font-[500]
          "
        >
          Next
        </span>

        <ArrowRight
          size={24}
          color="white"
        />
      </button>
    </div>
  );
}