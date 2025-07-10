"use client";

import { Star } from "lucide-react";
import { useEffect, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import type { CarouselApi } from "~/components/ui/carousel";

const testimonials = [
  {
    id: "testimonial-1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    name: "Customer Name",
    role: "Position at Company",
    avatar: "https://shadcnblocks.com/images/block/avatar-1.webp",
  },
  {
    id: "testimonial-2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    name: "Customer Name",
    role: "Position at Company",
    avatar: "https://shadcnblocks.com/images/block/avatar-2.webp",
  },
  {
    id: "testimonial-3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    name: "Customer Name",
    role: "Position at Company",
    avatar: "https://shadcnblocks.com/images/block/avatar-3.webp",
  },
];

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", updateCurrent);
    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  return (
    <section className="py-32 dark bg-background text-foreground">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id}>
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex items-center">
                  <Star className="size-5 fill-foreground stroke-none" />
                  <Star className="size-5 fill-foreground stroke-none" />
                  <Star className="size-5 fill-foreground stroke-none" />
                  <Star className="size-5 fill-foreground stroke-none" />
                  <Star className="size-5 fill-foreground stroke-none" />
                </div>
                <p className="mb-8 max-w-4xl font-medium md:px-8 lg:text-3xl">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12 md:w-24 md:h-24 shadow">
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.name}</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="text-sm font-medium md:text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-foreground/75 md:text-lg">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center mt-5">
        {testimonials.map((testimonial, index) => (
          <Button
            key={testimonial.id}
            variant="ghost"
            size="sm"
            onClick={() => {
              api?.scrollTo(index);
            }}
            className="hover:bg-accent/75"
          >
            <div
              className={`w-2.5 h-2.5 rounded-full ${
                index === current ? "bg-foreground" : "bg-muted-foreground"
              }`}
            />
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
