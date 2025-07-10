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
import { Card } from "~/components/ui/card";

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
    <div className="space-y-[6vw] sm:space-y-[5vw] md:space-y-[4vw] px-[4vw] sm:px-[3vw] md:px-[2vw] lg:px-0">
      <div className="mx-auto flex max-w-[95vw] sm:max-w-[85vw] md:max-w-[80vw] lg:max-w-[75vw] flex-col text-left md:text-center">
        <h2 className="mb-[2vw] sm:mb-[1.5vw] md:mb-[1vw] lg:mb-[0.75vw] text-3xl font-semibold lg:text-4xl">
          Search By Department
        </h2>
        <div className="mb-[3vw] sm:mb-[2.5vw] md:mb-[2vw] lg:mb-[1.5vw]">
          <div className="flex items-center">
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search departments..."
              className="flex-1 h-[12vw] sm:h-[8vw] md:h-[5vw] lg:h-[3vw] bg-blue-900 text-white border-none focus:ring-2 focus:ring-blue-400 placeholder:text-blue-300 text-base sm:text-sm"
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
              <AccordionTrigger className="pr-[3vw] sm:pr-[2vw] md:pr-[1.5vw] lg:pr-[1vw] transition-opacity duration-200 hover:no-underline hover:opacity-60">
                <div className="font-medium py-[1vw] sm:py-[0.75vw] md:py-[0.5vw] lg:py-[0.25vw] lg:text-lg px-[3vw] sm:px-[2vw] md:px-[1.5vw] lg:px-[0.75vw]">
                  {department.name}
                </div>
              </AccordionTrigger>
              <AccordionContent className="mb-[1vw] sm:mb-[0.75vw] md:mb-[0.5vw] lg:mb-[0.25vw]">
                <div className="text-muted-foreground lg:text-lg px-[3vw] sm:px-[2vw] md:px-[1.5vw] lg:px-[0.75vw]">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3vw] sm:gap-[2vw] md:gap-[1.5vw] lg:gap-[1vw]">
                    {universitiesData
                      .filter((uni) => uni.departments.includes(department.id))
                      .map((uni) => {
                        return (
                          <Link
                            to={`/universities/${uni.id}`}
                            key={uni.id}
                            className="p-[2vw] sm:p-[1.5vw] md:p-[1vw] lg:p-[0.75vw] rounded shadow-md bg-background hover:scale-[102%] duration-100"
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
          <Card className="p-[4vw] sm:p-[3vw] md:p-[2vw] lg:p-[1.5vw] text-center border-none rounded-none">
            <p className="text-muted-foreground">No department found</p>
          </Card>
        )}
      </Accordion>
    </div>
  );
};

export default UniversityDepartments;
