import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { LoaderCircle } from "lucide-react";
import { contactUs } from "~/types/contactUs";
import { useState, useEffect } from "react";
import sendContactUs from "~/pages/ContactUs/sendContactUs";

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  //Initial form data state
  const [formData, setFormData] = useState<contactUs>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  //Handle form data change
  const onDataChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };
  //Check if form data is valid
  const isValidData = Object.values(formData).every(
    (value) => value.trim() !== ""
  );
  //Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    sendContactUs(formData)
      .then(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .finally(() => setIsLoading(false));
  };
  const [embedUrl, setEmbedUrl] = useState("");

  useEffect(() => {
    const screenWidth = window.innerWidth;
    let zoomLevel = 13; // default zoom

    if (screenWidth >= 7680) {
      zoomLevel = 17; // 8K Ultra HD screens - maximum zoom
    } else if (screenWidth >= 3840) {
      zoomLevel = 16; // 4K screens - very high zoom
    } else if (screenWidth >= 1920) {
      zoomLevel = 15; // Full HD - high zoom
    } else if (screenWidth >= 1024) {
      zoomLevel = 14; // laptop / tablets - medium zoom
    } else {
      zoomLevel = 12; // mobile - lower zoom
    }

    // Replace with your actual Google Maps embed URL (base only)
    const baseUrl =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13605.397862316062!2d74.276096430235!3d31.51456043043866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190373c869fd8b%3A0x8310cef337939eae!2sMCB%20Bank%20-%20Moon%20Market!5e0!3m2!1sen!2s!4v1754129907225!5m2!1sen!2s";

    setEmbedUrl(`${baseUrl}&z=${zoomLevel}`);
  }, []);
  return (
    <section className="py-[20vw] md:py-[10vw] sm:py-[8vw] lg:py-[8vw] xl:py-[8vw] 2xl:py-[10vw]">
      <div className="flex flex-col justify-between gap-[6vw] sm:gap-[4vw] lg:gap-[3vw] xl:gap-[2.5vw] 2xl:gap-[2vw] lg:flex-row px-[4vw] sm:px-[3vw] lg:px-[2vw] xl:px-[8vw] 2xl:px-[12vw]">
        <div className="mx-auto flex max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-[50vw] flex-col justify-between gap-[6vw] sm:gap-[4vw] lg:gap-[3vw] xl:gap-[2.5vw] 2xl:gap-[2vw]">
          <div className="text-center sm:text-left">
            <h2 className="mb-[2vw] sm:mb-[1.5vw] lg:mb-[0.5vw] xl:mb-[0.4vw] 2xl:mb-[0.3vw] text-[7vw] sm:text-[5vw] lg:text-[4vw] xl:text-[3vw] 2xl:text-[2.5vw] font-semibold">
              Contact Us
            </h2>
            <p className="text-muted-foreground text-[3.5vw] sm:text-[2.5vw] lg:text-sm xl:text-md 2xl:text-[1vw]">
              We are available for questions, feedback, or collaboration
              opportunities. Let us know how we can help!
            </p>
          </div>

          <div className="mx-auto w-fit lg:mx-0">
            <h3 className="mb-[4vw] sm:mb-[3vw] lg:mb-[1.5vw] xl:mb-[1.2vw] 2xl:mb-[1vw] text-center text-[5vw] sm:text-[3vw] lg:text-[2vw] xl:text-[2vw] 2xl:text-[1.5vw] font-semibold lg:text-left">
              Contact Details
            </h3>
            <ul className="ml-[3vw] sm:ml-[2vw] lg:ml-[1vw] xl:ml-[0.8vw] 2xl:ml-[0.6vw] list-disc text-[3.5vw] sm:text-[2.5vw] lg:text-sm xl:text-md 2xl:text-[1vw] space-y-[1vw] sm:space-y-[0.5vw] lg:space-y-[0.3vw] xl:space-y-[0.25vw] 2xl:space-y-[0.2vw]">
              <li>
                <span className="font-bold">Phone: </span>
                +923294433957
              </li>
              <li>
                <span className="font-bold">Email: </span>
                <a
                  href="mailto:primezoneconsultantsofficial@gmail.com"
                  className="underline"
                >
                  primezoneconsultantsofficial@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="mx-auto flex w-full sm:w-auto max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl flex-col gap-[4vw] sm:gap-[3vw] lg:gap-[1.5vw] xl:gap-[1.2vw] 2xl:gap-[1vw] rounded-lg border px-[4vw] sm:px-[3vw] lg:px-[2.5vw] xl:px-[2vw] 2xl:px-[1.5vw] py-[6vw] sm:py-[4vw] lg:py-[2.5vw] xl:py-[2vw] 2xl:py-[1.5vw]">
            <div className="w-full flex flex-col sm:flex-row gap-[3vw] sm:gap-[2vw] lg:gap-[1vw] xl:gap-[0.8vw] 2xl:gap-[0.6vw]">
              <div className="grid w-full items-center gap-[2vw] sm:gap-[1.5vw] lg:gap-[0.5vw] xl:gap-[0.4vw] 2xl:gap-[0.3vw]">
                <Label
                  htmlFor="firstname"
                  className="text-[3.5vw] sm:text-[2.5vw] lg:text-[1.2vw] xl:text-[1vw] 2xl:text-[1vw]"
                >
                  First Name
                </Label>
                <Input
                  type="text"
                  id="firstname"
                  required
                  value={formData.firstName}
                  onChange={(e) => onDataChange("firstName", e.target.value)}
                  placeholder="First Name"
                  className="h-[10vw] sm:h-[6vw] lg:h-[3vw] xl:h-[2.5vw] 2xl:h-[2vw] text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.8vw]"
                />
              </div>
              <div className="grid w-full items-center gap-[2vw] sm:gap-[1.5vw] lg:gap-[0.5vw] xl:gap-[0.4vw] 2xl:gap-[0.3vw]">
                <Label
                  htmlFor="lastname"
                  className="text-[3.5vw] sm:text-[2.5vw] lg:text-[1.2vw] xl:text-[1vw] 2xl:text-[1vw]"
                >
                  Last Name
                </Label>
                <Input
                  type="text"
                  id="lastname"
                  required
                  value={formData.lastName}
                  onChange={(e) => onDataChange("lastName", e.target.value)}
                  placeholder="Last Name"
                  className="h-[10vw] sm:h-[6vw] lg:h-[3vw] xl:h-[2.5vw] 2xl:h-[2vw] text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.8vw]"
                />
              </div>
            </div>
            <div className="grid w-full items-center gap-[2vw] sm:gap-[1.5vw] lg:gap-[0.5vw] xl:gap-[0.4vw] 2xl:gap-[0.3vw]">
              <Label
                htmlFor="email"
                className="text-[3.5vw] sm:text-[2.5vw] lg:text-[1.2vw] xl:text-[1vw] 2xl:text-[1vw]"
              >
                Email
              </Label>
              <Input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => onDataChange("email", e.target.value)}
                placeholder="Email"
                className="h-[10vw] sm:h-[6vw] lg:h-[3vw] xl:h-[2.5vw] 2xl:h-[2vw] text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.8vw]"
              />
            </div>
            <div className="grid w-full items-center gap-[2vw] sm:gap-[1.5vw] lg:gap-[0.5vw] xl:gap-[0.4vw] 2xl:gap-[0.3vw]">
              <Label
                htmlFor="subject"
                className="text-[3.5vw] sm:text-[2.5vw] lg:text-[1.2vw] xl:text-[1vw] 2xl:text-[1vw]"
              >
                Subject
              </Label>
              <Input
                type="text"
                id="subject"
                required
                value={formData.subject}
                onChange={(e) => onDataChange("subject", e.target.value)}
                placeholder="Subject"
                className="h-[10vw] sm:h-[6vw] lg:h-[3vw] xl:h-[2.5vw] 2xl:h-[2vw] text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.8vw]"
              />
            </div>
            <div className="grid w-full gap-[2vw] sm:gap-[1.5vw] lg:gap-[0.5vw] xl:gap-[0.4vw] 2xl:gap-[0.3vw]">
              <Label
                htmlFor="message"
                className="text-[3.5vw] sm:text-[2.5vw] lg:text-[1.2vw] xl:text-[1vw] 2xl:text-[1vw]"
              >
                Message
              </Label>
              <Textarea
                placeholder="Type your message here."
                id="message"
                required
                value={formData.message}
                onChange={(e) => onDataChange("message", e.target.value)}
                className="min-h-[20vw] sm:min-h-[15vw] lg:min-h-[8vw] xl:min-h-[6vw] 2xl:min-h-[5vw] text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.8vw]"
              />
            </div>
            <Button
              disabled={!isValidData || isLoading}
              type="submit"
              className="w-full"
            >
              {isLoading && (
                <LoaderCircle className="animate-spin mr-[2vw] sm:mr-[1vw] lg:mr-[0.5vw] w-[4vw] sm:w-[2vw] lg:w-[1vw] h-[4vw] sm:h-[2vw] lg:h-[1vw]" />
              )}
              Send Message
            </Button>
          </Card>
        </form>
      </div>
      <div className="h-[30vh] sm:h-[50vh] mt-[8vw] sm:mt-[6vw] lg:mt-[5vw] xl:mt-[3vw] 2xl:mt-[4vw] px-[4vw] sm:px-[3vw] lg:px-[2vw] xl:px-[8vw] 2xl:px-[12vw]">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg 2xl:rounded-[0.4vw] "
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
