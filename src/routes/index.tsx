import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "~/layouts/MainLayout";
import Home from "~/pages/Home";
import Team from "~/pages/Team";
import AboutUs from "~/pages/AboutUs";
import Services from "~/pages/Services";
// import SuccessStories from "~/pages/SuccessStories";
import ContactUs from "~/pages/ContactUs";
import PrivacyPolicy from "~/pages/PrivacyPolicy";
import TermsAndConditions from "~/pages/TermsAndConditions";

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
      // {
      //   path: "success-stories",
      //   element: <SuccessStories />,
      // },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
