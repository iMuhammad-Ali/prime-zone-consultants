import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import Image from "~/assets/images/hero2.jpg";

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
  badge = "✨ Your Website Builder",
  heading = "Blocks Built With Shadcn & Tailwind",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  buttons = {
    primary: {
      text: "Discover more",
      url: "/",
    },
    secondary: {
      text: "About us",
      url: "/",
    },
  },
  image = {
    src: Image,
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
          <h2 className="my-6 text-4xl font-bold text-pretty lg:text-6xl">
            {heading}
          </h2>
          <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
            {description}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            {buttons.primary && (
              <Button asChild className="w-full sm:w-auto">
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
            )}
            {buttons.secondary && (
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a href={buttons.secondary.url}>
                  {buttons.secondary.text}
                  <ArrowRight className="size-4" />
                </a>
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
