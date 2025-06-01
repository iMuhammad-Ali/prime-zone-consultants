import { useState } from "react";
import { X } from "lucide-react";
import Whatsapp from "~/assets/svgs/whatsapp.svg";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";

const WHATSAPP_NUMBER = "1234567890";
const CHANNEL_LINK = "https://chat.whatsapp.com/yourchannelinvite";

const WhatsappPopover = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="rounded-full w-[50px] h-[50px] p-3 bg-green-500 hover:bg-green-600 text-white shadow-lg">
            <img src={Whatsapp} className="w-full h-full" alt="WhatsApp" />
          </Button>
        </PopoverTrigger>
        <PopoverContent side="top" align="end" className="max-w-72 p-0">
          <div className="flex justify-between items-start border-b p-4">
            <div className="flex items-start gap-4">
              <img
                src={Whatsapp}
                className="w-[32px] h-[32px]"
                alt="WhatsApp"
              />
              <div>
                <h2 className="font-bold text-xl mb-3">Start Conversation</h2>
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
              className="w-6 h-6 text-muted-foreground absolute top-2 right-2"
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
