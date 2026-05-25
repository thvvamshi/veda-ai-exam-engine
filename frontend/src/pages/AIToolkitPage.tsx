import BottomNavbar from "../components/mobile/BottomNavbar";

export default function AIToolkitPage() {
  return (
    <>
      {/* DESKTOP */}
      <div
        className="
          hidden
          lg:flex

          p-[24px]
        "
      >
        <div
          className="
            w-full

            rounded-[32px]

            bg-white

            p-[32px]
          "
        >
          <h1
            className="
              text-[32px]
              font-[800]
            "
          >
            AI Toolkit
          </h1>

          <p className="mt-[12px]">
            Question paper preview
            will appear here.
          </p>
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
        <div
          className="
            rounded-[24px]

            bg-white

            p-[24px]
          "
        >
          <h1
            className="
              text-[24px]
              font-[800]
            "
          >
            AI Toolkit
          </h1>

          <p className="mt-[10px]">
            Mobile preview page
          </p>
        </div>

        <BottomNavbar />
      </div>
    </>
  );
}