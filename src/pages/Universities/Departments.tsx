// import { useState } from "react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "~/components/ui/accordion";
// import departmentsData from "~/data/departments.json";
// import universitiesData from "~/data/universities.json";
// import { Link } from "react-router-dom";

const UniversityDepartments = () => {
  // const filteredDepartments = departmentsData.filter((department) =>
  //   coursesData.some((course) => course.department === department.id)
  // );

  // const [expanded, setExpanded] = useState<any>(
  //   filteredDepartments.length > 0 ? filteredDepartments[0].id : null
  // );
  return (
    <div className="container space-y-16">
      <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
        <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
          Search By Course
        </h2>
        <p className="text-muted-foreground lg:text-lg">
          Explore our available courses to find the one that fits your interests
          and goals. Each course includes detailed information to help you make
          the right choice.
        </p>
      </div>

      {/* <Accordion
        type="single"
        collapsible
        className="mx-auto w-full border rounded overflow-hidden"
        value={expanded}
        onValueChange={(val) => setExpanded(val)}
      >
        {filteredDepartments.map((department) => (
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
                  {coursesData
                    .filter((course) => course.department === department.id)
                    .map((course) => {
                      const university = universitiesData.find(
                        (u) => u.id === course.university
                      );
                      return (
                        <Link
                          to={`/courses/${course.id}`}
                          key={course.id}
                          className="p-3 rounded shadow-md bg-background hover:scale-[102%] duration-100"
                        >
                          <h3 className="font-semibold">{course.name}</h3>
                          <p className="text-sm text-gray-400 line-clamp-1">
                            {university?.name}
                          </p>
                        </Link>
                      );
                    })}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion> */}
    </div>
  );
};

export default UniversityDepartments;
