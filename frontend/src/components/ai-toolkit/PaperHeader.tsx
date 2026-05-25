type Props = {
  mobile?: boolean;

  schoolName: string;

  subject: string;

  className: string;
};

export default function PaperHeader({
  mobile = false,
  schoolName,
  subject,
  className,
}: Props) {
  return (
    <div className="text-center">
      <h1
        className={`
          font-[700]
          tracking-[-0.04em]

          text-[#1F1F1F]

          ${
            mobile
              ? `
                text-[18px]
                leading-[26px]
              `
              : `
                text-[32px]
                leading-[42px]
              `
          }
        `}
      >
        {schoolName}
      </h1>

      <div
        className={`
          mt-[10px]

          flex
          flex-col

          ${
            mobile
              ? "gap-[2px]"
              : "gap-[4px]"
          }
        `}
      >
        <p
          className={`
            font-[600]

            text-[#2B2B2B]

            ${
              mobile
                ? `
                  text-[14px]
                  leading-[22px]
                `
                : `
                  text-[20px]
                  leading-[28px]
                `
            }
          `}
        >
          Subject: {subject}
        </p>

        <p
          className={`
            font-[600]

            text-[#2B2B2B]

            ${
              mobile
                ? `
                  text-[14px]
                  leading-[22px]
                `
                : `
                  text-[20px]
                  leading-[28px]
                `
            }
          `}
        >
          Class: {className}
        </p>
      </div>
    </div>
  );
}