import { Navbar } from "~/pages/Home/components/Navbar";
import { Footer } from "~/pages/Home/components/Footer";
import { Outlet } from "react-router";
import { ConsultantModal } from "~/components/Modals/ConsultantModal";
import { Toaster } from "~/components/ui/toaster";
import ScrollToTop from "~/hooks/scroll-to-top";
import WhatsappPopover from "~/components/whatsapp-popover";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <div className="[&>section]:px-4 sm:[&>section]:px-8">
        <Navbar />
        <Outlet />
      </div>
      <Footer />

      <WhatsappPopover />
      <Toaster />
      <ConsultantModal />
    </>
  );
};

export default MainLayout;
