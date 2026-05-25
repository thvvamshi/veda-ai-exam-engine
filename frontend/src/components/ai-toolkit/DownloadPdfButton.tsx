// src/components/ai-toolkit/DownloadPdfButton.tsx

type Props = {
  mobile?: boolean;
};

export default function DownloadPdfButton({
  mobile = false,
}: Props) {
  return (
    <button
      className={`
        rounded-full

        bg-white

        flex
        items-center
        justify-center

        shrink-0

        ${
          mobile
            ? `
              w-[44px]
              h-[44px]
            `
            : `
              h-[58px]
              px-[28px]
              gap-[12px]

              w-fit
            `
        }
      `}
    >
      <span
        className={`
          ${
            mobile
              ? "text-[18px]"
              : "text-[22px]"
          }
        `}
      >
        ⬇
      </span>

      {!mobile && (
        <span
          className="
            text-[#2B2B2B]
            text-[21px]
            leading-[24px]
            font-[600]
          "
        >
          Download as PDF
        </span>
      )}
    </button>
  );
}