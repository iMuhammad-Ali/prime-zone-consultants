import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  badge?: string;
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image?: {
    src: string;
    alt: string;
  };
}

const Hero = ({
  badge = "🌍 Expert Education & Visa Consultants",
  heading = "Study Abroad with Confidence",
  description = "Helping students achieve global dreams, from admission to visa success!",
  buttons = {
    primary: {
      text: "Discover more",
      url: "/services",
    },
    secondary: {
      text: "About us",
      url: "/about-us",
    },
  },
  image = {
    src: "https://media.istockphoto.com/id/2183282403/photo/portrait-of-international-happy-students-posing-in-park.jpg?s=612x612&w=0&k=20&c=az-FrW6sDtuZlBP4FDH088wLmVFD2F74vBFX71y4NaE=",
    alt: "Hero section demo image showing interface components",
  },
}: HeroProps) => {
  return (
    <section className="pt-[25vw] pb-[12vw] sm:pt-[12vw] sm:pb-[10vw] md:pt-[10vw] md:pb-[8vw] lg:pt-[9vw] lg:pb-[8vw] px-[4vw] sm:px-[3vw] md:px-[2vw] lg:px-0">
      <div className="grid items-center gap-[6vw] sm:gap-[4vw] md:gap-[3vw] lg:gap-[2vw] lg:grid-cols-2">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {badge && (
            <Badge variant="outline">
              {badge}
              <ArrowUpRight className="ml-[2vw] size-[4vw] sm:ml-[1.5vw] sm:size-[2.5vw] md:ml-[1vw] md:size-[1.5vw] lg:ml-[0.5vw] lg:size-[1vw]" />
            </Badge>
          )}
          <h2
            className="my-[4vw] sm:my-[3vw] md:my-[2.5vw] lg:my-[1.5vw] text-4xl font-bold text-pretty lg:text-6xl"
            style={{ lineHeight: 1.25 }}
          >
            {heading}
          </h2>
          <p className="mb-[4vw] sm:mb-[3vw] md:mb-[2.5vw] lg:mb-[2vw] max-w-fit text-muted-foreground lg:text-xl">
            {description}
          </p>
          <div className="flex w-full flex-col justify-center gap-[2vw] sm:gap-[1.5vw] md:gap-[1vw] lg:gap-[0.5vw] sm:flex-row lg:justify-start">
            {buttons.primary && (
              <Button asChild className="w-full sm:w-auto">
                <Link to={buttons.primary.url}>{buttons.primary.text}</Link>
              </Button>
            )}
            {buttons.secondary && (
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link to={buttons.secondary.url}>
                  {buttons.secondary.text}
                  <ArrowRight className="size-[4vw] sm:size-[2.5vw] md:size-[1.5vw] lg:size-[1vw]" />
                </Link>
              </Button>
            )}
          </div>
        </div>
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[60vw] sm:max-h-[45vw] md:max-h-[35vw] lg:max-h-[25vw] w-full rounded-md object-cover"
        />
      </div>
    </section>
  );
};

export { Hero };
