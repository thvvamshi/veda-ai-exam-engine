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

  const getStatusStyles =
    () => {
      switch (
        assignment.status
      ) {
        case "completed":
          return "bg-[#ECFDF3] text-[#027A48]";

        case "processing":
          return "bg-[#FFF7E8] text-[#B54708]";

        case "failed":
          return "bg-[#FFECEC] text-[#D92D20]";

        default:
          return "bg-[#F4F4F4] text-[#444444]";
      }
    };

  return (
    <button
      aria-label={`Open ${assignment.title}`}
      onClick={() =>
        navigate(
          `/ai-toolkit/${assignment.id}`
        )
      }
      className="
        w-full

        rounded-[32px]

        bg-white

        p-[28px]

        text-left

        transition-all
        duration-200

        hover:scale-[1.01]

        shadow-[0px_4px_30px_rgba(0,0,0,0.05)]
      "
    >
      <div
        className="
          flex
          items-start
          justify-between
        "
      >
        <div>
          <h2
            className="
              text-[28px]
              leading-[34px]

              font-[800]

              tracking-[-0.04em]

              text-[#1F1F1F]
            "
          >
            {assignment.title}
          </h2>

          <p
            className="
              mt-[8px]

              text-[15px]

              text-[#7B7B7B]
            "
          >
            Subject:{" "}
            {assignment.subject}
          </p>

          <p
            className="
              mt-[4px]

              text-[14px]

              text-[#9B9B9B]
            "
          >
            Due:{" "}
            {new Date(
              assignment.dueDate
            ).toLocaleDateString()}
          </p>
        </div>

        <div
          className={`
            px-[14px]
            h-[36px]

            rounded-full

            flex
            items-center
            justify-center

            text-[13px]
            font-[700]

            capitalize

            ${getStatusStyles()}
          `}
        >
          {assignment.status}
        </div>
      </div>

      <div
        className="
          mt-[28px]

          flex
          flex-wrap

          gap-[10px]
        "
      >
        {assignment.questionTypes.map(
          (
            item,
            index
          ) => (
            <div
              key={index}
              className="
                h-[38px]

                rounded-full

                bg-[#F4F4F4]

                px-[14px]

                flex
                items-center

                text-[14px]
                font-[600]

                text-[#444444]
              "
            >
              {item.type} •{" "}
              {item.count} Q
            </div>
          )
        )}
      </div>

      <div
        className="
          mt-[30px]

          flex
          items-center
          justify-between
        "
      >
        <p
          className="
            text-[14px]

            text-[#9B9B9B]
          "
        >
          AI Assessment
        </p>

        <div
          className="
            text-[14px]
            font-[700]

            text-[#111111]
          "
        >
          View Details →
        </div>
      </div>
    </button>
  );
}