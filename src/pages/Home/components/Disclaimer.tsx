import { ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";

const DisclaimerPage = () => (
  <div className="container mt-20 mb-20 mx-auto py-20 px-4 max-w-2xl flex flex-col items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl shadow-xl border border-blue-200">
    <div className="flex items-center gap-3 mb-6">
      <ShieldAlert className="text-blue-700 w-8 h-8" />
      <h1 className="text-4xl font-extrabold text-blue-900 tracking-tight">
        Disclaimer
      </h1>
    </div>
    <div className="mb-6 text-base text-blue-900/80 bg-blue-100 rounded-lg p-4 border border-blue-200 w-full">
      <strong>Images Notice:</strong> The images used on this website are not
      the original property of Prime Zone Consultants. They have been gathered
      from various online sources and are used for illustrative and
      informational purposes only. All copyrights and trademarks belong to their
      respective owners. If you are a copyright holder and believe your image
      has been used inappropriately, please contact us for prompt removal or
      credit.
    </div>
    <div className="mb-6 text-base text-blue-900/80 bg-blue-50 rounded-lg p-4 border border-blue-100 w-full">
      <strong>General Disclaimer:</strong> The information provided on this
      website is for general informational purposes only. While we strive to
      keep the information up to date and correct, we make no representations or
      warranties of any kind, express or implied, about the completeness,
      accuracy, reliability, suitability, or availability with respect to the
      website or the information, products, services, or related graphics
      contained on the website for any purpose.
    </div>
    <div className="text-xs text-blue-700/70 mt-4 w-full text-center">
      &copy; {new Date().getFullYear()} Prime Zone Consultants. All rights
      reserved. <br />
      <Link
        to="/"
        className="underline text-blue-700 hover:text-blue-900 transition"
      >
        Back to Home
      </Link>
    </div>
  </div>
);

export default DisclaimerPage;
