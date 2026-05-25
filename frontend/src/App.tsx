// src/App.tsx

import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import DashboardPage from "./pages/DashboardPage";
import UploadMaterialPage from "./pages/UploadMaterialPage";

function NotFoundPage() {
  return (
    <div
      className="
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        gap-[20px]

        bg-[#F5F5F5]
      "
    >
      <h1
        className="
          text-[72px]
          font-black
          text-[#1A1A1A]
        "
      >
        404
      </h1>

      <p
        className="
          text-[24px]
          text-[#707070]
        "
      >
        Page not found
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route
          path="/"
          element={
            <Navigate
              to="/assignment"
              replace
            />
          }
        />

        <Route
          path="/assignment"
          element={<DashboardPage />}
        />

        <Route
          path="/upload-material"
          element={<UploadMaterialPage />}
        />
      </Route>

      {/* NOT FOUND */}
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  );
} 