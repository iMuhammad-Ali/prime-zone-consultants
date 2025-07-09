import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import departmentsData from "~/data/departments.json";
import universitiesData from "~/data/universities.json";
import { Link } from "react-router-dom";

import { Input } from "~/components/ui/input";

const UniversityDepartments = () => {
  const [search, setSearch] = useState("");
  // Only show departments that have at least one university
  const filteredDepartments = departmentsData.filter((department) =>
    universitiesData.some((uni) => uni.departments.includes(department.id))
  );
  // Filter by search
  const visibleDepartments = filteredDepartments.filter((department) =>
    department.name.toLowerCase().includes(search.toLowerCase())
  );
  const [expanded, setExpanded] = useState<any>(
    visibleDepartments.length > 0 ? visibleDepartments[0].id : null
  );
  return (
    <div className="container space-y-16">
      <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
        <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
          Search By Department
        </h2>
        <div className="mb-6">
          <div className="flex items-center">
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search departments..."
              className="flex-1 h-12 bg-blue-900 text-white border-none focus:ring-2 focus:ring-blue-400 placeholder:text-blue-300"
            />
          </div>
        </div>
        <p className="text-muted-foreground lg:text-lg">
          Explore our available departments to find the one that fits your
          interests and goals. Each departments includes detailed information to
          help you make the right choice.
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="mx-auto w-full border rounded overflow-hidden"
        value={expanded}
        onValueChange={(val) => setExpanded(val)}
      >
        {visibleDepartments.length > 0 ? (
          visibleDepartments.map((department) => (
            <AccordionItem
              key={department.id}
              value={department.id}
              className={expanded === department.id ? "bg-secondary" : ""}
            >
              <AccordionTrigger className="pr-4 transition-opacity duration-200 hover:no-underline hover:opacity-60">
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg px-3 sm:px-5">
                  {department.name}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-muted-foreground lg:text-lg px-3 sm:px-5">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {universitiesData
                      .filter((uni) => uni.departments.includes(department.id))
                      .map((uni) => {
                        return (
                          <Link
                            to={`/universities/${uni.id}`}
                            key={uni.id}
                            className="p-3 rounded shadow-md bg-background hover:scale-[102%] duration-100"
                          >
                            <h3 className="font-semibold">{uni.name}</h3>
                            <p className="text-sm text-gray-400 line-clamp-1">
                              {uni.country}
                            </p>
                          </Link>
                        );
                      })}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))
        ) : (
          <div className="text-center p-6">
            <p className="text-muted-foreground">No departments found.</p>
          </div>
        )}
      </Accordion>
    </div>
  );
};

export default UniversityDepartments;
