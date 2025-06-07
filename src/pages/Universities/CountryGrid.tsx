import { useLocation, useNavigate } from "react-router";
import { Card, CardTitle } from "~/components/ui/card";
import countries from "~/data/countries.json";
import { useAppDispatch } from "~/hooks/redux";
import { setSelectedCountry } from "~/store/universities/universitiesSlice";

export default function CountryGrid() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleCardClick = (country: string) => {
    dispatch(setSelectedCountry(country));

    const searchParams = new URLSearchParams(location.search);
    searchParams.set("country", country.toLowerCase().replace(/\s+/g, "-"));
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <>
      <h2 className="mt-8 mb-5 text-xl font-bold text-pretty lg:text-3xl text-center">
        Select By Country
      </h2>
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
    </>
  );
}
