import {
  createBrowserRouter,
} from "react-router-dom";

import {
  lazy,
  Suspense,
} from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import Loader from "../components/common/Loader";

import NotFoundPage from "../pages/NotFoundPage";

const HomePage = lazy(
  () => import("../pages/HomePage")
);

const DashboardPage = lazy(
  () =>
    import(
      "../pages/DashboardPage"
    )
);

const UploadMaterialPage =
  lazy(
    () =>
      import(
        "../pages/UploadMaterialPage"
      )
  );

const AIToolkitPage = lazy(
  () =>
    import(
      "../pages/AIToolkitPage"
    )
);

const withSuspense = (
  component: React.ReactNode
) => (
  <Suspense
    fallback={<Loader />}
  >
    {component}
  </Suspense>
);

const router =
  createBrowserRouter([
    {
      path: "/",

      element:
        <DashboardLayout />,

      children: [
        {
          index: true,

          element:
            withSuspense(
              <HomePage />
            ),
        },

        {
          path:
            "assignment",

          element:
            withSuspense(
              <DashboardPage />
            ),
        },

        {
          path:
            "upload-material",

          element:
            withSuspense(
              <UploadMaterialPage />
            ),
        },

        // IMPORTANT
        // NOW TOOLKIT WORKS BOTH:
        // /ai-toolkit
        // /ai-toolkit/:id

        {
          path:
            "ai-toolkit",

          element:
            withSuspense(
              <AIToolkitPage />
            ),
        },

        {
          path:
            "ai-toolkit/:id",

          element:
            withSuspense(
              <AIToolkitPage />
            ),
        },
      ],
    },

    {
      path: "*",

      element:
        <NotFoundPage />,
    },
  ]);

export default router;