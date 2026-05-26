import { useState } from "react";

import { useNavigate } from "react-router-dom";

import BottomNavbar from "../components/mobile/BottomNavbar";

import UploadMaterialHeader from "../components/upload-material/UploadMaterialHeader";

import UploadMaterialStepper from "../components/upload-material/UploadMaterialStepper";

import UploadDropzone from "../components/upload-material/UploadDropzone";

import DueDateInput from "../components/upload-material/DueDateInput";

import QuestionTypeList from "../components/upload-material/QuestionTypeList";

import AdditionalInfoBox from "../components/upload-material/AdditionalInfoBox";

import UploadMaterialActions from "../components/upload-material/UploadMaterialActions";

import { useCreateAssignment } from "../hooks/useCreateAssignment";

export default function UploadMaterialPage() {
  const navigate = useNavigate();

  const { createAssignment } = useCreateAssignment();

  /* ================= STEP ================= */

  const [step, setStep] = useState(1);

  /* ================= STEP 1 ================= */

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const [instructions, setInstructions] = useState("");

  const [questionTypes, setQuestionTypes] = useState([
    {
      type: "Multiple Choice Questions",

      count: 4,

      marks: 1,
    },

    {
      type: "Short Questions",

      count: 3,

      marks: 2,
    },
  ]);

  /* ================= STEP 2 ================= */

  const [title, setTitle] = useState("");

  const [subject, setSubject] = useState("");

  const [className, setClassName] = useState("");

  const [dueDate, setDueDate] = useState("");

  /* ================= SETTINGS ================= */

  const [schoolName] = useState(
    localStorage.getItem("schoolName") || "Delhi Public School",
  );

  const [teacherName] = useState(
    localStorage.getItem("teacherName") || "John Doe",
  );

  /* ================= LOADING ================= */

  const [loading, setLoading] = useState(false);

  /* ================= NEXT ================= */

  const handleNext = () => {
    if (!uploadedFile) {
      alert("Please upload study material");

      return;
    }

    setStep(2);
  };

  /* ================= PREVIOUS ================= */

  const handlePrevious = () => {
    if (step === 1) {
      navigate(-1);

      return;
    }

    setStep(1);
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async () => {
    try {
      if (!title || !subject || !className || !dueDate) {
        alert("Please fill all assignment details");

        return;
      }

      setLoading(true);

      const formData = new FormData();

      formData.append("title", title);

      formData.append("subject", subject);

      formData.append("className", className);

      formData.append("schoolName", schoolName);

      formData.append("teacherName", teacherName);

      formData.append("dueDate", dueDate);

      formData.append("instructions", instructions);

      formData.append("additionalInstructions", instructions);

      formData.append("questionTypes", JSON.stringify(questionTypes));

      if (uploadedFile) {
        formData.append("file", uploadedFile);
      }

      await createAssignment(formData);

      navigate("/assignment");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
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

          overflow-y-auto

          px-[28px]
          pt-[24px]
          pb-[40px]
        "
      >
        <UploadMaterialHeader />

        <UploadMaterialStepper step={step} />

        <div
          className="
            mt-[28px]

            w-full
            max-w-[1120px]

            mx-auto

            rounded-[32px]

            bg-white

            p-[40px]

            shadow-[0px_4px_40px_rgba(0,0,0,0.04)]
          "
        >
          <div className="flex flex-col gap-[32px]">
            {/* HEADER */}

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
                {step === 1 ? "Upload Material" : "Assignment Details"}
              </h2>

              <p
                className="
                  mt-[8px]

                  text-[20px]
                  leading-[28px]

                  text-[#7B7B7B]
                "
              >
                {step === 1
                  ? "Upload material for AI generation"
                  : "Basic information about your assignment"}
              </p>
            </div>

            {/* ================= STEP 1 ================= */}

            {step === 1 && (
              <>
                <UploadDropzone
                  uploadedFile={uploadedFile}
                  setUploadedFile={setUploadedFile}
                />

                <QuestionTypeList
                  questionTypes={questionTypes}
                  setQuestionTypes={setQuestionTypes}
                />

                <AdditionalInfoBox
                  value={instructions}
                  onChange={setInstructions}
                />
              </>
            )}

            {/* ================= STEP 2 ================= */}

            {step === 2 && (
              <div className="grid grid-cols-2 gap-[20px]">
                <input
                  type="text"
                  placeholder="Assignment Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="
                    h-[60px]

                    rounded-[18px]

                    border
                    border-[#E5E5E5]

                    px-[20px]

                    text-[16px]
                  "
                />

                <input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="
                    h-[60px]

                    rounded-[18px]

                    border
                    border-[#E5E5E5]

                    px-[20px]

                    text-[16px]
                  "
                />

                <input
                  type="text"
                  placeholder="Class Name"
                  value={className}
                  onChange={(e) => setClassName(e.target.value)}
                  className="
                    h-[60px]

                    rounded-[18px]

                    border
                    border-[#E5E5E5]

                    px-[20px]

                    text-[16px]
                  "
                />

                <DueDateInput value={dueDate} onChange={setDueDate} />

                <div
                  className="
                    col-span-2

                    rounded-[24px]

                    bg-[#F8F8F8]

                    p-[24px]
                  "
                >
                  <h3
                    className="
                      text-[18px]
                      font-[700]
                    "
                  >
                    School Information
                  </h3>

                  <div className="mt-[16px] flex items-center gap-[14px]">
                    <div
                      className="
                        w-[56px]
                        h-[56px]

                        rounded-full

                        bg-[#ECECEC]

                        flex
                        items-center
                        justify-center

                        text-[28px]
                      "
                    >
                      🏫
                    </div>

                    <div>
                      <p
                        className="
                          text-[17px]
                          font-[700]
                        "
                      >
                        {schoolName}
                      </p>

                      <p
                        className="
                          text-[14px]

                          text-[#777777]
                        "
                      >
                        Teacher: {teacherName}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ACTIONS */}

        <UploadMaterialActions
          step={step}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onSubmit={handleSubmit}
          loading={loading}
        />
      </div>

      {/* ================= MOBILE ================= */}

      <div
        className="
          lg:hidden

          min-h-screen

          bg-[#F3F3F3]

          pb-[240px]
        "
      >
        <div
          className="
            px-[16px]
            pt-[20px]
          "
        >
          <UploadMaterialHeader mobile />

          <UploadMaterialStepper mobile step={step} />

          <div
            className="
              mt-[24px]

              rounded-[32px]

              bg-white

              px-[20px]
              py-[24px]
            "
          >
            <div className="flex flex-col gap-[24px]">
              {/* STEP 1 */}

              {step === 1 && (
                <>
                  <UploadDropzone
                    mobile
                    uploadedFile={uploadedFile}
                    setUploadedFile={setUploadedFile}
                  />

                  <QuestionTypeList
                    mobile
                    questionTypes={questionTypes}
                    setQuestionTypes={setQuestionTypes}
                  />

                  <AdditionalInfoBox
                    mobile
                    value={instructions}
                    onChange={setInstructions}
                  />
                </>
              )}

              {/* STEP 2 */}

              {step === 2 && (
                <>
                  <input
                    type="text"
                    placeholder="Assignment Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="
                      h-[52px]

                      rounded-[16px]

                      border

                      px-[16px]
                    "
                  />

                  <input
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="
                      h-[52px]

                      rounded-[16px]

                      border

                      px-[16px]
                    "
                  />

                  <input
                    type="text"
                    placeholder="Class Name"
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                    className="
                      h-[52px]

                      rounded-[16px]

                      border

                      px-[16px]
                    "
                  />

                  <DueDateInput mobile value={dueDate} onChange={setDueDate} />
                </>
              )}
            </div>
          </div>
        </div>

        <UploadMaterialActions
          mobile
          step={step}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onSubmit={handleSubmit}
          loading={loading}
        />

        <BottomNavbar />
      </div>
    </>
  );
}
