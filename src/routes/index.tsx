import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/MainLayout";
import NotFound from "~/pages/404";
import AboutUs from "~/pages/AboutUs";
import ContactUs from "~/pages/ContactUs";
import Home from "~/pages/Home";
import Services from "~/pages/Services";
import SuccessStories from "~/pages/SuccessStories";
import Team from "~/pages/Team";

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
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "success-stories",
        element: <SuccessStories />,
      },
      {
        path: "services",
        element: <Services />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
