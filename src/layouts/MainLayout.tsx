import { Navbar } from "~/pages/Home/components/Navbar";
import { Footer } from "~/pages/Home/components/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      {/* <div className="px-4 sm:px-8 overflow-hidden"> */}
      <div className="overflow-hidden">
        <div className="[&>section]:px-4 sm:[&>section]:px-8">
          <Navbar />
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
