import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./routes";
import Analytics from "@/components/Analytics";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Analytics />
    <RouterProvider router={router} />
  </React.StrictMode>
);