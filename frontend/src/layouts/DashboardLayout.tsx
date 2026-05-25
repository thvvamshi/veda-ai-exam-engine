import { Outlet } from "react-router-dom";

import Sidebar from "../components/sidebar/Sidebar";

export default function DashboardLayout() {
  return (
    <div
      className="
        min-h-screen

        bg-[linear-gradient(180deg,#EEEEEE_0%,#DADADA_100%)]

        p-[12px]

        flex

        gap-[12px]
      "
    >
      {/* DESKTOP SIDEBAR */}
      <aside
        className="
          hidden
          lg:block

          shrink-0
        "
      >
        <Sidebar />
      </aside>

      {/* PAGE CONTENT */}
      <main
        className="
          flex-1

          min-w-0

          rounded-[32px]

          bg-[#F3F3F3]

          overflow-hidden
        "
      >
        <Outlet />
      </main>
    </div>
  );
}
