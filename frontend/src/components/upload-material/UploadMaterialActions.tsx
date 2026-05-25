
type Props = {
  mobile?: boolean;

  onSubmit: () => void;

  loading?: boolean;
};

export default function UploadMaterialActions({
  mobile = false,
  onSubmit,
  loading = false,
}: Props) {
  return (
    <div
      className={`
        ${
          mobile
            ? `
              fixed
              bottom-[88px]
              left-0
              right-0

              px-[16px]

              z-40
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
      <div
        className="
          w-full

          rounded-[28px]

          bg-white

          p-[18px]

          shadow-[0px_12px_40px_rgba(0,0,0,0.08)]

          flex
          items-center
          justify-between
        "
      >
        <button
          className="
            h-[56px]

            rounded-full

            border
            border-[#DADADA]

            px-[28px]

            text-[16px]
            font-[600]

            text-[#1F1F1F]
          "
        >
          Previous
        </button>

        <button
          disabled={loading}
          onClick={onSubmit}
          className="
            h-[56px]

            rounded-full

            bg-[#111111]

            px-[32px]

            text-white
            text-[16px]
            font-[700]

            disabled:opacity-50
          "
        >
          {loading
            ? "Creating..."
            : "Generate Assignment"}
        </button>
      </div>
    </div>
  );
}