import {
  useEffect,
} from "react";

import {
  useParams,
} from "react-router-dom";

import BottomNavbar from "../components/mobile/BottomNavbar";

import Loader from "../components/common/Loader";

import ErrorState from "../components/common/ErrorState";

import AIToolkitBanner from "../components/ai-toolkit/AIToolkitBanner";

import PaperPreview from "../components/ai-toolkit/PaperPreview";

import {
  getAssignmentByIdAPI,
} from "../api/assignment.api";

import { useAssignmentStore } from "../store/assignment.store";

export default function AIToolkitPage() {
  const { id } =
    useParams();

  const selectedAssignment =
    useAssignmentStore(
      (state) =>
        state.selectedAssignment
    );

  const setSelectedAssignment =
    useAssignmentStore(
      (state) =>
        state.setSelectedAssignment
    );

  const loading =
    useAssignmentStore(
      (state) =>
        state.loading
    );

  const setLoading =
    useAssignmentStore(
      (state) =>
        state.setLoading
    );

  const error =
    useAssignmentStore(
      (state) =>
        state.error
    );

  const setError =
    useAssignmentStore(
      (state) =>
        state.setError
    );

  useEffect(() => {
    const fetchAssignment =
      async () => {
        // DEMO TOOLKIT PAGE
        if (!id) {
          setSelectedAssignment({
            _id: "demo-id",

            title:
              "Science Mid Term Assessment",

            dueDate:
              "2026-06-20",

            instructions:
              "Attempt all questions.",

            status:
              "completed",

            createdAt:
              new Date().toISOString(),

            questionTypes: [
              {
                type:
                  "Short Answer",

                count: 10,

                marks: 2,
              },

              {
                type:
                  "Long Answer",

                count: 5,

                marks: 5,
              },
            ],

            generatedPaper:
              {
                schoolName:
                  "Delhi Public School, Bokaro",

                subject:
                  "Science",

                className:
                  "Grade 8",

                timeAllowed: 90,

                maxMarks: 50,

                generatedMessage:
                  "AI generated assessment paper.",

                sections: [
                  {
                    title:
                      "Short Answer Questions",

                    instruction:
                      "Attempt all questions.",

                    questions:
                      [
                        {
                          _id: "1",

                          text:
                            "Define electroplating.",

                          difficulty:
                            "easy",

                          marks: 2,
                        },

                        {
                          _id: "2",

                          text:
                            "Explain electrolysis.",

                          difficulty:
                            "moderate",

                          marks: 2,
                        },
                      ],
                  },
                ],

                answerKeys:
                  [
                    {
                      questionId:
                        "1",

                      answer:
                        "Electroplating is the process of coating one metal over another using electricity.",
                    },

                    {
                      questionId:
                        "2",

                      answer:
                        "Electrolysis is decomposition using electric current.",
                    },
                  ],
              },
          });

          return;
        }

        try {
          setLoading(true);

          setError(null);

          const response =
            await getAssignmentByIdAPI(
              id
            );

          const assignment =
            response?.assignment;

          if (assignment) {
            setSelectedAssignment(
              assignment
            );
          }
        } catch (error: any) {
          console.error(error);

          setError(
            error.message ||
              "Failed to fetch assignment"
          );
        } finally {
          setLoading(false);
        }
      };

    fetchAssignment();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (
    error ||
    !selectedAssignment
  ) {
    return (
      <div className="p-[24px]">
        <ErrorState
          message={
            error ||
            "Assignment not found"
          }
        />
      </div>
    );
  }

  return (
    <>
      {/* DESKTOP */}
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
            assignment={
              selectedAssignment
            }
          />

          <PaperPreview
            assignment={
              selectedAssignment
            }
          />
        </div>
      </div>

      {/* MOBILE */}
      <div
        className="
          lg:hidden

          p-[16px]
          pb-[120px]
        "
      >
        <AIToolkitBanner
          mobile
          assignment={
            selectedAssignment
          }
        />

        <div className="mt-[16px]">
          <PaperPreview
            mobile
            assignment={
              selectedAssignment
            }
          />
        </div>

        <BottomNavbar />
      </div>
    </>
  );
}