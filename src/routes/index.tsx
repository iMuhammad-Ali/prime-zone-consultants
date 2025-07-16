import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "~/layouts/MainLayout";
import Home from "~/pages/Home";
import Team from "~/pages/Team";
import AboutUs from "~/pages/AboutUs";
import Services from "~/pages/Services";
import SuccessStories from "~/pages/SuccessStories";
import ContactUs from "~/pages/ContactUs";
import PrivacyPolicy from "~/pages/PrivacyPolicy";
import TermsAndConditions from "~/pages/TermsAndConditions";
import Universities from "~/pages/Universities";
import UniversityDetailPage from "~/pages/Universities/DetailPage";
import Disclaimer from "~/pages/Home/components/Disclaimer";
import EligibilityCheck from "~/pages/EligibilityCheck";

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
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "universities",
        element: <Universities />,
      },
      {
        path: "universities/:id",
        element: <UniversityDetailPage />,
      },
      {
        path: "disclaimer",
        element: <Disclaimer />,
      },
      {
        path: "eligibility-check",
        element: <EligibilityCheck />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
