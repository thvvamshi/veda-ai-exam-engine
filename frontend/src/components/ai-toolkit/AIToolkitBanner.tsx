import { getGeneratedPaperPdfUrl } from "../../api/generatedPaper.api";

type Props = {
  mobile?: boolean;

  generatedPaper: any;
};

export default function AIToolkitBanner({
  mobile = false,

  generatedPaper,
}: Props) {
  const handleDownloadPdf = () => {
    console.log("GENERATED PAPER:", generatedPaper);

    // BACKEND RETURNS "id"
    const paperId = generatedPaper?.id;

    if (!paperId) {
      alert("Generated paper ID missing");

      return;
    }

    const pdfUrl = getGeneratedPaperPdfUrl(paperId);

    console.log("PDF URL:", pdfUrl);

    window.open(pdfUrl, "_blank");
  };

  return (
    <div
      className={`
        w-full

        rounded-[32px]

        bg-[linear-gradient(90deg,#1D1D1D_0%,#111111_100%)]

        flex
        flex-col
        justify-between

        shadow-[0px_8px_40px_rgba(0,0,0,0.16)]

        ${
          mobile
            ? `
              min-h-[160px]

              px-[18px]
              py-[18px]
            `
            : `
              min-h-[190px]

              px-[32px]
              py-[28px]
            `
        }
      `}
    >
      <h2
        className={`
          font-[600]

          tracking-[-0.04em]

          text-white

          ${
            mobile
              ? `
                text-[18px]
                leading-[30px]
              `
              : `
                max-w-[930px]

                text-[30px]
                leading-[48px]
              `
          }
        `}
      >
        Your AI-generated question paper for {generatedPaper?.subject} is ready.
      </h2>

      <button
        onClick={handleDownloadPdf}
        className={`
          rounded-full

          bg-white

          flex
          items-center
          justify-center

          transition-all
          duration-200

          hover:scale-[1.02]

          ${
            mobile
              ? `
                mt-[18px]

                w-[52px]
                h-[52px]
              `
              : `
                mt-[26px]

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
            ${mobile ? "text-[20px]" : "text-[24px]"}
          `}
        >
          ⬇
        </span>

        {!mobile && (
          <span
            className="
              text-[#1A1A1A]

              text-[20px]

              font-[600]
            "
          >
            Download as PDF
          </span>
        )}
      </button>
    </div>
  );
}
