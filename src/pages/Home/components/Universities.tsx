"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(items.length);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setSelectedIndex(carouselApi.selectedScrollSnap());
      setSlideCount(carouselApi.scrollSnapList().length);
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
        <div className="flex mt-5 2xl:mt-[2vw] items-center justify-center w-full px-[2vw] select-none">
          <button
            aria-label="Previous"
            onClick={() => carouselApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className={`transition-colors rounded-full p-1 md:p-2 ${
              canScrollPrev
                ? "text-colors-background hover:bg-blue-50"
                : "text-gray-300"
            } focus:outline-none`}
            style={{ background: "none", border: "none" }}
          >
            <ArrowLeft className="w-7 h-7 md:w-8 md:h-8 2xl:w-[2.5vw] 2xl:h-[2.5vw]" />
          </button>
          <div className="flex-1 flex flex-col items-center justify-center max-w-[60%]">
            <div className="relative w-[60%] 2xl:max-w-[50vw] h-[4px] 2xl:h-[0.25vw] bg-blue-100 rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-blue-800 transition-all duration-300"
                style={{
                  width: `${
                    slideCount > 1
                      ? ((selectedIndex + 1) / slideCount) * 100
                      : 100
                  }%`,
                }}
              />
            </div>
          </div>
          <button
            aria-label="Next"
            onClick={() => carouselApi?.scrollNext()}
            disabled={!canScrollNext}
            className={`transition-colors rounded-full p-1 md:p-2 ${
              canScrollNext
                ? "text-colors-background hover:bg-blue-50"
                : "text-gray-300"
            } focus:outline-none`}
            style={{ background: "none", border: "none" }}
          >
            <ArrowRight className="w-7 h-7 md:w-8 md:h-8 2xl:w-[2.5vw] 2xl:h-[2.5vw]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export { Universities };
