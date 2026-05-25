import { Outlet } from "react-router-dom";

import Sidebar from "../components/sidebar/Sidebar";

export default function DashboardLayout() {
  return (
    <div
      className="
        min-h-screen

        bg-[linear-gradient(180deg,#EEEEEE_0%,#DADADA_100%)]

        p-[12px]

        overflow-hidden
      "
    >
      <div
        className="
          flex
          gap-[12px]

          h-[calc(100vh-24px)]
        "
      >
        {/* SIDEBAR */}
        <Sidebar />

        {/* PAGE CONTENT */}
        <main
          className="
            flex-1
            min-w-0

            overflow-y-auto
          "
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}