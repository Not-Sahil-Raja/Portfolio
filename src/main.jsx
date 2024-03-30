import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./Landing Page/LandingPage.jsx";
import AboutMe from "./About me/AboutMe.jsx";
import Layout from "./Layout.jsx";
import SmoothScrolling from "./SmoothScrolling.jsx";
import { Try } from "./Try.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "/try", element: <Try /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SmoothScrolling>
      <RouterProvider router={router} />
    </SmoothScrolling>
  </React.StrictMode>
);
