import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useAppDispatch, useAppSelector } from "~/hooks/redux";
import {
  setSelectedCountry,
  resetFilters,
} from "~/store/universities/universitiesSlice";
import FilterSidebar from "~/components/FilterSidebar";
import UniversityCard from "~/components/Cards/UniversityCard";
import Pagination from "~/components/pagination";
import CountryGrid from "./CountryGrid";
import { Separator } from "../../components/ui/separator";
import UniversityDepartments from "./Departments";
import { Card } from "~/components/ui/card";

const Universities: React.FC = () => {
  const dispatch = useAppDispatch();

  const { search } = useLocation();
  const prams = new URLSearchParams(search);
  const urlCountry = prams.get("country");

  console.log("URL Country:", urlCountry);

  const { filteredUniversities } = useAppSelector((state) => state.university);

  const [currentPage, setCurrentPage] = useState(1);
  const universitiesPerPage = 10;
  const totalPages = filteredUniversities.length
    ? Math.ceil(filteredUniversities.length / universitiesPerPage)
    : 1;

  // Initialize filters from URL
  useEffect(() => {
    if (urlCountry) dispatch(setSelectedCountry(urlCountry));
    else dispatch(resetFilters());
  }, [urlCountry, dispatch]);

  // Reset to first page on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredUniversities]);

  // Paginate
  const paginatedUniversities = filteredUniversities.slice(
    (currentPage - 1) * universitiesPerPage,
    currentPage * universitiesPerPage
  );

  return (
    <section className="pt-32 pb-16">
      {/* Header */}
      <div className="container mx-auto flex flex-col items-center text-center">
        <h2 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
          Universities
        </h2>
        <p className="mb-8 max-w-4xl text-muted-foreground lg:text-xl">
          Explore a curated list of top universities from around the world.
          Discover institutions known for academic excellence, innovation, and
          global impact. Compare programs, scholarships, and admissions to find
          your perfect fit. Begin your journey toward world-class education and
          endless opportunities.
        </p>
        <Separator className="my-10 w-full h-px" />
      </div>

      {/* Landing vs Filtered views */}
      {!urlCountry ? (
        <div className="flex-1">
          <CountryGrid />
          <Separator className="my-10 w-full h-px" />
          <UniversityDepartments />
        </div>
      ) : (
        <div className="container mx-auto flex flex-col relative md:flex-row gap-6">
          {/* Sidebar filters */}
          <FilterSidebar />

          {/* Results */}
          <div className="flex-1">
            {filteredUniversities.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {paginatedUniversities.map((uni: any) => (
                    <UniversityCard key={uni.id} university={uni} />
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-8 flex justify-center">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </div>
              </>
            ) : (
              <Card className="flex flex-col bg-card items-center justify-center mt-8 p-6 rounded-lg shadow-md max-w-md mx-auto">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  No Universities Found
                </h3>
                <p className="text-center text-gray-400 mb-4">
                  We couldn't find any universities matching your criteria. Try
                  adjusting your filters or explore other options.
                </p>
              </Card>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Universities;
