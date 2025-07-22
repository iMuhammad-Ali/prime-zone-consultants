import { Card } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import scholarship from "~/data/scholarships.json";
import { MapPin, GraduationCap, CircleDollarSign } from "lucide-react";

function ScholarShips() {
  return (
    <section className="py-[6vw] sm:py-[4vw] lg:py-[3vw] bg-background text-foreground">
      <div className="flex flex-col justify-center w-full max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-[1vw] lg:mb-[1vw]">
          Scholarships
        </h2>
        <p className="text-md sm:text-xl 2xl:text-lg text-foreground mb-[3vw]">
          Explore various scholarships available for international students.
        </p>
      </div>
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 2xl:gap-[1vw]">
        {scholarship.map((item, idx) => (
          <Card
            key={idx}
            className="hover:scale-[102%] transition duration-300 glow-border-card w-full border-spacing-5 flex flex-col xl:min-h-[40px] relative overflow-hidden rounded-xl"
          >
            <div className="w-full flex-1 2xl:pt-[2vw]">
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
                <li>
                  <CircleDollarSign className="inline 2xl:size-[1.75vw] mr-2 text-green-500" />
                  <strong>Covers:</strong> {item.covers}
                </li>
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ScholarShips;
