// src/pages/HomePage.tsx

import {
  Link,
} from "react-router-dom";

export default function HomePage() {
  return (
    <div
      className="
        w-full
        min-h-full

        p-[24px]

        flex
        flex-col

        gap-[24px]
      "
    >
      {/* HERO SECTION */}
      <section
        className="
          relative

          overflow-hidden

          rounded-[40px]

          bg-[linear-gradient(135deg,#111111_0%,#1E1E1E_50%,#2B2B2B_100%)]

          px-[40px]
          py-[48px]

          min-h-[320px]

          flex
          flex-col
          justify-between
        "
      >
        {/* GLOW */}
        <div
          className="
            absolute

            top-[-80px]
            right-[-80px]

            w-[240px]
            h-[240px]

            rounded-full

            bg-[#FFFFFF10]

            blur-[40px]
          "
        />

        {/* CONTENT */}
        <div className="relative z-10">
          <div
            className="
              inline-flex

              items-center
              gap-[10px]

              rounded-full

              bg-[#FFFFFF12]

              px-[18px]
              py-[10px]

              backdrop-blur-md
            "
          >
            <div
              className="
                w-[10px]
                h-[10px]

                rounded-full

                bg-[#56D25F]
              "
            />

            <span
              className="
                text-[14px]
                font-[600]

                text-white
              "
            >
              AI Powered Assessment Platform
            </span>
          </div>

          <h1
            className="
              mt-[28px]

              max-w-[760px]

              text-[58px]
              leading-[66px]

              font-[800]

              tracking-[-0.06em]

              text-white
            "
          >
            Create Intelligent Question Papers
            in Minutes with VedaAI
          </h1>

          <p
            className="
              mt-[24px]

              max-w-[720px]

              text-[20px]
              leading-[36px]

              text-[#D0D0D0]
            "
          >
            Generate structured AI-powered
            assessments, automate question paper
            creation, manage assignments, and
            deliver better learning experiences
            for your students.
          </p>
        </div>

        {/* ACTIONS */}
        <div
          className="
            relative
            z-10

            mt-[40px]

            flex
            flex-wrap

            items-center

            gap-[18px]
          "
        >
          <Link
            to="/upload-material"
            className="
              h-[62px]

              rounded-full

              bg-white

              px-[34px]

              flex
              items-center
              justify-center

              text-[18px]
              font-[700]

              text-[#111111]

              transition-all
              duration-200

              hover:scale-[1.03]
            "
          >
            Create Assignment
          </Link>

          <Link
            to="/assignment"
            className="
              h-[62px]

              rounded-full

              border
              border-[#FFFFFF22]

              bg-[#FFFFFF10]

              px-[34px]

              flex
              items-center
              justify-center

              text-[18px]
              font-[600]

              text-white

              backdrop-blur-md

              transition-all
              duration-200

              hover:bg-[#FFFFFF18]
            "
          >
            View Assignments
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section
        className="
          grid

          grid-cols-1
          md:grid-cols-3

          gap-[20px]
        "
      >
        {[
          {
            title:
              "Assignments Generated",
            value: "1,240+",
          },

          {
            title:
              "AI Questions Created",
            value: "25K+",
          },

          {
            title:
              "Schools Using VedaAI",
            value: "150+",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="
              rounded-[32px]

              bg-white

              p-[28px]

              shadow-[0px_4px_30px_rgba(0,0,0,0.04)]
            "
          >
            <p
              className="
                text-[15px]

                text-[#707070]
              "
            >
              {item.title}
            </p>

            <h2
              className="
                mt-[12px]

                text-[42px]
                leading-none

                font-[800]

                tracking-[-0.05em]

                text-[#111111]
              "
            >
              {item.value}
            </h2>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section
        className="
          rounded-[40px]

          bg-white

          p-[36px]
        "
      >
        <div
          className="
            flex
            items-center
            justify-between

            flex-wrap

            gap-[20px]
          "
        >
          <div>
            <h2
              className="
                text-[38px]
                leading-[48px]

                font-[800]

                tracking-[-0.05em]

                text-[#111111]
              "
            >
              Everything Needed for Smart
              Assessments
            </h2>

            <p
              className="
                mt-[12px]

                max-w-[720px]

                text-[18px]
                leading-[32px]

                text-[#707070]
              "
            >
              Built with scalable real-time
              architecture using AI generation,
              WebSockets, background jobs, and
              modern frontend systems.
            </p>
          </div>
        </div>

        <div
          className="
            mt-[40px]

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
              title:
                "AI Question Generation",
              desc:
                "Generate structured assessments with difficulty levels and marks distribution.",
            },

            {
              icon: "⚡",
              title:
                "Real-Time Updates",
              desc:
                "Track assignment generation live using WebSockets and event-driven architecture.",
            },

            {
              icon: "📄",
              title:
                "PDF Export",
              desc:
                "Download beautifully formatted question papers instantly.",
            },

            {
              icon: "☁️",
              title:
                "Scalable System Design",
              desc:
                "Powered by Redis, BullMQ, MongoDB, and production-grade APIs.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="
                rounded-[28px]

                bg-[#F7F7F7]

                p-[24px]

                transition-all
                duration-200

                hover:translate-y-[-4px]
              "
            >
              <div className="text-[42px]">
                {feature.icon}
              </div>

              <h3
                className="
                  mt-[18px]

                  text-[22px]
                  leading-[30px]

                  font-[700]

                  text-[#111111]
                "
              >
                {feature.title}
              </h3>

              <p
                className="
                  mt-[12px]

                  text-[16px]
                  leading-[28px]

                  text-[#707070]
                "
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}