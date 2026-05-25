import AssignmentGrid from "../components/assignment/AssignmentGrid";
import CreateAssignmentButton from "../components/assignment/CreateAssignmentButton";
import SearchBar from "../components/assignment/SearchBar";
import TopHeader from "../components/assignment/TopHeader";
import BottomNavbar from "../components/mobile/BottomNavbar";

export default function DashboardPage() {
  return (
    <>
      {/* DESKTOP */}
      <div
        className="
          hidden
          lg:flex

          flex-col

          gap-[16px]
        "
      >
        <TopHeader />

        {/* TITLE */}
        <div className="px-[8px] pt-[6px]">
          <div className="flex items-start gap-[12px]">
            <div
              className="
                w-[15px]
                h-[15px]

                rounded-full
                opacity-blur

                bg-[#56D25F]

                mt-[12px]
              "
            />

            <div>
              <h1
                className="
                  text-[20px]
                  font-black

                  tracking-[-0.06em]

                  text-[#1C1C1C]
                "
              >
                Assignments
              </h1>

              <p
                className="
                  text-[14px]
                  text-[#707070]

                  -mt-[6px]
                "
              >
                Manage and create assignments for your classes.
              </p>
            </div>
          </div>
        </div>

        <SearchBar />

        <AssignmentGrid />

        <CreateAssignmentButton />
      </div>

      {/* MOBILE */}
      <div
        className="
          lg:hidden

          pb-[140px]
        "
      >
        {/* MOBILE TOP HEADER */}
        <div
          className="
            w-full
            h-[74px]

            rounded-[24px]

            bg-[#F5F5F5]

            px-[20px]

            flex
            items-center
            justify-between
          "
        >
          {/* LOGO */}
          <div className="flex items-center gap-[12px]">
            <div
              className="
                w-[40px]
                h-[40px]

                rounded-[12px]

                bg-[linear-gradient(135deg,#F5A623_0%,#A50F2D_100%)]

                flex
                items-center
                justify-center

                text-white
                font-black
                text-[24px]
              "
            >
              V
            </div>

            <span
              className="
                text-[22px]
                font-black
                tracking-[-0.04em]
              "
            >
              VedaAI
            </span>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-[14px]">
            <div className="relative">
              <div
                className="
                  w-[44px]
                  h-[44px]

                  rounded-full

                  bg-[#ECECEC]

                  flex
                  items-center
                  justify-center

                  text-[22px]
                "
              >
                🔔
              </div>

              <div
                className="
                  absolute
                  top-[2px]
                  right-[2px]

                  w-[10px]
                  h-[10px]

                  rounded-full

                  bg-[#FF5A1F]
                "
              />
            </div>

            <div
              className="
                w-[44px]
                h-[44px]

                rounded-full

                bg-[#1E1E1E]
              "
            />

            <button className="text-[34px]">
              ☰
            </button>
          </div>
        </div>

        {/* MOBILE TITLE */}
        <div
          className="
            relative

            flex
            items-center
            justify-center

            mt-[22px]
          "
        >
          <button
            className="
              absolute
              left-0

              w-[62px]
              h-[62px]

              rounded-full

              bg-[#F5F5F5]

              text-[32px]
            "
          >
            ←
          </button>

          <h1
            className="
              text-[28px]
              font-black
              tracking-[-0.04em]
            "
          >
            Assignments
          </h1>
        </div>

        {/* SEARCH */}
        <div className="mt-[24px]">
          <SearchBar />
        </div>

        {/* CARDS */}
        <div className="mt-[18px]">
          <AssignmentGrid />
        </div>

        <BottomNavbar />
      </div>
    </>
  );
}