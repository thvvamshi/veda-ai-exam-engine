import React from "react";

import ReactDOM from "react-dom/client";

import { Toaster } from "react-hot-toast";

import App from "./App";

import ErrorBoundary from "./components/common/ErrorBoundary";

import "./styles/globals.css";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <ErrorBoundary>
      <>
        <Toaster position="top-right" />

        <App />
      </>
    </ErrorBoundary>
  </React.StrictMode>
);