import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./routes";

import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* RouterProvider must wrap whatever renders your Navbar */}
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
