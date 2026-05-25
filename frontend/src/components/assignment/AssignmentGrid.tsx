import AssignmentCard from "./AssignmentCard";

import EmptyAssignmentState from "./EmptyAssignmentState";

import { Assignment } from "../../types/assignment.types";

type Props = {
  assignments: Assignment[];
};

export default function AssignmentGrid({
  assignments,
}: Props) {
  if (
    !assignments ||
    assignments.length === 0
  ) {
    return (
      <EmptyAssignmentState />
    );
  }

  return (
    <div
      className="
        grid

        grid-cols-1
        xl:grid-cols-2

        gap-[18px]
      "
    >
      {assignments.map(
        (assignment) => (
          <AssignmentCard
            key={
              assignment._id
            }
            assignment={
              assignment
            }
          />
        )
      )}
    </div>
  );
}