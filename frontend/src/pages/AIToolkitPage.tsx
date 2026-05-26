import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import BottomNavbar from "../components/mobile/BottomNavbar";

import Loader from "../components/common/Loader";

import ErrorState from "../components/common/ErrorState";

import AIToolkitBanner from "../components/ai-toolkit/AIToolkitBanner";

import PaperPreview from "../components/ai-toolkit/PaperPreview";

import { getGeneratedPaperAPI } from "../api/generatedPaper.api";

import { getAssignmentByIdAPI } from "../api/assignment.api";

export default function AIToolkitPage() {
  const { id } = useParams();

  const [paperData, setPaperData] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    const fetchData =
      async () => {
        try {
          setLoading(true);

          // ================= GENERATED PAPER =================

          const paperResponse =
            await getGeneratedPaperAPI(
              id as string,
            );

          console.log(
            "PAPER RESPONSE:",
            paperResponse,
          );

          const generatedPaper =
            paperResponse.data;

          // ================= ASSIGNMENT =================

          const assignmentResponse =
            await getAssignmentByIdAPI(
              generatedPaper.assignmentId,
            );

          console.log(
            "ASSIGNMENT RESPONSE:",
            assignmentResponse,
          );

          const assignment =
            assignmentResponse.data;

          // ================= TOTAL MARKS =================

          const totalMarks =
            generatedPaper.sections?.reduce(
              (
                total: number,
                section: any,
              ) =>
                total +
                section.questions.reduce(
                  (
                    sum: number,
                    question: any,
                  ) =>
                    sum +
                    (question.marks ||
                      0),
                  0,
                ),
              0,
            ) || 0;

          // ================= MERGED DATA =================

          const mergedData = {
            ...generatedPaper,

            subject:
              assignment.subject,

            className:
              assignment.className,

            schoolName:
              assignment.schoolName,

            teacherName:
              assignment.teacherName,

            maxMarks:
              totalMarks,
          };

          console.log(
            "FINAL MERGED DATA:",
            mergedData,
          );

          setPaperData(
            mergedData,
          );
        } catch (error: any) {
          console.error(error);

          setError(
            error.message ||
              "Failed to load paper",
          );
        } finally {
          setLoading(false);
        }
      };

    if (id) {
      fetchData();
    }
  }, [id]);

  // ================= LOADING =================

  if (loading) {
    return <Loader />;
  }

  // ================= ERROR =================

  if (error || !paperData) {
    return (
      <div className="p-[24px]">
        <ErrorState
          message={
            error ||
            "Generated paper not found"
          }
        />
      </div>
    );
  }

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
        <div
          className="
            w-full
            max-w-[1120px]

            mx-auto

            flex
            flex-col
            gap-[20px]
          "
        >
          <AIToolkitBanner
            generatedPaper={
              paperData
            }
          />

          <PaperPreview
            assignment={
              paperData
            }
          />
        </div>
      </div>

      {/* ================= MOBILE ================= */}

      <div
        className="
          lg:hidden

          p-[16px]
          pb-[120px]
        "
      >
        <AIToolkitBanner
          mobile
          generatedPaper={
            paperData
          }
        />

        <div className="mt-[16px]">
          <PaperPreview
            mobile
            assignment={
              paperData
            }
          />
        </div>

        <BottomNavbar />
      </div>
    </>
  );
}