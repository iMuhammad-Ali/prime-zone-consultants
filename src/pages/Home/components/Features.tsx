"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

interface FeatureItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface FeaturesProps {
  features?: FeatureItem[];
}

const defaultFeatures: FeatureItem[] = [
  {
    id: 1,
    title: "Personalized Course & University Selection",
    image:
      "https://media.istockphoto.com/id/1343761746/photo/man-hand-touching-data-word-with-icon-business-virtual-screen-concept.jpg?s=612x612&w=0&k=20&c=egtmt1bwoJ321HUqd7aKsMhKffGw9nJR0KoH92iBhkQ=",
    description:
      "We assess your profile and career goals to recommend the best courses and universities worldwide, ensuring the perfect academic match for your ambitions.",
  },
  {
    id: 2,
    title: "Comprehensive Application Assistance",
    image:
      "https://media.istockphoto.com/id/1348546519/photo/businessman-hand-is-on-the-trackpad-typing-on-a-laptop-keyboard-while-reading-a-business.jpg?s=612x612&w=0&k=20&c=u3o54duWjetXw_vmxgyy8zDoP2wtQs3mmhfZ47DlzvY=",
    description:
      "From crafting compelling SOPs to perfecting your CV and preparing you for interviews, our experts guide you through every step to maximize your admission chances.",
  },
  {
    id: 3,
    title: "Visa Preparation & Interview Coaching",
    image:
      "https://media.istockphoto.com/id/2178062973/photo/a-small-model-airplane-on-top-of-a-passport-and-next-to-a-small-globe.jpg?s=612x612&w=0&k=20&c=mAjkX1lx73qVwNDUPZtZUT95sxz2DjyMzgMgq47LSIw=",
    description:
      "Benefit from our proven visa success strategies, including document review, mock interviews, and personalized coaching to ensure a smooth visa process.",
  },
  {
    id: 4,
    title: "Global University Network",
    image:
      "https://media.istockphoto.com/id/453477535/photo/knowledge-of-the-world.jpg?s=612x612&w=0&k=20&c=IBWBTeWnoQ3rGk3nInNPVcF-Mk8dFAlmL6ajE1Y9X-g=",
    description:
      "Access partnerships with top universities across multiple countries, gaining insights into diverse education systems and post-study opportunities.",
  },
  {
    id: 5,
    title: "Dedicated Student Support",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    description:
      "Our support continues even after admission, with guidance on accommodation, cultural adjustment, and career planning to ensure your success abroad.",
  },
];

const Features = ({ features = defaultFeatures }: FeaturesProps) => {
  const [activeTabId, setActiveTabId] = useState<number | null>(1);
  const [activeImage, setActiveImage] = useState(features[0].image);

  return (
    <section className="dark bg-background text-foreground py-[6vw] sm:py-[4vw] lg:py-[3vw]">
      <div className="mx-auto">
        <div className="mb-[5vw] sm:mb-[4vw] lg:mb-[3vw] flex w-full items-start justify-between gap-[5vw] sm:gap-[4vw] lg:gap-[3vw]">
          <div className="w-full md:w-1/2">
            <Accordion type="single" className="w-full" defaultValue="item-1">
              {features.map((tab) => (
                <AccordionItem key={tab.id} value={`item-${tab.id}`}>
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage(tab.image);
                      setActiveTabId(tab.id);
                    }}
                    className="cursor-pointer py-[3vw] sm:py-[2vw] lg:py-[1.25vw] 2xl:py-[1.75vw] !no-underline transition"
                  >
                    <h6
                      className={`text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[2vw] 2xl:text-[1.8vw] font-semibold ${
                        tab.id === activeTabId
                          ? "text-foreground"
                          : "text-foreground/80"
                      }`}
                    >
                      {tab.title}
                    </h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-[2vw] sm:mt-[1.5vw] md:text-[1.5vw] lg:mt-[0.25vw] text-muted text-[3.5vw] sm:text-[2.5vw] lg:text-[1.5vw] 2xl:text-[1.2vw] 2xl:py-[1vw]">
                      {tab.description}
                    </p>
                    <div className="mt-[3vw] sm:mt-[2vw] lg:mt-[1vw] md:hidden">
                      <img
                        src={tab.image}
                        alt={tab.title}
                        className="h-full max-h-[60vw] sm:max-h-[50vw] w-full rounded-md object-cover"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="relative m-auto hidden w-1/2 overflow-hidden rounded-[1vw] bg-muted md:block">
            <img
              src={activeImage}
              alt="Feature preview"
              className="h-auto w-full rounded-[1vw] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Features };
