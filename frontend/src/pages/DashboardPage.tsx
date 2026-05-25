import {
  useState,
} from "react";

import AssignmentGrid from "../components/assignment/AssignmentGrid";

import EmptyAssignmentState from "../components/assignment/EmptyAssignmentState";

import SearchBar from "../components/assignment/SearchBar";

import TopHeader from "../components/assignment/TopHeader";

import BottomNavbar from "../components/mobile/BottomNavbar";

const mockAssignments = [];

export default function DashboardPage() {
  const [search, setSearch] =
    useState("");

  const filteredAssignments =
    mockAssignments.filter(
      (assignment: any) =>
        assignment?.title
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  return (
    <>
      {/* DESKTOP */}
      <div
        className="
          hidden
          lg:flex

          flex-col

          gap-[18px]

          p-[24px]
        "
      >
        <TopHeader />

        <div>
          <h1
            className="
              text-[28px]
              font-[800]

              text-[#1F1F1F]
            "
          >
            Assignments
          </h1>

          <p
            className="
              mt-[4px]

              text-[#707070]
            "
          >
            Manage and create
            assignments
          </p>
        </div>

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        {filteredAssignments.length ===
        0 ? (
          <EmptyAssignmentState />
        ) : (
          <AssignmentGrid
            assignments={
              filteredAssignments
            }
          />
        )}
      </div>

      {/* MOBILE */}
      <div
        className="
          lg:hidden

          p-[16px]
          pb-[120px]
        "
      >
        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <div className="mt-[20px]">
          {filteredAssignments.length ===
          0 ? (
            <EmptyAssignmentState
              mobile
            />
          ) : (
            <AssignmentGrid
              assignments={
                filteredAssignments
              }
            />
          )}
        </div>

        <BottomNavbar />
      </div>
    </>
  );
}