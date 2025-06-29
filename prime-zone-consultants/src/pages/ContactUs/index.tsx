import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

const ContactUs = () => {
  return (
    <section className="py-32">
      <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
        <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
          <div className="text-center lg:text-left">
            <h2 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
              Contact Us
            </h2>
            <p className="text-muted-foreground">
              We are available for questions, feedback, or collaboration
              opportunities. Let us know how we can help!
            </p>
          </div>
          <div className="mx-auto w-fit lg:mx-0">
            <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
              Contact Details
            </h3>
            <ul className="ml-4 list-disc">
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
        <Card className="mx-auto flex w-full sm:w-auto max-w-screen-md flex-col gap-6 rounded-lg border px-5 sm:px-10 py-10">
          <div className="w-full flex flex-col sm:flex-row gap-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="firstname">First Name</Label>
              <Input type="text" id="firstname" placeholder="First Name" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="lastname">Last Name</Label>
              <Input type="text" id="lastname" placeholder="Last Name" />
            </div>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="subject">Subject</Label>
            <Input type="text" id="subject" placeholder="Subject" />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea placeholder="Type your message here." id="message" />
          </div>
          <Button className="w-full">Send Message</Button>
        </Card>
      </div>
    </section>
  );
};

export default ContactUs;
