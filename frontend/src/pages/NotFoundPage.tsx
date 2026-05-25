import {
  useNavigate,
} from "react-router-dom";

export default function NotFoundPage() {
  const navigate =
    useNavigate();

  return (
    <div
      className="
        min-h-screen

        bg-[#F3F3F3]

        flex
        items-center
        justify-center

        px-[20px]
      "
    >
      <div
        className="
          w-full
          max-w-[620px]

          rounded-[40px]

          bg-white

          px-[32px]
          py-[60px]

          flex
          flex-col
          items-center

          text-center
        "
      >
        <h1
          className="
            text-[120px]
            leading-none
            font-[800]

            tracking-[-0.06em]

            text-[#1F1F1F]
          "
        >
          404
        </h1>

        <h2
          className="
            mt-[12px]

            text-[34px]
            leading-[44px]
            font-[700]

            tracking-[-0.04em]

            text-[#1F1F1F]
          "
        >
          Page Not Found
        </h2>

        <p
          className="
            mt-[14px]

            max-w-[420px]

            text-[18px]
            leading-[30px]

            text-[#707070]
          "
        >
          The page you are trying to access
          does not exist or may have been
          moved.
        </p>

        <button
          onClick={() =>
            navigate(
              "/assignment"
            )
          }
          className="
            mt-[34px]

            h-[58px]

            rounded-full

            px-[32px]

            bg-[linear-gradient(180deg,#181818_0%,#101010_100%)]

            flex
            items-center
            justify-center

            text-white
            text-[18px]
            font-[600]

            cursor-pointer

            transition-all
            duration-200

            hover:scale-[1.02]
          "
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}