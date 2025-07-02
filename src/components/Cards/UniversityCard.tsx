import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useOpenConsultantModal } from "~/hooks/use-consultant";
import DiscountLabel from "../discount-label";

type UniversityCardProps = {
  university: any;
};

const UniversityCard = ({ university }: UniversityCardProps) => {
  const openConsultantModal = useOpenConsultantModal();

  return (
    <Link to={`/universities/${university.id}`}>
      <Card className="cursor-pointer relative h-full group flex flex-col border-0 overflow-hidden">
        <DiscountLabel discount={university.discount} />
        <div className="flex-shrink-0 flex aspect-[3/2] overflow-hidden rounded-tr-xl rounded-tl-xl">
          <div className="flex-1">
            <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
              <img
                src={
                  university.image ||
                  "https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg"
                }
                alt={university.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        <CardContent className="mt-4 flex flex-col justify-between h-full">
          <div className="space-y-2">
            <div className="line-clamp-3 text-lg font-medium break-words md:text-xl lg:text-2xl">
              {university.name}
            </div>
            <div className="line-clamp-2 text-sm text-muted-foreground md:text-base">
              {university.summary}
            </div>
            <div className="flex justify-between gap-3 text-sm py-2">
              <p className="text-green-500 font-semibold">
                Discounted Fee: {university.discountedPrice}
              </p>
              <p className="text-muted-foreground">
                Actual Fee: {university.actualPrice}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <MapPin />
              {university.city}, {university.country}
            </div>
            <div className="flex items-center gap-2">
              <Calendar />
              {university.intake}
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm mt-6">
            <Button
              className="w-full"
              onClick={(e) => {
                e.preventDefault();
                openConsultantModal();
              }}
            >
              Free Consultation
            </Button>
          </div>
          {/* <div className="flex items-center text-sm mt-5">
            Read more{" "}
            <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
          </div> */}
        </CardContent>
      </Card>
    </Link>
  );
};

export default UniversityCard;
