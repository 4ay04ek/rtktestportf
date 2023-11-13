import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Welcome from "./components/Welcome";
import Main from "./components/Main";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Welcome />,
    },
    {
      path: "/main",
      element: <Main />,
    },
  ],
  { basename: new URL(document.baseURI).pathname }
);
