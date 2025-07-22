import { useLocation, useNavigate } from "react-router";
import { Card, CardTitle } from "~/components/ui/card";
import countries from "~/data/countries.json";
import uniData from "~/data/universities.json";

export default function CountryGrid() {
  const location = useLocation();
  const navigate = useNavigate();

  const totalUni = (country: string) => {
    return uniData.filter((uni) => uni.country === country).length;
  };

  const handleCardClick = (country: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("country", country.toLowerCase().replace(/\s+/g, "-"));
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <div className="space-y-[4vw]">
      <div className="mx-auto flex max-w-[75vw] flex-col text-left md:text-center">
        <h2 className="text-center mb-[2vw] sm:mb-[1.5vw] lg:mb-[0.5vw] xl:mb-[0.4vw] 2xl:mb-[0.3vw] text-[7vw] sm:text-[5vw] lg:text-[4vw] xl:text-[3vw] 2xl:text-[2.5vw] font-semibold">
          Search By Country
        </h2>
        <p className="text-muted-foreground lg:text-md xl:text-sm text-center">
          Discover universities from around the world by selecting your
          preferred country. Easily explore detailed information about
          institutions to find the perfect university for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[4vw] sm:gap-[2.5vw] md:gap-[2vw] lg:gap-[1.5vw] cursor-pointer">
        {countries.map((country) => (
          <Card
            key={country.code}
            onClick={() => handleCardClick(country.name)}
            className="relative rounded 2xl:rounded-[0.3vw] overflow-hidden text-center hover:bg-card/75 hover:scale-[102%] duration-300 p-[3vw] sm:p-[2vw] md:p-[1.5vw] lg:p-[1vw]"
          >
            <div className="text-xs 2xl:text-sm px-[2vw] py-[1vw] sm:px-[1.5vw] sm:py-[0.5vw] md:px-[1vw] md:py-[0.35vw] lg:px-[0.75vw] lg:py-[0.25vw] font-semibold rounded-bl bg-green-500 absolute top-0 right-0">
              {country.discount} OFF
            </div>
            <div className="flex items-center gap-[3vw] sm:gap-[2vw] md:gap-[1.5vw] lg:gap-[1vw]">
              <img
                src={country.flag}
                alt={`${country.name} flag`}
                className="h-[8vw] w-[12vw] sm:h-[4vw] sm:w-[6vw] md:h-[3vw] md:w-[5vw] lg:h-[2.5vw] lg:w-[4vw] object-cover rounded shadow-sm border"
              />
              <CardTitle className="text-xl 2xl:text-lg">
                {country.name}{" "}
                <span className="text-muted-foreground text-sm">
                  ({country.code})
                </span>
              </CardTitle>
            </div>
            <div className="flex justify-between gap-[0.75vw] mt-[0.75vw] text-sm">
              <p className="text-green-500 font-semibold">
                Discounted Fee: {country.discountedFee}
              </p>
              <p className="text-muted-foreground">
                Actual Fee: {country.actualFee}
              </p>
            </div>
            <p className="text-left 2xl:text-sm">
              Universities: {totalUni(country.name)}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
