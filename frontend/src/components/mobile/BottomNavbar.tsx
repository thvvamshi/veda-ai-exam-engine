// src/components/mobile/BottomNavbar.tsx

import {
  Grid2X2,
  ClipboardList,
  Library,
  Sparkles,
} from "lucide-react";

type Props = {
  hideFab?: boolean;
};

export default function BottomNavbar({
  hideFab = false,
}: Props) {
  return (
    <div
      className="
        fixed
        bottom-0
        left-0
        right-0

        z-50

        lg:hidden
      "
    >
      <div className="relative">
        {/* FAB */}
        {!hideFab && (
          <button
            className="
              absolute
              right-[24px]
              top-[-38px]

              w-[92px]
              h-[92px]

              rounded-full

              bg-[#F5F5F5]

              flex
              items-center
              justify-center

              shadow-[0px_10px_30px_rgba(0,0,0,0.18)]
            "
          >
            <span
              className="
                text-[52px]
                leading-none

                text-[#FF6224]
                font-light
              "
            >
              +
            </span>
          </button>
        )}

        {/* NAVBAR */}
        <div
          className="
            h-[94px]

            rounded-t-[32px]

            bg-[linear-gradient(180deg,#181818_0%,#101010_100%)]

            px-[24px]
            pb-[18px]

            flex
            items-center
            justify-between
          "
        >
          <NavItem
            icon={<Grid2X2 size={24} />}
            label="Home"
          />

          <NavItem
            active
            icon={<ClipboardList size={24} />}
            label="Assignments"
          />

          <NavItem
            icon={<Library size={24} />}
            label="Library"
          />

          <NavItem
            icon={<Sparkles size={24} />}
            label="AI Toolkit"
          />
        </div>
      </div>
    </div>
  );
}

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
};

function NavItem({
  icon,
  label,
  active = false,
}: NavItemProps) {
  return (
    <button
      className="
        flex
        flex-col
        items-center
        gap-[8px]
      "
    >
      <div
        className={
          active
            ? "text-white"
            : "text-[#5C5C5C]"
        }
      >
        {icon}
      </div>

      <span
        className={`
          text-[14px]
          leading-[18px]
          font-[500]

          ${
            active
              ? "text-white"
              : "text-[#5C5C5C]"
          }
        `}
      >
        {label}
      </span>
    </button>
  );
}