import { useMemo, useState } from "react";

import AssignmentGrid from "../components/assignment/AssignmentGrid";

import EmptyAssignmentState from "../components/assignment/EmptyAssignmentState";

import SearchBar from "../components/assignment/SearchBar";

import TopHeader from "../components/assignment/TopHeader";

import BottomNavbar from "../components/mobile/BottomNavbar";

import Loader from "../components/common/Loader";

import ErrorState from "../components/common/ErrorState";

import { useAssignments } from "../hooks/useAssignments";

import { useAssignmentStore } from "../store/assignment.store";

import { deleteAssignmentAPI } from "../api/assignment.api";

export default function DashboardPage() {
  // FETCH ASSIGNMENTS

  useAssignments();

  const [search, setSearch] = useState("");

  // STORE

  const assignments = useAssignmentStore((state) => state.assignments);

  const loading = useAssignmentStore((state) => state.loading);

  const error = useAssignmentStore((state) => state.error);

  const setAssignments = useAssignmentStore((state) => state.setAssignments);

  // ================= DELETE =================

  const handleDeleteAssignment = async (id: string) => {
    try {
      console.log("DELETE CLICKED:", id);

      // DELETE FROM BACKEND

      await deleteAssignmentAPI(id);

      // REMOVE FROM UI

      const updatedAssignments = assignments.filter(
        (assignment) => assignment.id !== id,
      );

      setAssignments(updatedAssignments);

      console.log("DELETE SUCCESS");
    } catch (error) {
      console.error("DELETE FAILED:", error);
    }
  };

  // ================= FILTER =================

  const filteredAssignments = useMemo(() => {
    return assignments.filter((assignment) =>
      assignment.title?.toLowerCase().includes(search.toLowerCase()),
    );
  }, [assignments, search]);

  // ================= LOADING =================

  if (loading) {
    return <Loader />;
  }

  // ================= ERROR =================

  if (error) {
    return (
      <div className="p-[24px]">
        <ErrorState message={error} />
      </div>
    );
  }

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

        {/* TITLE */}

        <div>
          <h1
            className="
              text-[28px]
              font-[800]

              tracking-[-0.04em]

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
            Manage and create assignments
          </p>
        </div>

        {/* SEARCH */}

        <SearchBar value={search} onChange={setSearch} />

        {/* CONTENT */}

        {filteredAssignments.length === 0 ? (
          <EmptyAssignmentState />
        ) : (
          <AssignmentGrid
            assignments={filteredAssignments}
            onDelete={handleDeleteAssignment}
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
        <TopHeader />

        <div className="mt-[18px]">
          <SearchBar value={search} onChange={setSearch} />
        </div>

        <div className="mt-[20px]">
          {filteredAssignments.length === 0 ? (
            <EmptyAssignmentState mobile />
          ) : (
            <AssignmentGrid
              assignments={filteredAssignments}
              onDelete={handleDeleteAssignment}
            />
          )}
        </div>

        <BottomNavbar />
      </div>
    </>
  );
}
