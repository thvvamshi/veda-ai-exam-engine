// src/pages/DashboardPage.tsx

import AssignmentGrid from "../components/assignment/AssignmentGrid";
import CreateAssignmentButton from "../components/assignment/CreateAssignmentButton";
import EmptyAssignmentState from "../components/assignment/EmptyAssignmentState";
import SearchBar from "../components/assignment/SearchBar";
import TopHeader from "../components/assignment/TopHeader";
import BottomNavbar from "../components/mobile/BottomNavbar";

const assignments = [
  {
    id: 1,
    title: "Math Homework", 
    assigned: "2024-06-01",
    due: "2024-06-10",
  }

];

export default function DashboardPage() {
  const hasAssignments = assignments.length > 0;

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <div
        className="
          hidden
          lg:flex

          flex-col

          gap-[16px]
        "
      >
        <TopHeader />

        {hasAssignments ? (
          <>
            {/* TITLE */}
            <div className="px-[8px] pt-[6px]">
              <div className="flex items-start gap-[12px]">
                <div
                  className="
                    w-[22px]
                    h-[22px]

                    rounded-full

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
                    Manage and create assignments for your
                    classes.
                  </p>
                </div>
              </div>
            </div>

            <SearchBar />

            <AssignmentGrid assignments={assignments} />

            <CreateAssignmentButton />
          </>
        ) : (
          <EmptyAssignmentState />
        )}
      </div>

      {/* ================= MOBILE ================= */}
      <div
        className="
          lg:hidden

          pb-[140px]
        "
      >
        {/* MOBILE HEADER */}
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
          {/* LEFT */}
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
            {/* BELL */}
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

                  text-[24px]
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

            {/* PROFILE */}
            <div
              className="
                w-[44px]
                h-[44px]

                rounded-full

                bg-[#1E1E1E]
              "
            />

            {/* MENU */}
            <button className="text-[34px]">
              ☰
            </button>
          </div>
        </div>

        {hasAssignments ? (
          <>
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

            <div className="mt-[24px]">
              <SearchBar />
            </div>

            <div className="mt-[18px]">
              <AssignmentGrid assignments={assignments} />
            </div>
          </>
        ) : (
          <EmptyAssignmentState mobile />
        )}

        <BottomNavbar />
      </div>
    </>
  );
}