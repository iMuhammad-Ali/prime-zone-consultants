import UniversityCard from "~/components/Cards/UniversityCard";
import { Input } from "~/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import CountryGrid from "./countryGrid";
import { useLocation } from "react-router";
import { useAppSelector } from "~/hooks/redux";
import UniversityDepartments from "./Departments";

const Universities = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedCountry = searchParams.get("country");

  const { filteredUniversities } = useAppSelector((state) => state.university);

  return (
    <section className="pt-32 pb-16">
      <div className="container flex flex-col items-center text-center">
        <h2 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
          Universities
        </h2>
        <p className="mb-8 max-w-3xl text-muted-foreground lg:text-xl">
          Explore a curated list of top universities from around the world.
          Discover academic programs, campus highlights, and what makes each
          institution unique to help you make informed education choices.
        </p>
        <form className="w-full flex justify-center h-[55px]">
          <Input
            placeholder="Search university by name or country..."
            className="max-w-xl h-full rounded-tr-none rounded-br-none focus-visible:ring-0 sm:placeholder:text-lg !text-lg"
          />
          <Button className="w-[75px] h-full rounded-tl-none rounded-bl-none">
            <Search />
          </Button>
        </form>
      </div>
      <Separator className="mt-8" />
      <UniversityDepartments filteredUniversities={filteredUniversities} />
      <Separator className="mt-8" />

      {!selectedCountry ? (
        <CountryGrid />
      ) : filteredUniversities?.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 mt-5">
            {filteredUniversities.map((university: any) => (
              <div key={university.id} className="h-full">
                <UniversityCard university={university} />
              </div>
            ))}
          </div>
          {/* <div className="text-center">
            <Button
              variant="outline"
              className="mt-12 w-[150px] py-3 border-white/50"
            >
              Load More
            </Button>
          </div> */}
        </>
      ) : (
        <p className="text-center mt-8 text-xl">No universities found</p>
      )}
    </section>
  );
};

export default Universities;
