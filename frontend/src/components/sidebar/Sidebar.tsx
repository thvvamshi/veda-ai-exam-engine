import {
  Link,
  useLocation,
} from "react-router-dom";

import { useState } from "react";

import SidebarItem from "./SidebarItem";

import SettingsModal from "./SettingsModal";

import { useAssignmentStore } from "../../store/assignment.store";

import { useUserStore } from "../../store/user.store";

const navItems = [
  {
    icon: "⌂",
    label: "Home",
    href: "/",
  },

  {
    icon: "📄",
    label: "Assignments",
    href: "/assignment",
  },

  {
    icon: "✦",
    label: "AI Teacher’s Toolkit",
    href: "/ai-toolkit",
  },

  {
    icon: "📚",
    label: "My Library",
    href: "/library",
  },
];

export default function Sidebar() {
  const location =
    useLocation();

  const [openSettings, setOpenSettings] =
    useState(false);

  const assignments =
    useAssignmentStore(
      (state) =>
        state.assignments
    );

  const assignmentsCount =
    assignments.length;

  const schoolName =
    useUserStore(
      (state) =>
        state.schoolName
    );

  const schoolLocation =
    useUserStore(
      (state) =>
        state.schoolLocation
    );

  const teacherName =
    useUserStore(
      (state) =>
        state.teacherName
    );

  return (
    <>
      <aside
        className="
          hidden
          lg:flex

          w-[304px]
          min-w-[304px]

          h-[calc(100vh-24px)]
          min-h-[820px]

          rounded-[16px]

          bg-[#FFFFFF]

          px-[24px]
          py-[24px]

          flex-col
          justify-between

          shadow-[0px_18px_60px_rgba(0,0,0,0.10)]
        "
      >
        {/* TOP */}
        <div>
          {/* LOGO */}
          <div className="flex items-center gap-[12px]">
            <div
              className="
                w-[44px]
                h-[44px]

                rounded-[14px]

                bg-[linear-gradient(135deg,#F7B34D_0%,#E35B47_48%,#7B1FA2_100%)]

                flex
                items-center
                justify-center

                text-white
                text-[20px]
                font-[800]
              "
            >
              V
            </div>

            <div>
              <h1
                className="
                  text-[20px]
                  leading-none

                  font-[800]

                  tracking-[-0.04em]

                  text-[#1F1F1F]
                "
              >
                VedaAI
              </h1>

              <p
                className="
                  mt-[2px]

                  text-[12px]

                  text-[#8A8A8A]
                "
              >
                AI Assessment Platform
              </p>
            </div>
          </div>

          {/* CTA */}
          <Link
            to="/upload-material"
            className="
              mt-[40px]

              w-[256px]
              h-[55px]

              rounded-full

              border-[3px]
              border-[#E67D59]

              bg-[linear-gradient(180deg,#2A2A2A_0%,#171717_100%)]

              flex
              items-center
              justify-center
              gap-[12px]

              shadow-[0px_18px_40px_rgba(0,0,0,0.18)]

              transition-all
              duration-200

              hover:scale-[1.02]
            "
          >
            <span className="text-[22px] text-white">
              ✨
            </span>

            <span
              className="
                text-white

                text-[18px]
                leading-none

                font-[500]

                tracking-[-0.03em]
              "
            >
              Create Assignment
            </span>
          </Link>

          {/* NAV */}
          <div className="mt-[44px] flex flex-col gap-[8px]">
            {navItems.map(
              (item) => (
                <Link
                  key={
                    item.label
                  }
                  to={item.href}
                >
                  <SidebarItem
                    icon={item.icon}
                    label={item.label}
                    active={
                      item.href ===
                      "/"
                        ? location.pathname ===
                          "/"
                        : location.pathname.startsWith(
                            item.href
                          )
                    }
                    badge={
                      item.label ===
                        "Assignments" &&
                      assignmentsCount >
                        0
                        ? String(
                            assignmentsCount
                          )
                        : undefined
                    }
                  />
                </Link>
              )
            )}
          </div>
        </div>

        {/* BOTTOM */}
        <div>
          {/* SETTINGS */}
          <button
            onClick={() =>
              setOpenSettings(
                true
              )
            }
            className="
              w-full

              h-[52px]

              rounded-[16px]

              bg-[#F6F6F6]

              px-[16px]

              flex
              items-center
              justify-between

              transition-all
              duration-200

              hover:bg-[#EFEFEF]
            "
          >
            <div className="flex items-center gap-[10px]">
              <span className="text-[20px]">
                ⚙️
              </span>

              <span
                className="
                  text-[15px]
                  font-[600]

                  text-[#2B2B2B]
                "
              >
                Settings
              </span>
            </div>

            <span className="text-[#8B8B8B]">
              →
            </span>
          </button>

          {/* SCHOOL CARD */}
          <div
            className="
              mt-[18px]

              w-[256px]
              min-h-[112px]

              rounded-[24px]

              bg-[#F3F3F3]

              px-[18px]
              py-[16px]

              flex
              items-center
              gap-[16px]
            "
          >
            <div
              className="
                w-[60px]
                h-[60px]

                rounded-full

                bg-[#E8F1E7]

                flex
                items-center
                justify-center

                shrink-0

                text-[34px]
              "
            >
              🏫
            </div>

            <div className="min-w-0">
              <h3
                className="
                  text-[15px]
                  leading-[140%]

                  font-[700]

                  tracking-[-0.03em]

                  text-[#2B2B2B]

                  break-words
                "
              >
                {schoolName}
              </h3>

              <p
                className="
                  mt-[4px]

                  text-[13px]
                  leading-[140%]

                  text-[#707070]
                "
              >
                {schoolLocation}
              </p>

              <div
                className="
                  mt-[8px]

                  flex
                  items-center
                  gap-[6px]
                "
              >
                <span className="text-[12px]">
                  👤
                </span>

                <span
                  className="
                    text-[12px]
                    font-[600]

                    text-[#444444]
                  "
                >
                  {teacherName}
                </span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <SettingsModal
        open={openSettings}
        onClose={() =>
          setOpenSettings(false)
        }
      />
    </>
  );
}