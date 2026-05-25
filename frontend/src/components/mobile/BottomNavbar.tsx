export default function BottomNavbar() {
  return (
    <div
      className="
        lg:hidden

        fixed
        bottom-[16px]
        left-1/2
        -translate-x-1/2

        w-[92%]
        h-[94px]

        rounded-[34px]

        bg-[#121212]

        px-[24px]

        flex
        items-center
        justify-between

        shadow-[0px_20px_50px_rgba(0,0,0,0.35)]

        z-50
      "
    >
      {/* FLOATING ACTION BUTTON */}
      <button
        className="
          absolute
          -top-[34px]
          right-[12px]

          w-[82px]
          h-[82px]

          rounded-full

          bg-[#F5F5F5]

          flex
          items-center
          justify-center

          text-[#FF5B1F]
          text-[48px]
          font-light

          shadow-[0px_24px_50px_rgba(0,0,0,0.28)]
        "
      >
        +
      </button>

      {[
        ["⌘", "Home"],
        ["▣", "Assignments"],
        ["⊞", "Library"],
        ["✦", "AI Toolkit"],
      ].map(([icon, label], index) => (
        <div
          key={index}
          className="
            flex
            flex-col
            items-center
            gap-[6px]
          "
        >
          <span
            className={`
              text-[24px]
              ${
                label === "Assignments"
                  ? "text-white"
                  : "text-[#5D5D5D]"
              }
            `}
          >
            {icon}
          </span>

          <span
            className={`
              text-[14px]
              font-semibold
              tracking-[-0.03em]

              ${
                label === "Assignments"
                  ? "text-white"
                  : "text-[#5D5D5D]"
              }
            `}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}