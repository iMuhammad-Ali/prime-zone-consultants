import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import scholarship from "~/data/scholarships.json";
import { MapPin, GraduationCap, CircleDollarSign } from "lucide-react";
function ScholarShips() {
  // Helper to chunk array into alternating 3 and 2 items per row
  function chunkScholarships(data: any[]) {
    const result = [];
    let i = 0;
    let chunkSize = 4;
    while (i < data.length) {
      result.push(data.slice(i, i + chunkSize));
      i += chunkSize;
      chunkSize = chunkSize === 4 ? 3 : 4;
    }
    return result;
  }

  const rows = chunkScholarships(scholarship);

  return (
    <section className="py-[6vw] sm:py-[4vw] lg:py-[3vw] dark bg-background">
      <div className="flex flex-col justify-center w-full max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-[1vw] lg:mb-[1vw]">
          Scholarships
        </h2>
        <p className="text-md sm:text-xl 2xl:text-lg  text-foreground mb-[3vw]">
          Explore various scholarships available for international students.
        </p>
      </div>
      <div className="w-full flex flex-col gap-4">
        {rows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className={
              row.length === 3 || row.length === 2
                ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center gap-5"
                : "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-items-center gap-5 xl:gap-[0.vw]"
            }
          >
            {row.map((item: any, index: number) => (
              <Card
                key={index + rowIdx * 10}
                className={
                  row.length === 3 || row.length === 2
                    ? "w-full  border-spacing-y-5 flex flex-col lg:min-h-[350px] relative"
                    : "w-full  border-spacing-5 flex flex-col xl:min-h-[400px] relative"
                }
              >
                {/* Beautiful modern notification badge */}
                <div className="absolute -top-3 -right-3 z-10 mr-2">
                  <div className="relative">
                    {/* Outer glow ring */}
                    <div className="w-8 h-8 sm:w-[4vw] sm:h-[4vw] xl:w-[2vw] xl:h-[2vw] bg-gradient-to-r from-green-600 to-green-700 rounded-full animate-ping absolute opacity-75"></div>
                    {/* Inner badge */}
                    <div className="w-8 h-8 sm:w-[4vw] sm:h-[4vw] xl:w-[2vw] xl:h-[2vw] bg-gradient-to-r from-green-500 to-green-700 rounded-full shadow-lg animate-pulse flex items-center justify-center border-2 border-white">
                      <svg
                        className="w-5 h-5 sm:w-[2.5vw] sm:h-[2.5vw] xl:w-[1.2vw] xl:h-[1.2vw] text-white animate-bounce"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Sparkle effect */}
                <div className="absolute -top-3 right-0 w-8 h-8 sm:w-[4vw] sm:h-[4vw] xl:w-[2vw] xl:h-[2vw]">
                  <div className="w-full h-full bg-yellow-300 rounded-full animate-ping opacity-60"></div>
                  <div className="absolute top-0.5 left-0.5 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute -top-3 right-0 w-8 h-8 sm:w-[4vw] sm:h-[4vw] xl:w-[2vw] xl:h-[2vw]">
                  <div className="w-full h-full bg-red-400 rounded-full animate-ping opacity-60"></div>
                  <div className="absolute top-0.5 left-0.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <div
                  className={
                    row.length === 3 || row.length === 2
                      ? "w-full flex-1"
                      : "w-full flex-1"
                  }
                >
                  <h3 className="text-2xl 2xl:text-lg p-3 sm:p-[2vw] xl:p-[1.2vw] font-bold">
                    {item.name}
                  </h3>
                  <Separator className=" bg-accent w-full" />
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
                <div className="flex items-center p-3 sm:p-[2vw] xl:p-[1vw] gap-4 mt-auto">
                  <Button className="w-full xl:py-[0.8vw]">
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm xl:text-base text-center"
                    >
                      Visit Website
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ScholarShips;
