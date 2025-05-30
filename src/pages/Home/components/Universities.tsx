"use client";

import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "~/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import type { CarouselApi } from "~/components/ui/carousel";
import { Input } from "~/components/ui/input";
import { ComboboxDemo } from "./Dropdown";
import Uni1 from "~/assets/images/uni1.jpg";
import Uni2 from "~/assets/images/uni2.jpg";
import Uni3 from "~/assets/images/uni3.jpg";
import Uni4 from "~/assets/images/uni4.jpg";
import { Card, CardContent } from "~/components/ui/card";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface UniversitiesProps {
  heading?: string;
  demoUrl?: string;
  items?: GalleryItem[];
}

const Universities = ({
  heading = "Top Universities",
  items = [
    {
      id: "item-1",
      title: "Build Modern UIs",
      summary:
        "Create stunning user interfaces with our comprehensive design system.",
      url: "#",
      image: Uni1,
    },
    {
      id: "item-2",
      title: "Computer Vision Technology",
      summary:
        "Powerful image recognition and processing capabilities that allow AI systems to analyze, understand, and interpret visual information from the world.",
      url: "#",
      image: Uni2,
    },
    {
      id: "item-3",
      title: "Machine Learning Automation",
      summary:
        "Self-improving algorithms that learn from data patterns to automate complex tasks and make intelligent decisions with minimal human intervention.",
      url: "#",
      image: Uni3,
    },
    {
      id: "item-4",
      title: "Predictive Analytics",
      summary:
        "Advanced forecasting capabilities that analyze historical data to predict future trends and outcomes, helping businesses make data-driven decisions.",
      url: "#",
      image: Uni4,
    },
    {
      id: "item-5",
      title: "Neural Network Architecture",
      summary:
        "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
      url: "#",
      image: Uni2,
    },
  ],
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
          <h2 className="text-3xl font-semibold md:text-4xl">{heading}</h2>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full items-center gap-3">
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
      </div>
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
                <Card
                  // href={item.url}
                  className="group flex flex-col justify-between border-0 cursor-pointer overflow-hidden"
                >
                  <div className="flex aspect-[3/2] overflow-hidden rounded-tr-xl rounded-tl-xl">
                    <div className="flex-1">
                      <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                  <CardContent>
                    <div className="mb-2 line-clamp-3 pt-4 text-lg font-medium break-words md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                      {item.title}
                    </div>
                    <div className="mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9">
                      {item.summary}
                    </div>
                    <div className="flex items-center text-sm">
                      Read more{" "}
                      <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Universities };
