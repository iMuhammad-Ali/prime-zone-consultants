"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "~/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import type { CarouselApi } from "~/components/ui/carousel";
import UniversityCard from "~/components/Cards/UniversityCard";
import { Link } from "react-router-dom";
import universitiesData from "~/data/universities.json";

interface UniversitiesProps {
  heading?: string;
  demoUrl?: string;
  items?: any[];
}

const Universities = ({
  heading = "Top Universities",
  items = universitiesData.slice(0, 5),
}: UniversitiesProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-[8vw] sm:py-[6vw] md:py-[5vw] lg:py-[4vw] dark bg-background text-foreground">
      <div className="flex flex-col justify-between md:flex-row md:items-end mb-[4vw] sm:mb-[3vw] md:mb-[2vw] px-[4vw] sm:px-[3vw] md:px-[2vw] lg:px-0">
        <div>
          <h2 className="text-3xl font-semibold md:text-4xl mb-[0.75vw]">
            {heading}
          </h2>
          <Link
            to="/universities"
            className="group flex items-center gap-[0.25vw] text-sm font-medium md:text-base lg:text-lg 2xl:text-xl"
          >
            Explore More
            <ArrowUpRight className="size-[3vw] sm:size-[2vw] md:size-[1.5vw] lg:size-[1vw] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      {/* <div className="flex flex-col sm:flex-row w-full items-center gap-3">
        <ComboboxDemo />
        <Input
          type="email"
          placeholder="University name"
          className="h-12 shadow placeholder:text-foreground/50 font-[500]"
          style={{ fontSize: "1.2vw" }}
        />
        <Button
          type="submit"
          className="w-full sm:w-fit flex items-center gap-2 h-12 shadow bg-foreground text-white hover:bg-foreground/90 border border-foreground"
        >
          <span>Search</span>
          <Search />
        </Button>
      </div> */}
      <div className="mt-[4vw] sm:mt-[3vw] md:mt-[2vw] mb-[3vw] sm:mb-[2vw] md:mb-[1.25vw] flex shrink-0 items-center justify-end gap-[1vw] sm:gap-[0.75vw] md:gap-[0.5vw] px-[4vw] sm:px-[3vw] md:px-[2vw] lg:px-0">
        <Button
          size="icon"
          variant="outline"
          onClick={() => {
            carouselApi?.scrollPrev();
          }}
          disabled={!canScrollPrev}
          className="disabled:pointer-events-auto px-[2vw] py-[2vw] sm:px-[1.5vw] sm:py-[1.5vw] md:px-[1vw] md:py-[1vw]"
        >
          <ArrowLeft className="size-[3vw] sm:size-[2vw] md:size-[1.5vw] lg:size-[1.25vw]" />
        </Button>
        <Button
          size="icon"
          variant="outline"
          onClick={() => {
            carouselApi?.scrollNext();
          }}
          disabled={!canScrollNext}
          className="disabled:pointer-events-auto px-[2vw] py-[2vw] sm:px-[1.5vw] sm:py-[1.5vw] md:px-[1vw] md:py-[1vw]"
        >
          <ArrowRight className="size-[3vw] sm:size-[2vw] md:size-[1.5vw] lg:size-[1.25vw]" />
        </Button>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 48vw)": {
                dragFree: true,
              },
            },
          }}
          className="relative left-[-1vw]"
        >
          {/* <CarouselContent className="-mr-4 ml-8 2xl:mr-[max(0rem,calc(50vw-700px-1rem))] 2xl:ml-[max(8rem,calc(50vw-700px+1rem))]"> */}
          <CarouselContent className="pl-[4vw] sm:pl-[3vw] md:pl-[2vw] lg:pl-[1vw]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-[3vw] sm:pl-[2vw] md:pl-[1.5vw] lg:pl-[1vw] md:max-w-[50vw] lg:max-w-[30vw]"
              >
                <UniversityCard university={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Universities };
