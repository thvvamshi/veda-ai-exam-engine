// src/components/ai-toolkit/AIToolkitBanner.tsx

export default function AIToolkitBanner() {
  return (
    <div
      className="
        w-full
        max-w-[1060px]

        h-[164px]

        rounded-[32px]

        bg-[linear-gradient(90deg,#1D1D1D_0%,#111111_100%)]

        px-[32px]
        py-[24px]

        flex
        flex-col
        justify-between

        shadow-[0px_8px_40px_rgba(0,0,0,0.16)]
      "
    >
      {/* TITLE */}
      <h2
        className="
          max-w-[930px]

          text-[21px]
          leading-[140%]

          font-[600]

          tracking-[-0.04em]

          text-white
        "
      >
        Certainly, Lakshya! Here are customized
        Question Paper for your CBSE Grade 8
        Science classes on the NCERT chapters:
      </h2>

      {/* BUTTON */}
      <button
        className="
          w-fit
          h-[56px]

          rounded-full

          bg-white

          px-[26px]

          flex
          items-center
          justify-center
          gap-[12px]

          shadow-[0px_6px_18px_rgba(0,0,0,0.08)]

          transition-all
          duration-200

          hover:scale-[1.02]
        "
      >
        <span
          className="
            text-[22px]
            text-[#1A1A1A]
          "
        >
          ⤓
        </span>

        <span
          className="
            text-[18px]
            font-[600]

            tracking-[-0.03em]

            text-[#1A1A1A]
          "
        >
          Download as PDF
        </span>
      </button>
    </div>
  );
}