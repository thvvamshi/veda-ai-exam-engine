import {
  useLocation,
  useNavigate,
} from "react-router-dom";

export default function BottomNavbar() {
  const navigate =
    useNavigate();

  const location =
    useLocation();

  const navItems = [
    {
      label: "Home",
      icon: "⌂",
      path: "/",
    },
    {
      label: "Assignments",
      icon: "📄",
      path: "/assignment",
    },
    {
      label: "Create",
      icon: "✚",
      path: "/upload-material",
    },
  ];

  return (
    <div
      className="
        fixed
        bottom-0
        left-0
        right-0

        h-[84px]

        bg-white

        border-t
        border-[#EAEAEA]

        flex
        items-center
        justify-around

        z-50
      "
    >
      {navItems.map((item) => {
        const active =
          location.pathname ===
          item.path;

        return (
          <button
            key={item.label}
            onClick={() =>
              navigate(
                item.path
              )
            }
            className="
              flex
              flex-col
              items-center
              gap-[4px]
            "
          >
            <span
              className={`
                text-[22px]

                ${
                  active
                    ? "opacity-100"
                    : "opacity-50"
                }
              `}
            >
              {item.icon}
            </span>

            <span
              className={`
                text-[12px]

                ${
                  active
                    ? "font-bold"
                    : "font-medium"
                }
              `}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}