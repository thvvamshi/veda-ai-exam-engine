import {
  Suspense,
} from "react";

import {
  RouterProvider,
} from "react-router-dom";

import router from "./routes";

import Loader from "./components/common/Loader";

import { useSocketEvents } from "./hooks/useSocketEvents";

import { useAssignmentPolling } from "./hooks/useAssignmentPolling";

export default function App() {
  useSocketEvents();

  // useAssignmentPolling();

  return (
    <Suspense
      fallback={<Loader />}
    >
      <RouterProvider
        router={router}
      />
    </Suspense>
  );
}