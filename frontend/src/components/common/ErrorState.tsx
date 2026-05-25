type Props = {
  message: string;
};

export default function ErrorState({
  message,
}: Props) {
  return (
    <div
      className="
        w-full

        rounded-[24px]

        bg-[#FFECEC]

        border
        border-[#FFB8B8]

        p-[24px]
      "
    >
      <h3
        className="
          text-[18px]
          font-bold

          text-[#D92D20]
        "
      >
        Something went wrong
      </h3>

      <p
        className="
          mt-[8px]

          text-[15px]

          text-[#7A271A]
        "
      >
        {message}
      </p>
    </div>
  );
}