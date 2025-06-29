import departmentsData from "~/data/departments.json";
import coursesData from "~/data/courses.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { useLocation, useNavigate } from "react-router";

const Departments = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const filteredDepartments = departmentsData.filter((department: any) =>
    coursesData.some((course: any) => course.department === department.id)
  );

  const handleCardClick = (department: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(
      "department",
      department.toLowerCase().replace(/\s+/g, "-")
    );
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full rounded overflow-hidden"
      defaultValue="departments"
    >
      <AccordionItem value="departments" className="bg-secondary border-0">
        <AccordionTrigger className="pr-4 transition-opacity duration-200 hover:no-underline hover:opacity-60">
          <div className="font-medium sm:py-1 lg:py-2 lg:text-lg px-3 sm:px-5">
            Search By Departments
          </div>
        </AccordionTrigger>
        <AccordionContent className="space-y-4 px-5  rounded-b">
          {filteredDepartments.map((department) => {
            const courseCount = coursesData.filter(
              (course) => course.department === department.id
            ).length;

            return (
              <div
                key={department.id}
                className="rounded bg-background lg:text-lg py-4 px-3 sm:px-5 hover:scale-[102%] duration-100 cursor-pointer"
                onClick={() => handleCardClick(department.id)}
              >
                <div className="font-semibold">{department.name}</div>
                <div className="text-muted-foreground text-sm">
                  {courseCount} course{courseCount !== 1 && "s"} available
                </div>
              </div>
            );
          })}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Departments;
