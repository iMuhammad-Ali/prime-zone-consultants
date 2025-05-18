// src/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/MainLayout";
import NotFound from "~/pages/404";
import ContactUs from "~/pages/ContactUs";
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
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
