
type Props = {
  mobile?: boolean;

  index: number;

  data: {
    type: string;
    count: number;
    marks: number;
  };

  onChange: (
    index: number,
    field: string,
    value: any
  ) => void;

  onDelete: (
    index: number
  ) => void;
};

export default function QuestionTypeRow({
  mobile = false,
  index,
  data,
  onChange,
  onDelete,
}: Props) {
  return (
    <div
      className="
        rounded-[24px]

        border
        border-[#EAEAEA]

        p-[18px]

        flex
        flex-col
        lg:flex-row

        gap-[14px]
      "
    >
      <input
        value={data.type}
        onChange={(e) =>
          onChange(
            index,
            "type",
            e.target.value
          )
        }
        placeholder="Question Type"
        className="
          flex-1

          h-[52px]

          rounded-[16px]

          border
          border-[#E4E4E4]

          px-[16px]

          outline-none
        "
      />

      <input
        type="number"
        value={data.count}
        onChange={(e) =>
          onChange(
            index,
            "count",
            Number(e.target.value)
          )
        }
        placeholder="Questions"
        className="
          w-full
          lg:w-[140px]

          h-[52px]

          rounded-[16px]

          border
          border-[#E4E4E4]

          px-[16px]

          outline-none
        "
      />

      <input
        type="number"
        value={data.marks}
        onChange={(e) =>
          onChange(
            index,
            "marks",
            Number(e.target.value)
          )
        }
        placeholder="Marks"
        className="
          w-full
          lg:w-[140px]

          h-[52px]

          rounded-[16px]

          border
          border-[#E4E4E4]

          px-[16px]

          outline-none
        "
      />

      <button
        onClick={() =>
          onDelete(index)
        }
        className="
          h-[52px]

          rounded-[16px]

          bg-[#FFECEC]

          px-[20px]

          text-[#D92D20]
          font-[700]
        "
      >
        Delete
      </button>
    </div>
  );
}