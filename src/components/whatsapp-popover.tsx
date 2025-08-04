import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Whatsapp from "~/assets/svgs/whatsapp.svg";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";

const WHATSAPP_NUMBER = "+923294433957";
const CHANNEL_LINK = "https://whatsapp.com/channel/0029Vau5JntKgsO2hAprOf33";

const WhatsappPopover = () => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleLinkClick = () => {
    setOpen(false);
  };

  useEffect(() => {
    const footer = document.getElementById("privacy-policy");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting); // Hide when footer is visible
      },
      {
        root: null,
        threshold: 0.1, // adjust if needed
      }
    );

    observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 2xl:right-[1vw] 2xl:bottom-[1vw] z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="rounded-full lg:w-[5vw] lg:h-[5vw] xl:w-[5vw] xl:h-[5vw] 2xl:rounded-full 2xl:w-[4.5vw] 2xl:h-[4.5vw] w-12 h-12 p-2 sm:w-[7vw] sm:h-[7vw] sm:p-[1.2vw] md:w-[7vw] md:h-[7vw]  sm:rounded-full lg:p-[1vw] bg-green-500 hover:bg-green-600 text-white shadow-lg">
            <img src={Whatsapp} className="w-full h-full" alt="WhatsApp" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side="top"
          align="end"
          className="max-w-72 2xl:max-w-[20vw] p-0 2xl:p-[0.5vw]"
        >
          <div className="flex justify-between items-start border-b p-4">
            <div className="flex items-start gap-3 2xl:gap-[1vw]">
              <img
                src={Whatsapp}
                className="w-8 h-8 sm:w-[2.2vw] sm:h-[2.2vw]"
                alt="WhatsApp"
              />
              <div>
                <h2 className="font-bold text-xl lg:text-lg mb-3">
                  Start Conversation
                </h2>
                <p className="text-muted-foreground text-sm">
                  Feel free to ask any question, our team would love to help
                  you!
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              className="w-6 h-6 xl:w-[2vw] xl:h-[2vw] text-muted-foreground absolute top-2 right-2"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          <div className="p-4 flex flex-col gap-3">
            <a
              href={CHANNEL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              <Button
                variant="outline"
                className="w-full bg-white text-background"
              >
                Follow Channel
              </Button>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
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
  );
};

export default WhatsappPopover;
