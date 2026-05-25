type Props = {
  value: string;

  onChange: (
    value: string
  ) => void;
};

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <div
      className="
        w-full

        rounded-[24px]

        bg-white

        px-[24px]
        py-[18px]

        flex
        items-center
        gap-[12px]

        shadow-[0px_4px_20px_rgba(0,0,0,0.04)]
      "
    >
      <span className="text-[20px]">
        🔍
      </span>

      <input
        value={value}
        onChange={(e) =>
          onChange(
            e.target.value
          )
        }
        placeholder="Search assignments..."
        className="
          w-full

          bg-transparent

          outline-none

          text-[16px]

          placeholder:text-[#9E9E9E]
        "
      />
    </div>
  );
}