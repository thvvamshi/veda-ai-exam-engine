import AssignmentCard from "./AssignmentCard";

type Assignment = {
  id: number;
  title: string;
  assigned: string;
  due: string;
};

type Props = {
  assignments: Assignment[];
};

export default function AssignmentGrid({
  assignments,
}: Props) {
  return (
    <div
      className="
        grid
        grid-cols-1
        xl:grid-cols-2
        gap-[18px]
      "
    >
      {assignments.map((assignment) => (
        <AssignmentCard
          key={assignment.id}
          title={assignment.title}
          assigned={assignment.assigned}
          due={assignment.due}
        />
      ))}
    </div>
  );
}