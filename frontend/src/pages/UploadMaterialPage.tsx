
import BottomNavbar from "../components/mobile/BottomNavbar";

import UploadMaterialHeader from "../components/upload-material/UploadMaterialHeader";
import UploadMaterialStepper from "../components/upload-material/UploadMaterialStepper";
import UploadDropzone from "../components/upload-material/UploadDropzone";
import DueDateInput from "../components/upload-material/DueDateInput";
import QuestionTypeList from "../components/upload-material/QuestionTypeList";
import AdditionalInfoBox from "../components/upload-material/AdditionalInfoBox";
import UploadMaterialActions from "../components/upload-material/UploadMaterialActions";

export default function UploadMaterialPage() {
  return (
    <>
      {/* DESKTOP */}
      <div
        className="
          hidden
          lg:flex

          flex-col

          w-full
          h-full

          overflow-y-auto

          px-[28px]
          pt-[24px]
          pb-[40px]
        "
      >
        <UploadMaterialHeader />

        <UploadMaterialStepper />

        <div
          className="
            mt-[28px]

            w-full
            max-w-[1120px]

            mx-auto

            rounded-[32px]

            bg-[#FFFFFF]

            p-[40px]

            shadow-[0px_4px_40px_rgba(0,0,0,0.04)]
          "
        >
          <div className="flex flex-col gap-[32px]">
            {/* TITLE */}
            <div>
              <h2
                className="
                  text-[38px]
                  leading-[46px]
                  font-[700]
                  tracking-[-0.04em]

                  text-[#1F1F1F]
                "
              >
                Assignment Details
              </h2>

              <p
                className="
                  mt-[8px]

                  text-[20px]
                  leading-[28px]

                  text-[#7B7B7B]
                "
              >
                Basic information about your assignment
              </p>
            </div>

            <UploadDropzone />

            <DueDateInput />

            <QuestionTypeList />

            <AdditionalInfoBox />
          </div>
        </div>

        <UploadMaterialActions />
      </div>

      {/* MOBILE */}
      <div
        className="
          lg:hidden

          min-h-screen
          w-full

          bg-[#F3F3F3]

          overflow-x-hidden

          pb-[230px]
        "
      >
        <div
          className="
            w-full

            px-[16px]
            pt-[16px]
          "
        >
          {/* MOBILE HEADER */}
          <UploadMaterialHeader mobile />

          {/* STEPPER */}
          <UploadMaterialStepper mobile />

          {/* CARD */}
          <div
            className="
              mt-[22px]

              w-full

              rounded-[32px]

              bg-[#FFFFFF]

              px-[20px]
              py-[24px]

              shadow-[0px_4px_24px_rgba(0,0,0,0.04)]
            "
          >
            <div className="flex flex-col gap-[24px]">
              {/* TITLE */}
              <div>
                <h2
                  className="
                    text-[24px]
                    leading-[32px]
                    font-[700]

                    tracking-[-0.03em]

                    text-[#1F1F1F]
                  "
                >
                  Assignment Details
                </h2>

                <p
                  className="
                    mt-[8px]

                    text-[14px]
                    leading-[22px]

                    font-[400]

                    text-[#7B7B7B]
                  "
                >
                  Basic information about your assignment
                </p>
              </div>

              <UploadDropzone mobile />

              <DueDateInput mobile />

              <QuestionTypeList mobile />

              <AdditionalInfoBox mobile />
            </div>
          </div>
        </div>

        {/* ACTIONS */}
        <UploadMaterialActions mobile />

        {/* NAVBAR */}
        <BottomNavbar hideFab />
      </div>
    </>
  );
}