import qualificationsData from "~/data/qualifications.json";
import coursesData from "~/data/courses.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { useLocation, useNavigate } from "react-router";

const Qualifications = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const filteredQualifications = qualificationsData.filter((department: any) =>
    coursesData.some(
      (course: any) =>
        course.qualification.toLowerCase() === department.name.toLowerCase()
    )
  );

  const handleCardClick = (qualification: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(
      "qualification",
      qualification.toLowerCase().replace(/\s+/g, "-")
    );
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full rounded overflow-hidden"
      defaultValue="qualifications"
    >
      <AccordionItem value="qualifications" className="bg-secondary border-0">
        <AccordionTrigger className="pr-4 transition-opacity duration-200 hover:no-underline hover:opacity-60">
          <div className="font-medium sm:py-1 lg:py-2 lg:text-lg px-3 sm:px-5">
            Search By Qualifications
          </div>
        </AccordionTrigger>
        <AccordionContent className="space-y-4 px-5  rounded-b">
          {filteredQualifications.map((qualification) => {
            const courseCount = coursesData.filter(
              (course) =>
                course.qualification.toLowerCase() ===
                qualification.name.toLowerCase()
            ).length;

            return (
              <div
                key={qualification.id}
                onClick={() => handleCardClick(qualification.name)}
                className="rounded bg-background lg:text-lg py-4 px-3 sm:px-5 hover:scale-[102%] duration-100 cursor-pointer"
              >
                <div className="font-semibold">{qualification.name}</div>
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

export default Qualifications;
