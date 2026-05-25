import { useState } from "react";

type Props = {
  title: string;
  assigned: string;
  due: string;
};

export default function AssignmentCard({
  title,
  assigned,
  due,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        relative

        w-full

        min-h-[172px]
        lg:h-[172px]

        rounded-[32px]

        bg-[#F5F5F5]

        px-[28px]
        py-[28px]

        flex
        flex-col
        justify-between
      "
    >
      {/* MENU BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="
          absolute
          top-[20px]
          right-[20px]

          w-[32px]
          h-[32px]

          flex
          items-center
          justify-center

          text-[#989898]
          text-[26px]
          leading-none
        "
      >
        ⋮
      </button>

      {/* DROPDOWN */}
      {open && (
        <div
          className="
            absolute
            top-[70px]
            right-[26px]

            w-[220px]

            rounded-[28px]

            bg-white

            p-[16px]

            shadow-[0px_35px_60px_rgba(0,0,0,0.18)]

            z-20
          "
        >
          <button
            className="
              w-full

              text-left

              text-[18px]
              font-medium
              text-[#2B2B2B]

              px-[14px]
              py-[10px]

              rounded-[14px]
            "
          >
            View Assignment
          </button>

          <button
            className="
              w-full

              mt-[8px]

              text-left

              text-[18px]
              font-medium
              text-[#D63A34]

              bg-[#F4F4F4]

              px-[14px]
              py-[12px]

              rounded-[14px]
            "
          >
            Delete
          </button>
        </div>
      )}

      {/* TITLE */}
      <h2
        className="
          max-w-[82%]

          text-[28px]
          md:text-[32px]
          lg:text-[24px]

          font-black

          tracking-[-0.05em]

          text-[#1F1F1F]

          underline
          underline-offset-[3px]

          leading-[110%]
        "
      >
        {title}
      </h2>

      {/* FOOTER */}
      <div
        className="
          flex
          flex-row
          items-center
          justify-between

          gap-[12px]
        "
      >
        {/* ASSIGNED */}
        <div className="flex items-center gap-[4px]">
          <span
            className="
              text-[16px]
              md:text-[18px]
              lg:text-[16px]

              font-black
              text-[#1D1D1D]
            "
          >
            Assigned on :
          </span>

          <span
            className="
              text-[16px]
              md:text-[18px]
              lg:text-[16px]

              text-[#818181]
            "
          >
            {assigned}
          </span>
        </div>

        {/* DUE */}
        <div className="flex items-center gap-[4px]">
          <span
            className="
              text-[16px]
              md:text-[18px]
              lg:text-[16px]

              font-black
              text-[#1D1D1D]
            "
          >
            Due :
          </span>

          <span
            className="
              text-[16px]
              md:text-[18px]
              lg:text-[16px]

              text-[#818181]
            "
          >
            {due}
          </span>
        </div>
      </div>
    </div>
  );
}