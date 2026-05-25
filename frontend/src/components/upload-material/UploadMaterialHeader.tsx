// src/components/upload-material/UploadMaterialHeader.tsx

import { ArrowLeft, Bell, Menu } from "lucide-react";

type Props = {
  mobile?: boolean;
};

export default function UploadMaterialHeader({
  mobile = false,
}: Props) {
  if (mobile) {
    return (
      <div className="flex flex-col">
        {/* TOP NAV */}
        <div
          className="
            h-[82px]

            rounded-[28px]

            bg-white

            px-[20px]

            flex
            items-center
            justify-between
          "
        >
          <div className="flex items-center gap-[12px]">
            <div
              className="
                w-[54px]
                h-[54px]

                rounded-[16px]

                bg-[linear-gradient(180deg,#3B3B3B_0%,#181818_100%)]

                flex
                items-center
                justify-center
              "
            >
              <span
                className="
                  text-white
                  text-[28px]
                  font-black
                "
              >
                V
              </span>
            </div>

            <span
              className="
                text-[22px]
                font-[700]

                tracking-[-0.03em]

                text-[#1F1F1F]
              "
            >
              VedaAI
            </span>
          </div>

          <div className="flex items-center gap-[14px]">
            <div
              className="
                relative

                w-[48px]
                h-[48px]

                rounded-full

                bg-[#F5F5F5]

                flex
                items-center
                justify-center
              "
            >
              <Bell size={26} />

              <div
                className="
                  absolute
                  top-[5px]
                  right-[7px]

                  w-[10px]
                  h-[10px]

                  rounded-full

                  bg-[#FF6224]
                "
              />
            </div>

            <div
              className="
                w-[48px]
                h-[48px]

                rounded-full

                bg-[#D9D9D9]
              "
            />

            <Menu size={36} />
          </div>
        </div>

        {/* TITLE */}
        <div
          className="
            mt-[26px]

            flex
            items-center
            gap-[18px]
          "
        >
          <button
            className="
              w-[74px]
              h-[74px]

              rounded-full

              bg-[#ECECEC]

              flex
              items-center
              justify-center
            "
          >
            <ArrowLeft size={34} />
          </button>

          <h1
            className="
              text-[24px]
              leading-[32px]
              font-[700]
              tracking-[-0.03em]

              text-[#1F1F1F]
            "
          >
            Create Assignment
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div
      className="
        flex
        items-center
        justify-between
      "
    >
      <div className="flex items-center gap-[18px]">
        <button
          className="
            w-[56px]
            h-[56px]

            rounded-full

            bg-white

            flex
            items-center
            justify-center
          "
        >
          <ArrowLeft size={28} />
        </button>

        <div>
          <h1
            className="
              text-[36px]
              font-[700]

              tracking-[-0.04em]

              text-[#1F1F1F]
            "
          >
            Create Assignment
          </h1>

          <p
            className="
              mt-[4px]

              text-[18px]

              text-[#7B7B7B]
            "
          >
            Set up a new assignment for your students
          </p>
        </div>
      </div>
    </div>
  );
}