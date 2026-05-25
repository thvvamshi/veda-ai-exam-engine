
type Props = {
  mobile?: boolean;

  value: string;

  onChange: (value: string) => void;
};

export default function DueDateInput({
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
        Due Date
      </label>

      <input
        type="date"
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className={`
          mt-[12px]

          w-full

          rounded-[18px]

          border
          border-[#E4E4E4]

          outline-none

          px-[18px]

          ${
            mobile
              ? `
                h-[52px]
                text-[15px]
              `
              : `
                h-[64px]
                text-[17px]
              `
          }
        `}
      />
    </div>
  );
}