// src/routes.jsx
import * as React from "react";
import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import Home from "./App.jsx"; // Home page that contains all your sections (#work, #services, etc.)

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/", // the main page
  component: Home,
});

const routeTree = rootRoute.addChildren([indexRoute]);

export const router = createRouter({ routeTree });
