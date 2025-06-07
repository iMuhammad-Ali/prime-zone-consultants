import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import departmentsData from "~/data/departments.json";
import coursesData from "~/data/courses.json";

const UniversityDepartments = ({
  description = "Find answers to common questions about our products. Can't find what you're looking for? Contact our support team.",
}: any) => {
  return (
    <section className="py-32">
      <div className="container space-y-16">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
            Search By Course
          </h2>
          <p className="text-muted-foreground lg:text-lg">{description}</p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full border rounded"
        >
          {departmentsData.map((department) => (
            <AccordionItem
              key={department.id}
              value={department.id}
              className="pr-4"
            >
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg px-3 sm:px-5">
                  {department.name}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-muted-foreground lg:text-lg px-3 sm:px-5">
                  <ul className="list-disc pl-4 space-y-1">
                    {coursesData
                      .filter((course) => course.department === department.id)
                      .map((course) => (
                        <li key={course.id}>{course.name}</li>
                      ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default UniversityDepartments;
