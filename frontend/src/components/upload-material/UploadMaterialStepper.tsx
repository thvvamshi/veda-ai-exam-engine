type Props = {
  mobile?: boolean;

  step: number;
};

export default function UploadMaterialStepper({
  mobile = false,
  step,
}: Props) {
  const activeClass =
    "bg-[#5B5B5B]";

  const inactiveClass =
    "bg-[#E7E7E7]";

  if (mobile) {
    return (
      <div
        className="
          mt-[20px]

          flex
          items-center
          gap-[10px]
        "
      >
        {/* STEP 1 */}
        <div
          className={`
            flex-1
            h-[8px]

            rounded-full

            transition-all
            duration-300

            ${
              step >= 1
                ? activeClass
                : inactiveClass
            }
          `}
        />

        {/* STEP 2 */}
        <div
          className={`
            flex-1
            h-[8px]

            rounded-full

            transition-all
            duration-300

            ${
              step >= 2
                ? activeClass
                : inactiveClass
            }
          `}
        />
      </div>
    );
  }

  return (
    <div
      className="
        mt-[32px]

        w-full
        max-w-[760px]

        mx-auto

        flex
        items-center
        gap-[14px]
      "
    >
      {/* STEP 1 */}
      <div
        className={`
          flex-1
          h-[6px]

          rounded-full

          transition-all
          duration-300

          ${
            step >= 1
              ? activeClass
              : inactiveClass
          }
        `}
      />

      {/* STEP 2 */}
      <div
        className={`
          flex-1
          h-[6px]

          rounded-full

          transition-all
          duration-300

          ${
            step >= 2
              ? activeClass
              : inactiveClass
          }
        `}
      />  
    </div>
  );
}