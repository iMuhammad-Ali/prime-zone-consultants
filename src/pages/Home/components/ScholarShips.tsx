import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import scholarship from "~/data/scholarships.json";
import { MapPin, GraduationCap, CircleDollarSign } from "lucide-react";
function ScholarShips() {
  return (
    <section className="py-[6vw] sm:py-[4vw] lg:py-[3vw] bg-primary">
      <div className="flex flex-col justify-center w-full max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-background mb-[2vw]">
          Scholarships
        </h2>
        <p className="text-lg sm:text-xl text-background mb-[4vw]">
          Explore various scholarships available for international students.
        </p>
      </div>
      <div className="grid grid-cols-3 xl:gap-[1vw] w-full mx-auto">
        {scholarship.map((item, index) => (
          <Card key={index} className="xl:p-[1vw] border-spacing-5">
            <div className="max-w-[25vw] mb-[4vw] sm:mb-[3vw] lg:mb-[2vw]">
              <h3 className="text-2xl font-bold mb-[1vw]">{item.name}</h3>
              <Separator className="mb-[1vw]" />
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>
                  <MapPin className="inline mr-2 text-green-500" />
                  {item.country}
                </li>
                <li>
                  <GraduationCap className="inline mr-2 text-green-500" />
                  <strong>Eligibility:</strong> {item.eligibility}
                </li>
                {/* <li>
                  <strong>Requirements:</strong> {item.requirements}
                </li> */}
                <li>
                  <CircleDollarSign className="inline mr-2 text-green-500" />
                  <strong className="">Covers:</strong> {item.covers}
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4 text-sm mt-6">
              <Button>
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md bottom-0 left-0 text-center"
                >
                  Visit Website
                </a>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ScholarShips;
