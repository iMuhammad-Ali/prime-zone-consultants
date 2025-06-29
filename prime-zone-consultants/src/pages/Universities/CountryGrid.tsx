import { useLocation, useNavigate } from "react-router";
import { Card, CardTitle } from "~/components/ui/card";
import countries from "~/data/countries.json";

export default function CountryGrid() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleCardClick = (country: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("country", country.toLowerCase().replace(/\s+/g, "-"));
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <div className="container space-y-16">
      <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
        <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
          Search By Country
        </h2>
        <p className="text-muted-foreground lg:text-lg">
          Discover universities from around the world by selecting your
          preferred country. Easily explore detailed information about
          institutions to find the perfect university for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
        {countries.map((country) => (
          <Card
            key={country.code}
            onClick={() => handleCardClick(country.name)}
            className="relative rounded overflow-hidden text-center hover:bg-card/75 hover:scale-[102%] duration-300 p-4"
          >
            <div className="text-xs px-3 py-1 font-semibold rounded-bl bg-green-500 absolute top-0 right-0">
              {country.discount} OFF
            </div>
            <div className="flex items-center gap-4">
              <img
                src={country.flag}
                alt={`${country.name} flag`}
                className="h-[40px] w-[65px] object-cover rounded shadow-sm border"
              />
              <CardTitle className="text-xl">
                {country.name}{" "}
                <span className="text-muted-foreground text-sm">
                  ({country.code})
                </span>
              </CardTitle>
            </div>
            <div className="flex justify-between gap-3 mt-3 text-sm">
              <p className="text-green-500 font-semibold">
                Discounted Fee: {country.discountedFee}
              </p>
              <p className="text-muted-foreground">
                Actual Fee: {country.actualFee}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
