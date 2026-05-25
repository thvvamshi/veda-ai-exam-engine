
type Props = {
  mobile?: boolean;

  value: string;

  onChange: (value: string) => void;
};

export default function AdditionalInfoBox({
  mobile = false,
  value,
  onChange,
}: Props) {
  return (
    <div>
      <label
        className={`
          font-[700]

          text-[#1F1F1F]

          ${
            mobile
              ? "text-[15px]"
              : "text-[18px]"
          }
        `}
      >
        Additional Instructions
      </label>

      <textarea
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder="Enter instructions for AI generation..."
        className={`
          mt-[12px]

          w-full

          rounded-[24px]

          border
          border-[#E4E4E4]

          outline-none

          resize-none

          px-[18px]
          py-[18px]

          ${
            mobile
              ? `
                h-[140px]
                text-[15px]
              `
              : `
                h-[180px]
                text-[16px]
              `
          }
        `}
      />
    </div>
  );
}