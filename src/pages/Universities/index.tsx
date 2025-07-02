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
import UniversityDepartments from "./Departments";
import { Separator } from "~/components/ui/separator";

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
    <section className="pt-32 pb-16 overflow-hidden">
      {/* Header */}
      <div className="container mx-auto flex flex-col items-center text-center">
        <h2 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
          Universities
        </h2>
        <p className="mb-8 max-w-3xl text-muted-foreground lg:text-xl">
          Explore a curated list of top universities from around the world.
        </p>
      </div>

      <Separator className="my-16 w-full h-px" />

      {/* Landing vs Filtered views */}
      {!urlCountry ? (
        <div className="flex-1">
          <CountryGrid />
          {/* <Separator className="my-16 w-full h-px" />
          <UniversityDepartments /> */}
        </div>
      ) : (
        <div className="container mx-auto flex flex-col md:flex-row gap-6">
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
              <p className="text-center mt-8 text-xl">No universities found</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Universities;
