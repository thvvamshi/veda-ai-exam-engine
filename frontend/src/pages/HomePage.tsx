// src/pages/HomePage.tsx

import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div
      className="
        min-h-screen
        w-full

        bg-[#F3F3F3]

        px-[16px]
        py-[18px]

        lg:px-[28px]
        lg:py-[24px]
      "
    >
      {/* HERO */}
      <section
        className="
          w-full

          rounded-[40px]

          bg-[linear-gradient(135deg,#1F1F1F_0%,#101010_100%)]

          px-[24px]
          py-[32px]

          lg:px-[54px]
          lg:py-[60px]

          flex
          flex-col
          lg:flex-row

          items-center
          justify-between

          gap-[40px]

          overflow-hidden
        "
      >
        {/* LEFT */}
        <div className="max-w-[720px]">
          {/* LOGO */}
          <div className="flex items-center gap-[12px]">
            <div
              className="
                w-[48px]
                h-[48px]

                rounded-[16px]

                bg-[linear-gradient(135deg,#F5A623_0%,#E25454_50%,#7B1FA2_100%)]

                flex
                items-center
                justify-center

                text-white
                text-[22px]
                font-[800]
              "
            >
              V
            </div>

            <h1
              className="
                text-white

                text-[24px]
                lg:text-[28px]

                font-[800]

                tracking-[-0.04em]
              "
            >
              VedaAI
            </h1>
          </div>

          {/* TITLE */}
          <h2
            className="
              mt-[28px]

              text-white

              text-[38px]
              leading-[46px]

              lg:text-[72px]
              lg:leading-[82px]

              font-[800]

              tracking-[-0.06em]
            "
          >
            AI Assessment
            <br />
            Creator
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-[20px]

              max-w-[640px]

              text-[#C7C7C7]

              text-[16px]
              leading-[30px]

              lg:text-[20px]
              lg:leading-[38px]
            "
          >
            Create assignments, generate AI-powered
            question papers, export PDFs, and manage
            assessment workflows with a modern full
            stack architecture.
          </p>

          {/* BUTTONS */}
          <div
            className="
              mt-[34px]

              flex
              flex-col
              sm:flex-row

              gap-[16px]
            "
          >
            <Link
              to="/dashboard/assignment"
              className="
                h-[64px]

                rounded-full

                bg-white

                px-[32px]

                flex
                items-center
                justify-center
                gap-[12px]

                text-[#111111]
                text-[18px]
                font-[700]

                shadow-[0px_14px_40px_rgba(0,0,0,0.18)]
              "
            >
              ✨ Start Building
            </Link>

            <Link
              to="/dashboard/ai-toolkit"
              className="
                h-[64px]

                rounded-full

                border
                border-[#434343]

                px-[32px]

                flex
                items-center
                justify-center

                text-white
                text-[18px]
                font-[600]
              "
            >
              View AI Toolkit
            </Link>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div
          className="
            w-full
            max-w-[430px]

            rounded-[36px]

            bg-white

            p-[22px]

            shadow-[0px_20px_80px_rgba(0,0,0,0.24)]
          "
        >
          <div
            className="
              rounded-[28px]

              bg-[#F6F6F6]

              p-[22px]
            "
          >
            <div className="flex items-center justify-between">
              <h3
                className="
                  text-[22px]
                  font-[700]

                  tracking-[-0.03em]

                  text-[#1F1F1F]
                "
              >
                AI Generated Paper
              </h3>

              <span className="text-[24px]">
                ⚡
              </span>
            </div>

            <div className="mt-[24px] flex flex-col gap-[14px]">
              {[
                "Section A - MCQs",
                "Section B - Short Answers",
                "Difficulty Tags",
                "Marks Distribution",
                "PDF Export Ready",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    h-[58px]

                    rounded-[18px]

                    bg-white

                    px-[18px]

                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    className="
                      text-[16px]
                      font-[600]

                      text-[#1F1F1F]
                    "
                  >
                    {item}
                  </span>

                  <span className="text-[20px]">
                    ✓
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-[28px]">
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4

            gap-[20px]
          "
        >
          {[
            {
              icon: "🧠",
              title: "AI Question Generation",
              desc: "Generate structured papers with sections, marks, and difficulty levels.",
            },

            {
              icon: "⚡",
              title: "Realtime Updates",
              desc: "Track assignment generation with WebSockets and live updates.",
            },

            {
              icon: "📄",
              title: "PDF Export",
              desc: "Export professional exam papers with proper formatting.",
            },

            {
              icon: "📦",
              title: "Scalable Backend",
              desc: "Built using Node.js, MongoDB, Redis, BullMQ, and AI.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="
                rounded-[32px]

                bg-white

                p-[28px]

                shadow-[0px_4px_24px_rgba(0,0,0,0.05)]
              "
            >
              <div
                className="
                  w-[68px]
                  h-[68px]

                  rounded-[22px]

                  bg-[#F5F5F5]

                  flex
                  items-center
                  justify-center

                  text-[30px]
                "
              >
                {feature.icon}
              </div>

              <h3
                className="
                  mt-[22px]

                  text-[24px]
                  leading-[34px]

                  font-[700]

                  tracking-[-0.03em]

                  text-[#1F1F1F]
                "
              >
                {feature.title}
              </h3>

              <p
                className="
                  mt-[14px]

                  text-[16px]
                  leading-[30px]

                  text-[#707070]
                "
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="
          mt-[40px]

          text-center

          text-[15px]

          text-[#707070]
        "
      >
        AI Assessment Creator • Full Stack Engineering
        Assignment
      </footer>
    </div>
  );
}