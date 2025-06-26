import UniversityCard from "~/components/Cards/UniversityCard";
import { Input } from "~/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import CountryGrid from "./CountryGrid";
import { useLocation } from "react-router";
import { useAppSelector } from "~/hooks/redux";
import UniversityDepartments from "./Departments";
import { useAppDispatch } from "~/hooks/redux";
import { setSelectedCountry } from "~/store/universities/universitiesSlice";
import { useEffect, useState } from "react";

const Universities = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedCountry = searchParams.get("country");

  const { filteredUniversities } = useAppSelector((state) => state.university);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = filteredUniversities
    ? Math.ceil(filteredUniversities.length / 10)
    : 1;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const paginatedUniversities = filteredUniversities
    ? filteredUniversities.slice((currentPage - 1) * 10, currentPage * 10)
    : [];

  useEffect(() => {
    if (selectedCountry) {
      dispatch(setSelectedCountry(selectedCountry));
    }
  }, [selectedCountry]);

  return (
    <section className="pt-32 pb-16 overflow-hidden">
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
      <Separator className="my-16 w-[200vw] -translate-x-[50%] h-[0.5px]" />

      {!selectedCountry ? (
        <>
          <CountryGrid />
          <Separator className="my-16 w-[200vw] -translate-x-[50%] h-[0.5px]" />
          <UniversityDepartments />
        </>
      ) : filteredUniversities?.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 mt-5">
            {paginatedUniversities.map((university: any) => (
              <div key={university.id} className="h-full">
                <UniversityCard university={university} />
              </div>
            ))}
          </div>
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              <Button
                variant="outline"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Prev
              </Button>
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i + 1}
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  onClick={() => handlePageChange(i + 1)}
                  className="w-10 h-10 p-0"
                >
                  {i + 1}
                </Button>
              ))}
              <Button
                variant="outline"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </Button>
            </div>
          )}
        </>
      ) : (
        <p className="text-center mt-8 text-xl">No universities found</p>
      )}
    </section>
  );
};

export default Universities;
