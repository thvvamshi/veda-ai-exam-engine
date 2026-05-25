// src/components/upload-material/UploadDropzone.tsx

import { Upload } from "lucide-react";

type Props = {
  mobile?: boolean;
};

export default function UploadDropzone({
  mobile = false,
}: Props) {
  return (
    <>
      <div
        className={`
          rounded-[28px]

          border-[3px]
          border-dashed
          border-[#D7D7D7]

          bg-[#FBFBFB]

          flex
          flex-col
          items-center
          justify-center

          ${
            mobile
              ? "h-[294px] px-[20px]"
              : "h-[300px]"
          }
        `}
      >
        <div
          className={`
            rounded-[16px]

            bg-white

            flex
            items-center
            justify-center

            ${
              mobile
                ? "w-[64px] h-[64px]"
                : "w-[72px] h-[72px]"
            }
          `}
        >
          <Upload
            className={`
              ${
                mobile
                  ? "w-[34px] h-[34px]"
                  : "w-[38px] h-[38px]"
              }
            `}
          />
        </div>

        <h3
          className={`
            mt-[24px]

            text-center
            font-semibold

            ${
              mobile
                ? "text-[18px]"
                : "text-[24px]"
            }
          `}
        >
          Choose a file or drag & drop it here
        </h3>

        <p
          className={`
            mt-[10px]

            text-[#B1B1B1]

            ${
              mobile
                ? "text-[14px]"
                : "text-[18px]"
            }
          `}
        >
          JPEG, PNG, upto 10MB
        </p>

        <button
          className={`
            mt-[22px]

            rounded-full

            bg-[#F3F3F3]

            font-semibold

            ${
              mobile
                ? `
                  h-[52px]
                  px-[34px]
                  text-[16px]
                `
              : `
                  h-[56px]
                  px-[40px]
                  text-[18px]
                `
            }
          `}
        >
          Browse Files
        </button>
      </div>

      <p
        className={`
          text-center
          text-[#707070]

          ${
            mobile
              ? `
                mt-[18px]
                text-[16px]
                leading-[160%]
              `
              : `
                mt-[18px]
                text-[18px]
              `
          }
        `}
      >
        Upload images of your preferred
        document/image
      </p>
    </>
  );
}