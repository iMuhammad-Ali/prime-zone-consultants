import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

const ContactUs = () => {
  return (
    <section className="py-[10vw] sm:py-[8vw] lg:py-[6vw] xl:py-[4vw] 2xl:py-[7vw]">
      <div className="flex flex-col justify-between gap-[6vw] sm:gap-[4vw] lg:gap-[3vw] xl:gap-[2.5vw] 2xl:gap-[2vw] lg:flex-row px-[4vw] sm:px-[3vw] lg:px-[2vw] xl:px-[8vw] 2xl:px-[12vw]">
        <div className="mx-auto flex max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl flex-col justify-between gap-[6vw] sm:gap-[4vw] lg:gap-[3vw] xl:gap-[2.5vw] 2xl:gap-[2vw]">
          <div className="text-center lg:text-left">
            <h2 className="mb-[2vw] sm:mb-[1.5vw] lg:mb-[0.5vw] xl:mb-[0.4vw] 2xl:mb-[0.3vw] text-[7vw] sm:text-[5vw] lg:text-[3vw] xl:text-[2.5vw] 2xl:text-[2vw] font-semibold">
              Contact Us
            </h2>
            <p className="text-muted-foreground text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.8vw]">
              We are available for questions, feedback, or collaboration
              opportunities. Let us know how we can help!
            </p>
          </div>
          <div className="mx-auto w-fit lg:mx-0">
            <h3 className="mb-[4vw] sm:mb-[3vw] lg:mb-[1.5vw] xl:mb-[1.2vw] 2xl:mb-[1vw] text-center text-[5vw] sm:text-[3vw] lg:text-[1.5vw] xl:text-[1.3vw] 2xl:text-[1.1vw] font-semibold lg:text-left">
              Contact Details
            </h3>
            <ul className="ml-[3vw] sm:ml-[2vw] lg:ml-[1vw] xl:ml-[0.8vw] 2xl:ml-[0.6vw] list-disc text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.8vw] space-y-[1vw] sm:space-y-[0.5vw] lg:space-y-[0.3vw] xl:space-y-[0.25vw] 2xl:space-y-[0.2vw]">
              <li>
                <span className="font-bold">Phone: </span>
                (123) 34567890
              </li>
              <li>
                <span className="font-bold">Email: </span>
                <a href="" className="underline">
                  your-email@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Card className="mx-auto flex w-full sm:w-auto max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl flex-col gap-[4vw] sm:gap-[3vw] lg:gap-[1.5vw] xl:gap-[1.2vw] 2xl:gap-[1vw] rounded-lg border px-[4vw] sm:px-[3vw] lg:px-[2.5vw] xl:px-[2vw] 2xl:px-[1.5vw] py-[6vw] sm:py-[4vw] lg:py-[2.5vw] xl:py-[2vw] 2xl:py-[1.5vw]">
          <div className="w-full flex flex-col sm:flex-row gap-[3vw] sm:gap-[2vw] lg:gap-[1vw] xl:gap-[0.8vw] 2xl:gap-[0.6vw]">
            <div className="grid w-full items-center gap-[2vw] sm:gap-[1.5vw] lg:gap-[0.5vw] xl:gap-[0.4vw] 2xl:gap-[0.3vw]">
              <Label
                htmlFor="firstname"
                className="text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.8vw]"
              >
                First Name
              </Label>
              <Input
                type="text"
                id="firstname"
                placeholder="First Name"
                className="h-[10vw] sm:h-[6vw] lg:h-[3vw] xl:h-[2.5vw] 2xl:h-[2vw] text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.8vw]"
              />
            </div>
            <div className="grid w-full items-center gap-[2vw] sm:gap-[1.5vw] lg:gap-[0.5vw] xl:gap-[0.4vw] 2xl:gap-[0.3vw]">
              <Label
                htmlFor="lastname"
                className="text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.8vw]"
              >
                Last Name
              </Label>
              <Input
                type="text"
                id="lastname"
                placeholder="Last Name"
                className="h-[10vw] sm:h-[6vw] lg:h-[3vw] xl:h-[2.5vw] 2xl:h-[2vw] text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.8vw]"
              />
            </div>
          </div>
          <div className="grid w-full items-center gap-[2vw] sm:gap-[1.5vw] lg:gap-[0.5vw] xl:gap-[0.4vw] 2xl:gap-[0.3vw]">
            <Label
              htmlFor="email"
              className="text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.8vw]"
            >
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              className="h-[10vw] sm:h-[6vw] lg:h-[3vw] xl:h-[2.5vw] 2xl:h-[2vw] text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.8vw]"
            />
          </div>
          <div className="grid w-full items-center gap-[2vw] sm:gap-[1.5vw] lg:gap-[0.5vw] xl:gap-[0.4vw] 2xl:gap-[0.3vw]">
            <Label
              htmlFor="subject"
              className="text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.8vw]"
            >
              Subject
            </Label>
            <Input
              type="text"
              id="subject"
              placeholder="Subject"
              className="h-[10vw] sm:h-[6vw] lg:h-[3vw] xl:h-[2.5vw] 2xl:h-[2vw] text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.8vw]"
            />
          </div>
          <div className="grid w-full gap-[2vw] sm:gap-[1.5vw] lg:gap-[0.5vw] xl:gap-[0.4vw] 2xl:gap-[0.3vw]">
            <Label
              htmlFor="message"
              className="text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.8vw]"
            >
              Message
            </Label>
            <Textarea
              placeholder="Type your message here."
              id="message"
              className="min-h-[20vw] sm:min-h-[15vw] lg:min-h-[8vw] xl:min-h-[6vw] 2xl:min-h-[5vw] text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.8vw]"
            />
          </div>
          <Button className="w-full">Send Message</Button>
        </Card>
      </div>
    </section>
  );
};

export default ContactUs;
