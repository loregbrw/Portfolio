import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { App } from "./App";
import { Analytics } from "@vercel/analytics/react"

import { LanguageProvider } from "./context/language";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
      <Analytics />
    </LanguageProvider>
  </React.StrictMode>
);
