// src/layouts/DashboardLayout.tsx

import { Outlet } from "react-router-dom";

import Sidebar from "../components/sidebar/Sidebar";

export default function DashboardLayout() {
  return (
    <div
      className="
        min-h-screen

        bg-[#ECECEC]

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

        {/* PAGE */}
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