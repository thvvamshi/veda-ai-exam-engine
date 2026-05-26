// src/components/assignment/EmptyAssignmentState.tsx

import { useNavigate } from "react-router-dom";

type Props = {
  mobile?: boolean;
};

export default function EmptyAssignmentState({ mobile = false }: Props) {
  const navigate = useNavigate();

  return (
    <div
      className={`
        flex
        flex-col
        items-center
        justify-center

        text-center

        ${mobile ? "px-[24px] pt-[40px]" : "flex-1 px-[24px]"}
      `}
    >
      {/* IMAGE */}
      <div className="relative">
        <div
          className={`
            rounded-full
            bg-[#F8F8F8]

            ${mobile ? "w-[270px] h-[270px]" : "w-[300px] h-[300px]"}
          `}
        />

        {/* SEARCH ICON */}
        <div
          className={`
            absolute
            inset-0

            flex
            items-center
            justify-center

            ${mobile ? "text-[150px]" : "text-[180px]"}
          `}
        >
          🔎
        </div>

        {/* CROSS ICON */}
        <div
          className={`
            absolute

            ${
              mobile
                ? "top-[82px] left-[110px] text-[50px]"
                : "top-[86px] left-[122px] text-[72px]"
            }
          `}
        >
          ❌
        </div>
      </div>

      {/* TITLE */}
      <h1
        className={`
          font-black

          tracking-[-0.05em]

          text-[#1F1F1F]

          ${mobile ? "mt-[28px] text-[25px]" : "mt-[24px] text-[35px]"}
        `}
      >
        No assignments yet
      </h1>

      {/* DESCRIPTION */}
      <p
        className={`
          text-[#707070]

          ${
            mobile
              ? `
                mt-[18px]
                text-[10px]
                leading-[170%]
              `
              : `
                mt-[12px]
                max-w-[760px]
                text-[15px]
                leading-[165%]
              `
          }
        `}
      >
        Create your first assignment to start collecting and grading student
        submissions. You can set up rubrics, define marking criteria, and let AI
        assist with grading.
      </p>

      {/* BUTTON */}
      <button
        onClick={() => navigate("/upload-material")}
        className={`
          rounded-full

          border-[3px]
          border-[#3D3D3D]

          bg-[linear-gradient(180deg,#181818_0%,#101010_100%)]

          flex
          items-center
          justify-center
          gap-[14px]

          shadow-[0px_20px_40px_rgba(0,0,0,0.22)]

          transition-all
          duration-200

          hover:scale-[1.02]

          ${
            mobile
              ? `
                mt-[40px]
                w-full
                h-[35px]
              `
              : `
                mt-[35px]
                h-[55px]
                px-[35px]
              `
          }
        `}
      >
        {/* PLUS */}
        <span
          className={`
            text-white
            leading-none

            ${mobile ? "text-[16px]" : "text-[20px]"}
          `}
        >
          +
        </span>

        {/* TEXT */}
        <span
          className={`
            text-white
            font-semibold

            ${mobile ? "text-[12px]" : "text-[20px]"}
          `}
        >
          Create Your First Assignment
        </span>
      </button>
    </div>
  );
}
