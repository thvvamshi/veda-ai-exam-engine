// import { MoreVertical, Eye, Trash2, Sparkles } from "lucide-react";

// import { useEffect, useRef, useState } from "react";

// import { motion, AnimatePresence } from "framer-motion";

// import { useNavigate } from "react-router-dom";

// import { Assignment } from "../../types/assignment.types";

// type Props = {
//   assignment: Assignment;

//   onDelete?: (id: string) => void;

//   onGenerate?: (id: string) => void;
// };

// export default function AssignmentCard({
//   assignment,

//   onDelete,

//   onGenerate,
// }: Props) {
//   const navigate = useNavigate();

//   const [menuOpen, setMenuOpen] = useState(false);

//   const menuRef = useRef<HTMLDivElement>(null);

//   // ================= OUTSIDE CLICK =================

//   useEffect(() => {
//     const handleOutside = (event: MouseEvent) => {
//       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//         setMenuOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleOutside);
//     };
//   }, []);

//   // ================= STATUS =================

//   const getStatusStyles = () => {
//     switch (assignment.status) {
//       case "completed":
//         return "bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]";

//       case "processing":
//         return "bg-[#FFF7E8] text-[#B54708] border border-[#FCD34D]";

//       case "failed":
//         return "bg-[#FFECEC] text-[#D92D20] border border-[#FDA29B]";

//       default:
//         return "bg-[#F4F4F4] text-[#444444] border border-[#E4E4E7]";
//     }
//   };

//   // ================= DATE =================

//   const formatDate = (date: string) => {
//     return new Date(date).toLocaleDateString("en-GB");
//   };

//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         y: 24,
//       }}
//       animate={{
//         opacity: 1,
//         y: 0,
//       }}
//       whileHover={{
//         y: -4,
//       }}
//       transition={{
//         duration: 0.25,
//       }}
//       className="
//         relative

//         w-full

//         overflow-visible

//         rounded-[36px]

//         border
//         border-[#ECECEC]

//         bg-white

//         p-[34px]

//         shadow-[0px_10px_40px_rgba(0,0,0,0.06)]

//         transition-all
//         duration-300
//       "
//     >
//       {/* ================= MENU ================= */}

//       <div
//         ref={menuRef}
//         className="
//           absolute
//           right-[26px]
//           top-[26px]

//           z-50
//         "
//       >
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="
//             flex
//             items-center
//             justify-center

//             w-[46px]
//             h-[46px]

//             rounded-full

//             transition-all
//             duration-200

//             hover:bg-[#F5F5F5]
//           "
//         >
//           <MoreVertical size={24} className="text-[#71717A]" />
//         </button>

//         {/* ================= DROPDOWN ================= */}

//         <AnimatePresence>
//           {menuOpen && (
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 scale: 0.94,
//                 y: -10,
//               }}
//               animate={{
//                 opacity: 1,
//                 scale: 1,
//                 y: 0,
//               }}
//               exit={{
//                 opacity: 0,
//                 scale: 0.94,
//                 y: -10,
//               }}
//               transition={{
//                 duration: 0.18,
//               }}
//               className="
//                 absolute
//                 right-0
//                 top-[58px]

//                 w-[270px]

//                 rounded-[30px]

//                 border
//                 border-white/40

//                 bg-white/96

//                 p-[14px]

//                 backdrop-blur-xl

//                 shadow-[0px_30px_90px_rgba(0,0,0,0.18)]
//               "
//             >
//               <div className="flex flex-col gap-[10px]">
//                 {/* VIEW */}

//                 <button
//                   onClick={() => navigate(`/ai-toolkit/${assignment.id}`)}
//                   className="
//                     flex
//                     items-center
//                     gap-[14px]

//                     rounded-[20px]

//                     px-[18px]
//                     py-[16px]

//                     transition-all
//                     duration-200

//                     hover:bg-[#F5F5F5]
//                   "
//                 >
//                   <Eye size={20} />

//                   <span
//                     className="
//                       text-[20px]
//                       font-[600]

//                       text-[#1F1F1F]
//                     "
//                   >
//                     View Assignment
//                   </span>
//                 </button>

//                 {/* GENERATE */}

//                 {assignment.status !== "completed" && (
//                   <button
//                     onClick={() => onGenerate?.(assignment.id)}
//                     className="
//                       flex
//                       items-center
//                       gap-[14px]

//                       rounded-[20px]

//                       px-[18px]
//                       py-[16px]

//                       transition-all
//                       duration-200

//                       hover:bg-[#EEF2FF]
//                     "
//                   >
//                     <Sparkles size={20} className="text-[#4F46E5]" />

//                     <span
//                       className="
//                         text-[20px]
//                         font-[600]

//                         text-[#4F46E5]
//                       "
//                     >
//                       Generate Paper
//                     </span>
//                   </button>
//                 )}

//                 {/* DELETE */}

//                 <button
//                   onClick={() => onDelete?.(assignment.id)}
//                   className="
//                     flex
//                     items-center
//                     gap-[14px]

//                     rounded-[20px]

//                     px-[18px]
//                     py-[16px]

//                     transition-all
//                     duration-200

//                     hover:bg-[#FEF2F2]
//                   "
//                 >
//                   <Trash2 size={20} className="text-[#DC2626]" />

//                   <span
//                     className="
//                       text-[20px]
//                       font-[600]

//                       text-[#DC2626]
//                     "
//                   >
//                     Delete
//                   </span>
//                 </button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* ================= TITLE ================= */}

//       <div>
//         <h2
//           className="
//             max-w-[78%]

//             text-[42px]
//             leading-[48px]

//             font-[800]

//             tracking-[-0.05em]

//             text-[#1F1F1F]
//           "
//         >
//           {assignment.title}
//         </h2>

//         {/* SUBJECT */}

//         <p
//           className="
//             mt-[14px]

//             text-[18px]
//             font-[500]

//             text-[#71717A]
//           "
//         >
//           {assignment.subject}
//         </p>
//       </div>

//       {/* ================= QUESTION TYPES ================= */}

//       <div
//         className="
//           mt-[30px]

//           flex
//           flex-wrap

//           gap-[12px]
//         "
//       >
//         {assignment.questionTypes?.map((item, index) => (
//           <div
//             key={index}
//             className="
//                 rounded-full

//                 bg-[#F4F4F5]

//                 px-[16px]
//                 py-[10px]

//                 text-[14px]
//                 font-[600]

//                 text-[#444444]
//               "
//           >
//             {item.type} • {item.count} Q
//           </div>
//         ))}
//       </div>

//       {/* ================= FOOTER ================= */}

//       <div
//         className="
//           mt-[42px]

//           flex
//           items-center
//           justify-between
//         "
//       >
//         <div>
//           <p
//             className="
//               text-[18px]
//               font-[800]

//               text-[#1F1F1F]
//             "
//           >
//             Assigned on:
//             <span
//               className="
//                 ml-[6px]

//                 font-[500]

//                 text-[#71717A]
//               "
//             >
//               {formatDate(assignment.createdAt)}
//             </span>
//           </p>
//         </div>

//         <div>
//           <p
//             className="
//               text-[18px]
//               font-[800]

//               text-[#1F1F1F]
//             "
//           >
//             Due:
//             <span
//               className="
//                 ml-[6px]

//                 font-[500]

//                 text-[#71717A]
//               "
//             >
//               {formatDate(assignment.dueDate)}
//             </span>
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }


import {
  MoreVertical,
  Eye,
  Trash2,
} from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  useNavigate,
} from "react-router-dom";

import { Assignment } from "../../types/assignment.types";

type Props = {
  assignment: Assignment;

  onDelete?: (
    id: string,
  ) => void;
};

export default function AssignmentCard({
  assignment,

  onDelete,
}: Props) {
  const navigate =
    useNavigate();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const menuRef =
    useRef<HTMLDivElement>(null);

  // ================= SAFE ID =================

  const assignmentId =
    assignment?.id ||
    assignment?._id;

  // ================= OUTSIDE CLICK =================

  useEffect(() => {
    const handleOutside =
      (
        event: MouseEvent,
      ) => {
        if (
          menuRef.current &&
          !menuRef.current.contains(
            event.target as Node,
          )
        ) {
          setMenuOpen(false);
        }
      };

    document.addEventListener(
      "mousedown",
      handleOutside,
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutside,
      );
    };
  }, []);

  // ================= FORMAT DATE =================

  const formatDate = (
    date: string,
  ) => {
    if (!date) return "";

    return new Date(
      date,
    ).toLocaleDateString(
      "en-GB",
    );
  };

  // ================= OPEN =================

  const handleOpenAssignment =
    () => {
      if (!assignmentId)
        return;

      navigate(
        `/ai-toolkit/${assignmentId}`,
      );
    };

  // ================= DELETE =================

  const handleDelete =
    () => {
      if (!assignmentId)
        return;

      const confirmed =
        window.confirm(
          "Are you sure you want to delete this assignment?",
        );

      if (confirmed) {
        onDelete?.(
          assignmentId,
        );
      }
    };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        relative

        w-full

        rounded-[36px]

        border
        border-[#ECECEC]

        bg-[#F7F7F7]

        px-[48px]
        pt-[44px]
        pb-[40px]

        shadow-[0px_10px_40px_rgba(0,0,0,0.04)]

        overflow-visible
      "
    >
      {/* ================= TOP ROW ================= */}

      <div
        className="
          flex
          items-start
          justify-between

          gap-[24px]
        "
      >
        {/* ================= LEFT ================= */}

        <div
          className="
            flex-1
            min-w-0
          "
        >
          {/* TITLE */}

          <button
            onClick={
              handleOpenAssignment
            }
            className="
              block
              w-full

              text-left
            "
          >
            <h2
              className="
                max-w-[542px]

                text-[27px]
                leading-[68px]

                font-[800]

                tracking-[-0.05em]

                text-[#2B2B2B]

                break-words
              "
            >
              {assignment.title}
            </h2>
          </button>

          {/* SUBJECT */}

          <p
            className="
              mt-[10px]

              text-[17px]
              font-[500]

              text-[#7A7A7A]
            "
          >
            {assignment.subject}
          </p>
        </div>

        {/* ================= MENU ================= */}

        <div
          ref={menuRef}
          className="
            relative

            shrink-0
          "
        >
          <button
            onClick={(
              e,
            ) => {
              e.stopPropagation();

              setMenuOpen(
                !menuOpen,
              );
            }}
            className="
              flex
              items-center
              justify-center

              w-[42px]
              h-[42px]

              rounded-full

              transition-all
              duration-200

              hover:bg-[#ECECEC]
            "
          >
            <MoreVertical
              size={20}
              className="text-[#A1A1A1]"
            />
          </button>

          {/* ================= DROPDOWN ================= */}

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.94,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.94,
                  y: -10,
                }}
                transition={{
                  duration: 0.18,
                }}
                className="
                  absolute
                  right-0
                  top-[62px]

                  z-50

                  w-[280px]

                  rounded-[32px]

                  bg-white

                  p-[16px]

                  shadow-[0px_30px_80px_rgba(0,0,0,0.18)]
                "
              >
                <div className="flex flex-col gap-[10px]">
                  {/* VIEW */}

                  <button
                    onClick={(
                      e,
                    ) => {
                      e.stopPropagation();

                      setMenuOpen(
                        false,
                      );

                      handleOpenAssignment();
                    }}
                    className="
                      flex
                      items-center
                      gap-[14px]

                      rounded-[22px]

                      px-[18px]
                      py-[18px]

                      transition-all
                      duration-200

                      hover:bg-[#F5F5F5]
                    "
                  >
                    <Eye
                      size={22}
                    />

                    <span
                      className="
                        text-[20px]
                        font-[600]

                        text-[#2B2B2B]
                      "
                    >
                      View Assignment
                    </span>
                  </button>

                  {/* DELETE */}

                  <button
                    onClick={(
                      e,
                    ) => {
                      e.stopPropagation();

                      setMenuOpen(
                        false,
                      );

                      handleDelete();
                    }}
                    className="
                      flex
                      items-center
                      gap-[14px]

                      rounded-[22px]

                      bg-[#F7F4F4]

                      px-[18px]
                      py-[18px]

                      transition-all
                      duration-200

                      hover:bg-[#FDECEC]
                    "
                  >
                    <Trash2
                      size={22}
                      className="text-[#D32F2F]"
                    />

                    <span
                      className="
                        text-[20px]
                        font-[600]

                        text-[#D32F2F]
                      "
                    >
                      Delete
                    </span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ================= QUESTION TYPES ================= */}

      <div
        className="
          mt-[18px]

          flex
          flex-wrap

          gap-[12px]
        "
      >
        {(assignment.questionTypes ||
          []
        ).map(
          (
            item,
            index,
          ) => (
            <div
              key={index}
              className="
                rounded-full

                bg-white

                px-[7px]
                py-[7px]

                text-[15px]
                font-[600]

                text-[#4A4A4A]

                border
                border-[#E7E7E7]
              "
            >
              {item.type} •{" "}
              {item.count} Q
            </div>
          ),
        )}
      </div>

      {/* ================= FOOTER ================= */}

      <div
        className="
          mt-[25px]

          flex
          items-center
          justify-between
        "
      >
        {/* ASSIGNED */}

        <div>
          <p
            className="
              text-[18px]
              font-[800]
              text-[#2B2B2B]
            "
          >
            Assigned on:
            <span
              className="
                ml-[6px]

                font-[500]

                text-[#7A7A7A]
              "
            >
              {formatDate(
                assignment.createdAt,
              )}
            </span>
          </p>
        </div>

        {/* DUE */}

        <div>
          <p
            className="
              text-[18px]
              font-[800]

              text-[#2B2B2B]
            "
          >
            Due:
            <span
              className="
                ml-[6px]

                font-[500]

                text-[#7A7A7A]
              "
            >
              {formatDate(
                assignment.dueDate,
              )}
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}