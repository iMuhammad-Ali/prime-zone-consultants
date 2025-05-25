import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { UniversityData } from "~/types/university";

type UniversityCardProps = {
  university: UniversityData;
};

const UniversityCard = ({ university }: UniversityCardProps) => {
  return (
    <Card className="group flex flex-col justify-between border-0 cursor-pointer overflow-hidden">
      <div className="flex aspect-[3/2] overflow-hidden rounded-tr-xl rounded-tl-xl">
        <div className="flex-1">
          <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
            <img
              src={university.image}
              alt={university.title}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <CardContent>
        <div className="mb-2 line-clamp-3 pt-4 text-lg font-medium break-words md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
          {university.title}
        </div>
        <div className="mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9">
          {university.summary}
        </div>
        <div className="flex items-center text-sm">
          Read more{" "}
          <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
        </div>
      </CardContent>
    </Card>
  );
};

export default UniversityCard;
