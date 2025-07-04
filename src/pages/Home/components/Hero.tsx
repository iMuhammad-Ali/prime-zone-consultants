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
    <section className="pt-36 pb-32">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {badge && (
            <Badge variant="outline">
              {badge}
              <ArrowUpRight className="ml-2 size-4" />
            </Badge>
          )}
          <h2
            className="my-6 text-4xl font-bold text-pretty lg:text-6xl"
            style={{ lineHeight: 1.25 }}
          >
            {heading}
          </h2>
          <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
            {description}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            {buttons.primary && (
              <Button asChild className="w-full sm:w-auto">
                <Link to={buttons.primary.url}>{buttons.primary.text}</Link>
              </Button>
            )}
            {buttons.secondary && (
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link to={buttons.secondary.url}>
                  {buttons.secondary.text}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-96 w-full rounded-md object-cover"
        />
      </div>
    </section>
  );
};

export { Hero };
