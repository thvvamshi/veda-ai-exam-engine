// src/pages/AIToolkitPage.tsx

import BottomNavbar from "../components/mobile/BottomNavbar";

import AIToolkitBanner from "../components/ai-toolkit/AIToolkitBanner";
import PaperPreview from "../components/ai-toolkit/PaperPreview";

export default function AIToolkitPage() {
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
          <AIToolkitBanner />

          <PaperPreview />
        </div>
      </div>

      {/* MOBILE */}
      <div
        className="
          lg:hidden

          min-h-screen
          w-full

          bg-[#F3F3F3]

          overflow-x-hidden

          px-[10px]
          pt-[10px]
          pb-[120px]
        "
      >
        <div
          className="
            w-full
            max-w-[373px]

            mx-auto

            flex
            flex-col
            gap-[10px]
          "
        >
          <AIToolkitBanner mobile />

          <PaperPreview mobile />
        </div>

        <BottomNavbar />
      </div>
    </>
  );
}