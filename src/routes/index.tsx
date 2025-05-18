// src/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/MainLayout";
import NotFound from "~/pages/404";
import Home from "~/pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
