import SidebarItem from "./SidebarItem";

type Props = {
  assignmentsCount?: number;
};

export default function Sidebar({
  assignmentsCount = 0,
}: Props) {
  return (
    <aside
      className="
        hidden lg:flex

        w-[304px]
        h-[820px]

        flex-col
        justify-between

        rounded-[16px]

        bg-white

        p-[24px]

        shrink-0
      "
    >
      {/* TOP */}
      <div className="flex flex-col gap-[56px]">

        {/* LOGO + BUTTON */}
        <div className="flex flex-col gap-[32px]">

          {/* LOGO */}
          <div className="flex items-center gap-[12px]">
            <div
              className="
                w-[45px]
                h-[45px]

                rounded-[16px]

                bg-gradient-to-br
                from-[#F5A623]
                via-[#D94841]
                to-[#7B1FA2]

                flex
                items-center
                justify-center

                text-white
                text-[20px]
                font-bold
              "
            >
              V
            </div>

            <h1
              className="
                text-[20px]
                font-bold

                tracking-[-0.04em]

                text-[#101010]
              "
            >
              VedaAI
            </h1>
          </div>

          {/* BUTTON */}
          <button
            className="
              w-[251px]
              h-[45px]

              rounded-[999px]

              border-[5px]
              border-[#F28C6B]

              bg-[#18181B]

              text-white
              text-[20px]
              font-bold

              shadow-[0_20px_30px_rgba(0,0,0,0.18)]

              flex
              items-center
              justify-center
              gap-[12px]
            "
          >
            ✨

            <span>
              Create Assignment
            </span>
          </button>
        </div>

        {/* MENU */}
        <div className="flex flex-col gap-[8px] w-[251px]">
          <SidebarItem icon="⌂" label="Home" />

          <SidebarItem icon="▣" label="My Groups" />

          <SidebarItem
            icon="📄"
            label="Assignments"
            active
            badge={
              assignmentsCount > 0
                ? String(assignmentsCount)
                : undefined
            }
          />

          <SidebarItem
            icon="▭"
            label="AI Teacher’s Toolkit"
          />

          <SidebarItem
            icon="◔"
            label="My Library"
          />
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col gap-[16px]">

        {/* SETTINGS */}
        <div className="flex items-center gap-[8px]">
          <span className="text-[20px]">
            ⚙️
          </span>

          <span
            className="
              text-[16px]
              text-[#8B8B8B]
              font-medium
            "
          >
            Settings
          </span>
        </div>

        {/* SCHOOL */}
        <div
          className="
            w-[256px]
            h-[80px]

            rounded-[16px]

            bg-[#F0F0F0]

            p-[12px]

            flex
            items-center
            gap-[16px]
          "
        >
          {/* AVATAR */}
          <div
            className="
              w-[56px]
              h-[56px]

              rounded-full

              bg-[#F4D2C5]

              flex
              items-center
              justify-center

              text-[28px]
            "
          >
            🐵
          </div>

          {/* TEXT */}
          <div className="flex flex-col">
            <h3
              className="
                text-[16px]
                font-bold

                text-[#2C2C2C]

                leading-[140%]
              "
            >
              Delhi Public School
            </h3>

            <p
              className="
                text-[14px]

                text-[#6F6F6F]

                leading-[140%]
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