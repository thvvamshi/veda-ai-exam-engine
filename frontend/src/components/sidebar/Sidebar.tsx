import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <aside
      className="
        hidden lg:flex

        w-[304px]
        min-w-[304px]

        h-[calc(100vh-24px)]
        min-h-[750px]

        flex-col
        justify-between

        rounded-[16px]

        bg-[#FFFFFF]

        p-[24px]

        shrink-0

        overflow-hidden
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
                text-[30px]
                font-black

                shadow-[0px_14px_40px_rgba(0,0,0,0.18)]
              "
            >
              V
            </div>

            <h1
              className="
                text-[25px]
                font-black
                tracking-[-0.04em]
                text-[#101010]
                leading-none
              "
            >
              VedaAI
            </h1>
          </div>

          {/* CREATE BUTTON */}
          <button
            className="
              w-[256px]
              h-[70px]

              rounded-[24px]

              bg-[#FFFFFF]

              flex
              items-center
              justify-center
            "
          >
            <div
              className="
                w-full
                h-[45px]

                rounded-full

                border-[4px]
                border-[#EA805F]

                bg-[linear-gradient(180deg,#30323A_0%,#191919_100%)]

                shadow-[0px_18px_40px_rgba(0,0,0,0.18)]

                flex
                items-center
                justify-center
                gap-[10px]
              "
            >
              <span
                className="
                  text-[19px]
                  text-white
                  leading-none
                "
              >
                ✨
              </span>

              <span
                className="
                  text-white
                  text-[18px]
                  font-bold
                  tracking-[-0.04em]
                  leading-[140%]
                "
              >
                Create Assignment
              </span>
            </div>
          </button>
        </div>

        {/* MENU */}
        <div className="w-[251px] flex flex-col gap-[8px]">
          <SidebarItem icon="⌂" label="Home" />

          <SidebarItem icon="▣" label="My Groups" />

          <SidebarItem
            icon="📄"
            label="Assignments"
            active
            badge="10"
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
          <span className="text-[20px] leading-none">
            ⚙️
          </span>

          <span
            className="
              text-[16px]
              font-medium
              tracking-[-0.04em]
              text-[#8B8B8B]
              leading-[140%]
            "
          >
            Settings
          </span>
        </div>

        {/* SCHOOL CARD */}
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

            shrink-0
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

              shrink-0
            "
          >
            🐵
          </div>

          {/* TEXT */}
          <div className="flex flex-col min-w-0">
            <h3
              className="
                text-[16px]
                font-bold
                tracking-[-0.04em]
                text-[#2C2C2C]
                leading-[140%]

                truncate
              "
            >
              Delhi Public School
            </h3>

            <p
              className="
                text-[14px]
                font-medium
                tracking-[-0.04em]
                text-[#6F6F6F]
                leading-[140%]

                truncate
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