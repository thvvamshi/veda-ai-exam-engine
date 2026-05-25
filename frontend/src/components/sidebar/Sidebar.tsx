// src/components/sidebar/Sidebar.tsx

import {
  Link,
  useLocation,
} from "react-router-dom";

import SidebarItem from "./SidebarItem";

type Props = {
  assignmentsCount?: number;
};

const navItems = [
  {
    icon: "⌂",
    label: "Home",
    href: "/",
  },

  {
    icon: "▣",
    label: "My Groups",
    href: "/groups",
  },

  {
    icon: "📄",
    label: "Assignments",
    href: "/assignment",
  },

  {
    icon: "✦",
    label: "AI Teacher’s Toolkit",
    href: "/ai-toolkit",
  },

  {
    icon: "◔",
    label: "My Library",
    href: "/library",
  },
];

export default function Sidebar({
  assignmentsCount = 32,
}: Props) {
  const location = useLocation();

  return (
    <aside
      className="
        hidden
        lg:flex

        w-[304px]
        min-w-[304px]

        h-[calc(100vh-24px)]
        min-h-[820px]

        rounded-[16px]

        bg-[#FFFFFF]

        px-[24px]
        py-[24px]

        flex-col
        justify-between

        shadow-[0px_18px_60px_rgba(0,0,0,0.10)]
      "
    >
      {/* TOP */}
      <div>
        {/* LOGO */}
        <div className="flex items-center gap-[12px]">
          <div
            className="
              w-[44px]
              h-[44px]

              rounded-[14px]

              bg-[linear-gradient(135deg,#F7B34D_0%,#E35B47_48%,#7B1FA2_100%)]

              flex
              items-center
              justify-center

              text-white
              text-[20px]
              font-[800]
            "
          >
            V
          </div>

          <h1
            className="
              text-[20px]
              leading-none

              font-[800]

              tracking-[-0.04em]

              text-[#1F1F1F]
            "
          >
            VedaAI
          </h1>
        </div>

        {/* CTA BUTTON */}
        <Link
          to="/upload-material"
          className="
            mt-[40px]

            w-[256px]
            h-[55px]

            rounded-full

            border-[3px]
            border-[#E67D59]

            bg-[linear-gradient(180deg,#2A2A2A_0%,#171717_100%)]

            flex
            items-center
            justify-center
            gap-[12px]

            shadow-[0px_18px_40px_rgba(0,0,0,0.18)]
          "
        >
          <span className="text-[22px] text-white">
            ✨
          </span>

          <span
            className="
              text-white

              text-[18px]
              leading-none

              font-[500]

              tracking-[-0.03em]
            "
          >
            {location.pathname ===
            "/ai-toolkit"
              ? "AI Teacher’s Toolkit"
              : "Create Assignment"}
          </span>
        </Link>

        {/* NAVIGATION */}
        <div className="mt-[44px] flex flex-col gap-[8px]">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
            >
              <SidebarItem
                icon={item.icon}
                label={item.label}
                active={
                  location.pathname === item.href
                }
                badge={
                  item.label === "Assignments" &&
                  assignmentsCount > 0
                    ? String(assignmentsCount)
                    : undefined
                }
              />
            </Link>
          ))}
        </div>
      </div>

      {/* BOTTOM */}
      <div>
        {/* SETTINGS */}
        <div
          className="
            flex
            items-center
            gap-[10px]

            px-[12px]
          "
        >
          <span className="text-[20px]">
            ⚙️
          </span>

          <span
            className="
              text-[16px]
              font-[500]

              text-[#8B8B8B]
            "
          >
            Settings
          </span>
        </div>

        {/* SCHOOL CARD */}
        <div
          className="
            mt-[18px]

            w-[256px]
            h-[112px]

            rounded-[24px]

            bg-[#F3F3F3]

            px-[18px]

            flex
            items-center
            gap-[16px]
          "
        >
          <div
            className="
              w-[60px]
              h-[60px]
              rounded-full
              bg-[#E8F1E7]
              flex
              items-center
              justify-center
              text-[40px]
            "
          >
            🏫
          </div>

          <div>
            <h3
              className="
                text-[16px]
                leading-[140%]

                font-[700]

                tracking-[-0.03em]

                text-[#2B2B2B]
              "
            >
              Delhi Public School
            </h3>

            <p
              className="
                mt-[4px]

                text-[14px]
                leading-[140%]

                text-[#707070]
              "
            >
              Bokaro Steel City
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}