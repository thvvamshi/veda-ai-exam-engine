export default function SearchBar() {
  return (
    <div
      className="
        w-full

        rounded-[28px]

        bg-[#F5F5F5]

        px-[24px]
        py-[16px]

        flex
        flex-col
        lg:flex-row

        lg:items-center
        justify-between

        gap-[16px]
      "
    >
      {/* FILTER */}
      <div
        className="
          flex
          items-center
          gap-[10px]

          text-[#A0A0A0]

          text-[16px]
          md:text-[18px]

          font-semibold
        "
      >
        <span className="text-[22px]">⚲</span>

        <span>Filter By</span>
      </div>

      {/* SEARCH */}
      <div
        className="
          w-full
          lg:w-[520px]

          h-[45px]

          rounded-full

          border
          border-[#D9D9D9]

          px-[20px]

          flex
          items-center
          gap-[12px]
        "
      >
        <span className="text-[#B1B1B1] text-[22px]">
          ⌕
        </span>

        <input
          type="text"
          placeholder="Search Assignment"
          className="
            flex-1

            bg-transparent
            outline-none

            text-[16px]
            md:text-[18px]

            text-[#3A3A3A]

            placeholder:text-[#B9B9B9]
          "
        />
      </div>
    </div>
  );
}