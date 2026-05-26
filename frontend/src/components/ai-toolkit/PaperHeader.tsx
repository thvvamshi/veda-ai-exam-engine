type Props = {
  mobile?: boolean;

  schoolName: string;

  subject: string;

  className: string;

  timeAllowed?: number;

  maxMarks?: number;
};

export default function PaperHeader({
  mobile = false,
  schoolName,
  subject,
  className,
  timeAllowed,
  maxMarks,
}: Props) {
  return (
    <div>
      <div className="text-center">
        <h1
          className={`
            font-[800]

            tracking-[-0.04em]

            text-[#1F1F1F]

            ${
              mobile
                ? `
                  text-[26px]
                  leading-[38px]
                `
                : `
                  text-[52px]
                  leading-[66px]
                `
            }
          `}
        >
          {schoolName}
        </h1>

        <div className="mt-[20px]">
          <p
            className={`
              font-[700]

              ${
                mobile
                  ? "text-[18px]"
                  : "text-[32px]"
              }
            `}
          >
            Subject: {subject}
          </p>

          <p
            className={`
              mt-[6px]

              font-[700]

              ${
                mobile
                  ? "text-[18px]"
                  : "text-[32px]"
              }
            `}
          >
            Class: {className}
          </p>
        </div>
      </div>

      <div
        className="
          mt-[40px]

          flex
          items-center
          justify-between
        "
      >
        <p
          className={`
            font-[600]

            ${
              mobile
                ? "text-[14px]"
                : "text-[24px]"
            }
          `}
        >
          Time Allowed: {timeAllowed} minutes
        </p>

        <p
          className={`
            font-[600]

            ${
              mobile
                ? "text-[14px]"
                : "text-[24px]"
            }
          `}
        >
          Maximum Marks: {maxMarks}
        </p>
      </div>
    </div>
  );
}