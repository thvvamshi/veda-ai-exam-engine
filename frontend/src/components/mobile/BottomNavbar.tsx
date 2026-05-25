// src/components/mobile/BottomNavbar.tsx

import { Link, useLocation } from "react-router-dom";

const items = [
  {
    label: "Home",
    icon: "⌂",
    href: "/",
  },

  {
    label: "Assignments",
    icon: "▣",
    href: "/assignment",
  },

  {
    label: "Library",
    icon: "◫",
    href: "/library",
  },

  {
    label: "AI Toolkit",
    icon: "✦",
    href: "/ai-toolkit",
  },
];

export default function BottomNavbar() {
  const location = useLocation();

  return (
    <div
      className="
        lg:hidden

        fixed
        bottom-[18px]
        left-1/2
        -translate-x-1/2

        z-[999]

        w-[92%]
        max-w-[390px]

        h-[86px]

        rounded-[28px]

        bg-[linear-gradient(180deg,#161616_0%,#090909_100%)]

        px-[18px]

        flex
        items-center
        justify-between

        shadow-[0px_20px_50px_rgba(0,0,0,0.28)]
      "
    >
      {items.map((item) => {
        const active =
          location.pathname === item.href;

        return (
          <Link
            key={item.label}
            to={item.href}
            className="
              flex
              flex-col
              items-center
              justify-center

              gap-[6px]

              min-w-[62px]
            "
          >
            <span
              className={`
                text-[22px]

                ${
                  active
                    ? "text-white"
                    : "text-[#626262]"
                }
              `}
            >
              {item.icon}
            </span>

            <span
              className={`
                text-[13px]
                leading-none

                font-[500]

                ${
                  active
                    ? "text-white"
                    : "text-[#626262]"
                }
              `}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}