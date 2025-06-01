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
// import { Input } from "~/components/ui/input";
// import { ComboboxDemo } from "./Dropdown";
import UniversityCard from "~/components/Cards/UniversityCard";
import { Link } from "react-router-dom";
import universitiesData from "~/data/universities.json";
import { University } from "~/types/university";

interface UniversitiesProps {
  heading?: string;
  demoUrl?: string;
  items?: University[];
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
    <section className="py-16 dark bg-background text-foreground">
      <div className="flex flex-col justify-between md:flex-row md:items-end mb-8">
        <div>
          <h2 className="text-3xl font-semibold md:text-4xl mb-3">{heading}</h2>
          <Link
            to="/universities"
            className="group flex items-center gap-1 text-sm font-medium md:text-base lg:text-lg"
          >
            Explore More
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      {/* <div className="flex flex-col sm:flex-row w-full items-center gap-3">
        <ComboboxDemo />
        <Input
          type="email"
          placeholder="University name"
          className="h-12 shadow placeholder:text-foreground/50 font-[500]"
          style={{ fontSize: "17px" }}
        />
        <Button
          type="submit"
          className="w-full sm:w-fit flex items-center gap-2 h-12 shadow bg-foreground text-white hover:bg-foreground/90 border border-foreground"
        >
          <span>Search</span>
          <Search />
        </Button>
      </div> */}
      <div className="mt-8 mb-5 flex shrink-0 items-center justify-end gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={() => {
            carouselApi?.scrollPrev();
          }}
          disabled={!canScrollPrev}
          className="disabled:pointer-events-auto"
        >
          <ArrowLeft className="size-5" />
        </Button>
        <Button
          size="icon"
          variant="outline"
          onClick={() => {
            carouselApi?.scrollNext();
          }}
          disabled={!canScrollNext}
          className="disabled:pointer-events-auto"
        >
          <ArrowRight className="size-5" />
        </Button>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
          className="relative left-[-1rem]"
        >
          {/* <CarouselContent className="-mr-4 ml-8 2xl:mr-[max(0rem,calc(50vw-700px-1rem))] 2xl:ml-[max(8rem,calc(50vw-700px+1rem))]"> */}
          <CarouselContent className="pl-4">
            {items.map((item) => (
              <CarouselItem key={item.id} className="pl-4 md:max-w-[452px]">
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
