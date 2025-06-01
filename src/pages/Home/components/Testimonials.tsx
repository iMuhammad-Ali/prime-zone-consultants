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
    text: "Prime Zone made my dream of studying in Canada a reality. They helped with everything — from selecting the right course to getting my visa approved. Their support was personal and constant.",
    name: "Aarav Mehta",
    role: "Student at University of Toronto",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: "testimonial-2",
    text: "We were overwhelmed with the process until Prime Zone stepped in. Their counselors guided us patiently through every step of our daughter’s application and visa process.",
    name: "Sunita Sharma",
    role: "Parent of an international student",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: "testimonial-3",
    text: "I was confused between Germany and Australia. Prime Zone’s experts gave me a detailed comparison based on my career goals, and it helped me make a confident decision.",
    name: "Fatima Khan",
    role: "Masters Student at University of Melbourne",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    id: "testimonial-4",
    text: "The SOP and CV workshops were a game changer. My application stood out and I received an offer from my top-choice university in Italy, all thanks to Prime Zone.",
    name: "Rohan S.",
    role: "International Student in Milan",
    avatar: "https://randomuser.me/api/portraits/men/48.jpg",
  },
  {
    id: "testimonial-5",
    text: "Visa interviews used to scare me, but Prime Zone's mock sessions boosted my confidence. I got my UK student visa in one go!",
    name: "Meera Patel",
    role: "Student at University of Manchester",
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
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
              <div className="container flex flex-col items-center gap-4 text-center">
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
      <div className="container flex justify-center mt-5">
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
