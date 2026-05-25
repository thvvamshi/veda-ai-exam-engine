// src/pages/UploadMaterialPage.tsx

import { useState } from "react";

import BottomNavbar from "../components/mobile/BottomNavbar";

import UploadMaterialHeader from "../components/upload-material/UploadMaterialHeader";
import UploadMaterialStepper from "../components/upload-material/UploadMaterialStepper";
import UploadDropzone from "../components/upload-material/UploadDropzone";
import DueDateInput from "../components/upload-material/DueDateInput";
import QuestionTypeList from "../components/upload-material/QuestionTypeList";
import AdditionalInfoBox from "../components/upload-material/AdditionalInfoBox";
import UploadMaterialActions from "../components/upload-material/UploadMaterialActions";

export default function UploadMaterialPage() {
  /* ---------------- STATE ---------------- */

  const [
    uploadedFile,
    setUploadedFile,
  ] = useState<File | null>(
    null
  );

  const [dueDate, setDueDate] =
    useState("");

  const [
    instructions,
    setInstructions,
  ] = useState("");

  const [
    questionTypes,
    setQuestionTypes,
  ] = useState([
    {
      type: "MCQ",
      count: 5,
      marks: 1,
    },
  ]);

  const [loading] =
    useState(false);

  /* ---------------- SUBMIT ---------------- */

  const handleSubmit = () => {
    console.log({
      uploadedFile,
      dueDate,
      instructions,
      questionTypes,
    });
  };

  return (
    <>
      {/* ================= DESKTOP ================= */}

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
                Basic information
                about your assignment
              </p>
            </div>

            {/* DROPZONE */}

            <UploadDropzone
              uploadedFile={
                uploadedFile
              }
              setUploadedFile={
                setUploadedFile
              }
            />

            {/* DUE DATE */}

            <DueDateInput
              value={dueDate}
              onChange={
                setDueDate
              }
            />

            {/* QUESTIONS */}

            <QuestionTypeList
              questionTypes={
                questionTypes
              }
              setQuestionTypes={
                setQuestionTypes
              }
            />

            {/* INFO */}

            <AdditionalInfoBox
              value={instructions}
              onChange={
                setInstructions
              }
            />
          </div>
        </div>

        {/* ACTIONS */}

        <UploadMaterialActions
          onSubmit={
            handleSubmit
          }
          loading={loading}
        />
      </div>

      {/* ================= MOBILE ================= */}

      <div
        className="
          lg:hidden

          min-h-screen
          w-full

          bg-[#F3F3F3]

          overflow-x-hidden

          pb-[240px]
        "
      >
        <div
          className="
            w-full

            px-[16px]
            pt-[20px]
          "
        >
          {/* HEADER */}

          <UploadMaterialHeader mobile />

          {/* STEPPER */}

          <UploadMaterialStepper mobile />

          {/* CARD */}

          <div
            className="
              mt-[24px]

              w-full

              rounded-[32px]

              bg-[#FFFFFF]

              px-[20px]
              py-[24px]
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

                    text-[#7B7B7B]
                  "
                >
                  Basic information
                  about your assignment
                </p>
              </div>

              {/* DROPZONE */}

              <UploadDropzone
                mobile
                uploadedFile={
                  uploadedFile
                }
                setUploadedFile={
                  setUploadedFile
                }
              />

              {/* DUE DATE */}

              <DueDateInput
                mobile
                value={dueDate}
                onChange={
                  setDueDate
                }
              />

              {/* QUESTIONS */}

              <QuestionTypeList
                mobile
                questionTypes={
                  questionTypes
                }
                setQuestionTypes={
                  setQuestionTypes
                }
              />

              {/* INFO */}

              <AdditionalInfoBox
                mobile
                value={instructions}
                onChange={
                  setInstructions
                }
              />
            </div>
          </div>
        </div>

        {/* ACTIONS */}

        <UploadMaterialActions
          mobile
          onSubmit={
            handleSubmit
          }
          loading={loading}
        />

        {/* BOTTOM NAV */}

        <BottomNavbar />
      </div>
    </>
  );
}