export default function TopHeader() {
  return (
    <div
      className="
        w-full
        h-[60px]

        rounded-[24px]

        bg-[#F5F5F5]

        px-[24px]

        flex
        items-center
        justify-between
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-[16px]">
        <button
          className="
            text-[28px]
            text-[#2D2D2D]
          "
        >
          ←
        </button>

        <span
          className="
            text-[16px]
            font-semibold

            text-[#A1A1A1]
          "
        >
          Assignment
        </span>
      </div>

      {/* RIGHT */}
<div className="flex items-center gap-[18px]">

  {/* NOTIFICATION */}
  <div
    className="
      relative

      w-[28px]
      h-[28px]

      flex
      items-center
      justify-center
    "
  >
    {/* BELL ICON */}
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#2D2D2D]"
    >
      <path
        d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z"
        fill="currentColor"
      />
    </svg>

    {/* RED DOT */}
    <div
      className="
        absolute
        top-[1px]
        right-[1px]

        w-[8px]
        h-[8px]

        rounded-full

        bg-[#FF5B1F]
      "
    />
  </div>

  {/* PROFILE */}
  <div
    className="
      h-[46px]

      rounded-full

      bg-white

      px-[12px]

      flex
      items-center
      gap-[12px]

      shadow-[0px_2px_10px_rgba(0,0,0,0.05)]
    "
  >
    {/* AVATAR */}
    <div
      className="
        w-[38px]
        h-[38px]

        rounded-full

        bg-[#E4C3AA]

        flex
        items-center
        justify-center

        text-[18px]
      "
    >
      👤
    </div>

    {/* NAME */}
    <span
      className="
        text-[16px]
        font-bold

        text-[#1A1A1A]
      "
    >
      John Doe
    </span>
  </div>
</div>
    </div>
  );
}