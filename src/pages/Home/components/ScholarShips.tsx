import { Card } from "~/components/ui/card";
// import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { Badge } from "~/components/ui/badge";
import scholarship from "~/data/scholarships.json";
import { MapPin, GraduationCap, CircleDollarSign } from "lucide-react";
function ScholarShips() {
  return (
    <section className="py-[6vw] sm:py-[4vw] lg:py-[3vw] bg-background text-foreground">
      <div className="flex flex-col justify-center w-full max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-[1vw] lg:mb-[1vw]">
          Scholarships
        </h2>
        <p className="text-md sm:text-xl 2xl:text-lg  text-foreground mb-[3vw]">
          Explore various scholarships available for international students.
        </p>
      </div>
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 2xl:gap-[1vw]">
        {scholarship.map((item, idx) => (
          <Card
            key={idx}
            className="w-full border-spacing-5 flex flex-col xl:min-h-[40px] relative overflow-hidden"
          >
            {/* Funded Badge with Animation */}
            <div className="absolute top-3 right-3 z-10">
              <Badge className="text-white border-0 shadow-lg relative overflow-hidden  animate-funded-glow">
                <span className="relative z-10 xl:px-[0.3vw] flex items-center font-semibold">
                  <CircleDollarSign className="w-3 h-3 2xl:w-[1vw] 2xl:h-[1vw] mr-1" />
                  Funded
                </span>
              </Badge>
            </div>

            <div className="w-full flex-1 pt-6 2xl:pt-[2vw]">
              <h3 className="text-xl md:text-base 2xl:text-lg p-3 sm:p-[2vw] xl:p-[1.2vw] font-bold">
                {item.name}
              </h3>
              <Separator className="w-full" />
              <ul className="text-sm xl:text-[1vw] text-muted-foreground p-3 sm:p-[2vw] xl:p-[1vw] space-y-2">
                <li>
                  <MapPin className="inline mr-2 2xl:size-[1.75vw] text-green-500" />
                  {item.country}
                </li>
                <li>
                  <GraduationCap className="inline 2xl:size-[1.75vw] mr-2 text-green-500" />
                  <strong>Eligibility:</strong> {item.eligibility}
                </li>
                {/* <li>
              <strong>Requirements:</strong> {item.requirements}
            </li> */}
                <li>
                  <CircleDollarSign className="inline 2xl:size-[1.75vw] mr-2 text-green-500" />
                  <strong className="">Covers:</strong> {item.covers}
                </li>
              </ul>
            </div>
            {/* <div className="flex items-center p-3 sm:p-[2vw] xl:p-[1vw] gap-4 mt-auto">
              <Button className="w-full xl:py-[0.8vw]">
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center"
                >
                  Visit Website
                </a>
              </Button>
            </div> */}
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ScholarShips;
