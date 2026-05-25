import AssignmentCard from "./AssignmentCard";

const assignments = Array.from({ length: 6 });

export default function AssignmentGrid() {
  return (
    <div
      className="
        grid

        grid-cols-1
        xl:grid-cols-2

        gap-[18px]
      "
    >
      {assignments.map((_, index) => (
        <AssignmentCard
          key={index}
          title="Quiz on Electricity"
          assigned="20-06-2025"
          due="21-06-2025"
        />
      ))}
    </div>
  );
}