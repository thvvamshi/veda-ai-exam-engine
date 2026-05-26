// src/components/upload-material/UploadMaterialActions.tsx

type Props = {
  mobile?: boolean;

  step: number;

  loading?: boolean;

  onPrevious: () => void;

  onNext: () => void;

  onSubmit: () => void;
};

export default function UploadMaterialActions({
  mobile = false,
  step,
  loading = false,
  onPrevious,
  onNext,
  onSubmit,
}: Props) {
  return (
    <div
      className={`
        flex
        items-center
        justify-between

        ${
          mobile
            ? `
              fixed
              bottom-[90px]
              left-0
              right-0

              px-[16px]
            `
            : `
              mt-[28px]

              w-full
              max-w-[1120px]

              mx-auto
            `
        }
      `}
    >
      {/* PREVIOUS */}

      <button
        onClick={onPrevious}
        className="
          h-[56px]

          rounded-full

          border

          bg-white

          px-[28px]

          font-[600]
        "
      >
        ← Previous
      </button>

      {/* NEXT / GENERATE */}

      {step === 1 ? (
        <button
          onClick={onNext}
          className="
            h-[56px]

            rounded-full

            bg-[#111111]

            px-[34px]

            text-white
            font-[700]
          "
        >
          Next →
        </button>
      ) : (
        <button
          disabled={loading}
          onClick={onSubmit}
          className="
            h-[56px]

            rounded-full

            bg-[#111111]

            px-[34px]

            text-white
            font-[700]
          "
        >
          {loading
            ? "Generating..."
            : "Generate Assignment"}
        </button>
      )}
    </div>
  );
}