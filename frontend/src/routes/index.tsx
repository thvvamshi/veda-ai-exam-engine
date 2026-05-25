import {
  createBrowserRouter,
} from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import UploadMaterialPage from "../pages/UploadMaterialPage";
import AIToolkitPage from "../pages/AIToolkitPage";
import NotFoundPage from "../pages/NotFoundPage";

function PlaceholderPage({
  title,
}: {
  title: string;
}) {
  return (
    <div
      className="
        w-full
        h-full
        min-h-screen

        flex
        items-center
        justify-center

        text-[36px]
        font-[700]

        text-[#1F1F1F]
      "
    >
      {title}
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "assignment",
        element: <DashboardPage />,
      },

      {
        path: "upload-material",
        element: <UploadMaterialPage />,
      },

      {
        path: "ai-toolkit",
        element: <AIToolkitPage />,
      },

      {
        path: "groups",
        element: (
          <PlaceholderPage title="My Groups" />
        ),
      },

      {
        path: "library",
        element: (
          <PlaceholderPage title="My Library" />
        ),
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;