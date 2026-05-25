import {
  useNavigate,
} from "react-router-dom";

export default function CreateAssignmentButton() {
  const navigate =
    useNavigate();

  return (
    <button
      onClick={() =>
        navigate(
          "/upload-material"
        )
      }
      className="
        hidden
        lg:flex

        fixed
        bottom-[28px]
        left-1/2
        -translate-x-1/2

        h-[50px]
        px-[28px]

        rounded-full

        bg-[#111111]

        items-center
        justify-center
        gap-[10px]

        shadow-[0px_18px_40px_rgba(0,0,0,0.22)]

        z-50
      "
    >
      <span
        className="
          text-white
          text-[22px]
        "
      >
        +
      </span>

      <span
        className="
          text-white
          text-[18px]
          font-bold
        "
      >
        Create Assignment
      </span>
    </button>
  );
}