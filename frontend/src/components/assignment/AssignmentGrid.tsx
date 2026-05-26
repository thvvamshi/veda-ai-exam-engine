import AssignmentCard from "./AssignmentCard";

import EmptyAssignmentState from "./EmptyAssignmentState";

import { Assignment } from "../../types/assignment.types";

type Props = {
  assignments: Assignment[];

  onDelete?: (
    id: string,
  ) => void;
};

export default function AssignmentGrid({
  assignments,

  onDelete,
}: Props) {
  // EMPTY STATE

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
              assignment.id
            }
            assignment={
              assignment
            }
            onDelete={
              onDelete
            }
          />
        ),
      )}
    </div>
  );
}