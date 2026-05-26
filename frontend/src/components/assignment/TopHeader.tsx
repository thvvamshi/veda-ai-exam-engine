import NotificationBell from "../notification/NotificationBell";

import { useUserStore } from "../../store/user.store";

export default function TopHeader() {
  const teacherName = useUserStore((state) => state.teacherName);

  const initials =
    teacherName
      ?.split(" ")
      ?.map((word) => word[0])
      ?.join("")
      ?.slice(0, 2)
      ?.toUpperCase() || "JD";

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

            transition-all
            duration-200

            hover:opacity-70
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
        <NotificationBell />

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

              bg-[linear-gradient(135deg,#F7B34D_0%,#E35B47_100%)]

              flex
              items-center
              justify-center

              text-white
              text-[14px]
              font-[800]

              uppercase

              shrink-0
            "
          >
            {initials}
          </div>

          {/* NAME */}
          <span
            className="
              text-[16px]
              font-bold

              text-[#1A1A1A]
            "
          >
            {teacherName}
          </span>
        </div>
      </div>
    </div>
  );
}
