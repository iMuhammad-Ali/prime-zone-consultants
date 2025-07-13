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
    text: "I had a wonderful experience with Prime Zone Consultants (PZC). The team was highly professional, supportive, and guided me through every step of the process with great care. From choosing the right university to preparing my documents and guiding me for the visa, they handled everything smoothly and efficiently. I truly appreciate their dedication and commitment to helping students achieve their study abroad dreams. I highly recommend PZC to anyone looking for honest and expert educational consultancy services. Thank you, Prime Zone Consultants, for your excellent support!",
    name: "Muhammad Talha Umar",
    role: "Student at University of Toronto",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: "testimonial-2",
    text: "Prime Zone Consultant played a helpful role in securing my admission to an Italian university. They guided me well through the application process and are now assisting with my visa filing. While communication could be more prompt at times, overall their support and coordination have been valuable. A decent option for educational consultancy.",
    name: "Muhammad Hussnain Zaghim",
    role: "Parent of an international student",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: "testimonial-3",
    text: "Asslamualaikum I am Mujtaba it was my dream to study abroad especially in Italy. So, I contact to Prime Zone consultant. It is the most effort and good guidance of Prime Zone team that I have gotten my pre_enrolment in university of TRIESTE in Italy. thanks a lot Prime Zone consultant team for your proper and step by step guidance. Hope for yours more guidance for visa submission. Allah g grant u prime zone team more and more success in yours Field.",
    name: "Naseem Ara",
    role: "Masters Student at University of Melbourne",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    id: "testimonial-4",
    text: "PrimeZone Consultants team is very professional and friendly and also approachable. They guided me in every step of admission process for study in abroad. Their advice helped me to choose the best choice in foreign universities and Alhamdulillah I got acceptance letter from two universities in foreign country. I highly recommend PrimeZone Consultants for those who are planning to study in foreign universities.",
    name: "Muhammad Rizwan Yousaf",
    role: "Masters Student at University of Melbourne",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    id: "testimonial-4",
    text: "I had an amazing experience with PrimeZone Consultants. They guided me through every step of the process from shortlisting universities to SOP, writing, and visa preparation. The counselors were knowledgeable, patient, and always available, transparent, and trustworthy.",
    name: "Abdul Hanan",
    role: "Masters Student at University of Melbourne",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
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
    <section className="py-[10vw] sm:py-[8vw] lg:py-[6vw] dark bg-background text-foreground">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id}>
              <div className="flex flex-col items-center gap-[4vw] sm:gap-[3vw] lg:gap-[2vw] text-center">
                <div className="flex items-center">
                  <Star className="w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw] lg:w-[1.5vw] lg:h-[1.5vw] fill-foreground stroke-none" />
                  <Star className="w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw] lg:w-[1.5vw] lg:h-[1.5vw] fill-foreground stroke-none" />
                  <Star className="w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw] lg:w-[1.5vw] lg:h-[1.5vw] fill-foreground stroke-none" />
                  <Star className="w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw] lg:w-[1.5vw] lg:h-[1.5vw] fill-foreground stroke-none" />
                  <Star className="w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw] lg:w-[1.5vw] lg:h-[1.5vw] fill-foreground stroke-none" />
                </div>
                <p className="mb-[6vw] sm:mb-[4vw] lg:mb-[2vw] max-w-[90vw] sm:max-w-[80vw] lg:max-w-[60vw] font-medium px-[4vw] sm:px-[3vw] lg:px-[2vw] text-[4vw] sm:text-[3vw] lg:text-[1.5vw]">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-[3vw] sm:gap-[2vw] lg:gap-[1.5vw]">
                  <Avatar className="w-[10vw] h-[10vw] sm:w-[8vw] sm:h-[8vw] lg:w-[4vw] lg:h-[4vw] shadow">
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.name}</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="text-[3.5vw] sm:text-[2.5vw] lg:text-[1.25vw] font-medium">
                      {testimonial.name}
                    </p>
                    {/* <p className="text-[3vw] sm:text-[2vw] lg:text-[1vw] text-foreground/75">
                      {testimonial.role}
                    </p> */}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center mt-[4vw] sm:mt-[3vw] lg:mt-[2vw]">
        {testimonials.map((testimonial, index) => (
          <Button
            key={testimonial.id}
            variant="ghost"
            size="sm"
            onClick={() => {
              api?.scrollTo(index);
            }}
            className="hover:bg-accent/75 h-[8vw] w-[8vw] sm:h-[6vw] sm:w-[6vw] lg:h-[3vw] lg:w-[3vw]"
          >
            <div
              className={`w-[2.5vw] h-[2.5vw] sm:w-[1.5vw] sm:h-[1.5vw] lg:w-[0.75vw] lg:h-[0.75vw] rounded-full ${
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
