type Props = {
  icon: string;
  label: string;
  active?: boolean;
  badge?: string;
};

export default function SidebarItem({
  icon,
  label,
  active = false,
  badge,
}: Props) {
  return (
    <div
      className={`
        w-full
        min-h-[42px]

        flex
        items-center
        justify-between

        px-[12px]
        py-[8px]

        rounded-[8px]

        ${
          active
            ? "bg-[#F0F0F0]"
            : ""
        }
      `}
    >
      {/* LEFT */}
      <div className="flex items-center gap-[12px]">

        {/* ICON */}
        <div
          className="
            w-[20px]
            h-[20px]

            flex
            items-center
            justify-center

            text-[18px]
            text-[#7D7D7D]
          "
        >
          {icon}
        </div>

        {/* LABEL */}
        <span
          className={`
            tracking-[-0.04em]
            leading-[140%]

            ${
              active
                ? "text-[#2C2C2C] font-bold text-[16px]"
                : "text-[#8B8B8B] font-medium text-[16px]"
            }
          `}
        >
          {label}
        </span>
      </div>

      {/* BADGE */}
      {badge && (
        <div
          className="
            min-w-[14px]
            h-[20px]

            px-[14px]

            rounded-full

            bg-[#FF6A1A]

            flex
            items-center
            justify-center

            text-white
            text-[14px]
            font-bold
            leading-none
          "
        >
          {badge}
        </div>
      )}
    </div>
  );
}