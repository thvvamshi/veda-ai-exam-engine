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
        w-[251px]
        h-[42px]
        flex
        items-center
        justify-between
        px-[12px]
        py-[8px]
        rounded-[8px]
        transition-all
        ${
          active
            ? "bg-[#F0F0F0]"
            : "bg-transparent"
        }
      `}
    >
      {/* LEFT */}
      <div className="w-[136px] h-[40px] flex items-center gap-[8px]">

        {/* ICON */}
        <div
          className="
            w-[20px]
            h-[20px]
            flex
            items-center
            justify-center
            text-[20px]
            text-[#7D7D7D]
          "
        >
          {icon}
        </div>

        {/* TEXT */}
        <span
          className={`
            text-[20px]
            leading-[140%]
            tracking-[-0.04em]
            ${
              active
                ? "font-bold text-[#2C2C2C]"
                : "font-medium text-[#8C8C8C]"
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
            w-[68px]
            h-[36px]
            rounded-full
            bg-[#FF6A1A]
            flex
            items-center
            justify-center
            text-white
            text-[20px]
            font-bold
          "
        >
          {badge}
        </div>
      )}
    </div>
  );
}