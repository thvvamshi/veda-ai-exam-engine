import {
  useNavigate,
} from "react-router-dom";

import { Assignment } from "../../types/assignment.types";

type Props = {
  assignment: Assignment;
};

export default function AssignmentCard({
  assignment,
}: Props) {
  const navigate =
    useNavigate();

  return (
    <button
      onClick={() =>
        navigate(
          `/ai-toolkit/${assignment._id}`
        )
      }
      className="
        w-full

        rounded-[32px]

        bg-white

        p-[28px]

        text-left
      "
    >
      <h2
        className="
          text-[28px]
          font-[800]
        "
      >
        {assignment.title}
      </h2>
    </button>
  );
}