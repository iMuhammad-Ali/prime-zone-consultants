import { Navbar } from "~/pages/Home/components/Navbar";
import { Footer } from "~/pages/Home/components/Footer";
import { Outlet } from "react-router";
import { Button } from "~/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import Whatsapp from "~/assets/svgs/whatsapp.svg";
import { ConsultantModal } from "~/components/Modals/ConsultantModal";

const MainLayout = () => {
  return (
    <>
      <div className="[&>section]:px-4 sm:[&>section]:px-8">
        <Navbar />
        <Outlet />
      </div>
      <Footer />

      <div className="fixed bottom-4 right-4 z-50">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="rounded-full w-[50px] h-[50px] p-3 bg-green-500 hover:bg-green-600 text-white shadow-lg">
              <img src={Whatsapp} className="w-full h-full" />
            </Button>
          </PopoverTrigger>
          <PopoverContent side="top" align="end" className="max-w-72 p-0">
            <div className="flex items-start gap-4 border-b p-4">
              <img src={Whatsapp} className="w-[32px] h-[32px]" />
              <div>
                <h2 className="font-bold text-xl mb-3">Start Conversation</h2>
                <p className="text-muted-foreground text-sm">
                  Feel free to ask any question, our team would love to help
                  you!
                </p>
              </div>
            </div>
            <div className="p-4 flex flex-col gap-3">
              <a
                href="https://chat.whatsapp.com/yourchannelinvite"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="w-full bg-white text-background"
                >
                  Follow Channel
                </Button>
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="w-full bg-white text-background"
                >
                  Chat for Query
                </Button>
              </a>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <ConsultantModal />
    </>
  );
};

export default MainLayout;
