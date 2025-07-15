"use client";
import faqs from "../../../assets/images/faqs.png";
import {
  MessageCircle,
  Users,
  Shield,
  Zap,
  HeartHandshake,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

interface FaqsItem {
  id: number;
  question: string;
  answer: string;
  icon: React.ReactNode;
}

interface FaqsProps {
  heading?: string;
  items?: FaqsItem[];
}

const Faqs = ({
  heading = "Frequently asked questions",
  items = [
    {
      id: 1,
      question:
        "What makes Prime Zone Consultants (PZC) different from other agencies?",
      answer:
        "We offer personalized guidance with a 98% visa success rate, direct partnerships with top universities worldwide, and comprehensive support from application to settlement. Our dedicated counselors provide one-on-one attention throughout your entire journey.",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      id: 2,
      question: "How does your university selection process work?",
      answer:
        "We analyze your academic background, career goals, budget, and preferences to recommend the best-fit universities. Our AI-powered matching system considers over 50 factors to ensure you get into institutions that align with your aspirations and maximize your career prospects.",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      id: 3,
      question: "What kind of support do you provide during the visa process?",
      answer:
        "Our visa experts provide comprehensive support including document preparation, mock interviews, embassy appointment scheduling, and real-time updates. We've helped over 10,000 students secure visas with our proven strategies and insider knowledge.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      id: 4,
      question: "Do you offer scholarships and financial assistance guidance?",
      answer:
        "Yes! We help identify and apply for scholarships, grants, and financial aid opportunities. Our database includes over 500 scholarship programs, and our success rate in securing financial assistance is 85%. We also provide guidance on education loans and budget planning.",
      icon: <HeartHandshake className="w-5 h-5" />,
    },
    {
      id: 5,
      question: "What post-admission support do you provide?",
      answer:
        "Our support continues long after admission with pre-departure orientation, accommodation assistance, airport pickup coordination, career guidance, and alumni networking. We maintain a global community of 25,000+ students who support each other throughout their journey.",
      icon: <MessageCircle className="w-5 h-5" />,
    },
  ],
}: FaqsProps) => {
  return (
    <section className="flex text-foreground py-[6vw] sm:py-[4vw] lg:py-[3vw]">
      <div className="mx-auto w-full">
        <p className="py-5 2xl:py-[2vw] lg:w-1/2 text-4xl xl:text-5xl 2xl:text-[2.5vw]  font-semibold">
          {heading}
        </p>
        <div className="grid lg:grid-cols-2 mb-[5vw] sm:mb-[4vw] lg:mb-[3vw] w-full items-start justify-between gap-[5vw] sm:gap-[4vw] lg:gap-[3vw]">
          <div className="w-full">
            <Accordion
              type="single"
              className="w-full"
              defaultValue="item-1"
              collapsible
            >
              {items.map((tab) => (
                <AccordionItem key={tab.id} value={`item-${tab.id}`}>
                  <AccordionTrigger className="cursor-pointer py-[3vw] sm:py-[2vw] lg:py-[1.25vw] 2xl:py-[1.75vw] !no-underline transition">
                    <h6 className="items-start text-lg sm:text-lg 2xl:text-[1.5vw] font-normal">
                      {tab.question}
                    </h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-white mt-[2vw] sm:mt-[1.5vw] lg:mt-[0.25vw] text-muted text-md sm:text-md 2xl:text-sm 2xl:py-[1vw]">
                      {tab.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="lg:w-full lg:h-full hidden lg:flex md:items-center justify-center">
            <img src={faqs} alt="faqs" className="w-[70%] rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Faqs };
