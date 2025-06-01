// const course = {
//   id: "item-1",
//   title: "Build Modern UIs",
//   qualification: "Bachelor",
//   summary:
//     "Create stunning user interfaces with our comprehensive design system.",
//   image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
//   subject: "Medicine, Health",
//   duration: "4 Years",
//   intakes: ["March", "September"],
//   languages: ["Urdu", "English"],
//   tutionFee: "",
//   consultationFee: "",
//   discount: "",
//   scholarship: true,
// };
import { Button } from "~/components/ui/button";
import { useAppDispatch } from "~/hooks/redux";
import { openConsultantModal } from "~/store/consultant/consultantSlice";
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";
import { Card, CardHeader } from "~/components/ui/card";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
// import { Course } from "~/types/course";
import coursesData from "~/data/courses.json";

const CourseDetailPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [course, setCourse] = useState<any | null>(null);

  const titleStyles = "pl-6 font-semibold";

  useEffect(() => {
    if (id) {
      const found = coursesData.find((course) => course.id === id);
      console.log("id: ", id);
      console.log("found: ", found);
      if (found) {
        setCourse(found);
      } else {
        navigate("/courses");
      }
    }
  }, [id]);

  if (!course) return null;

  return (
    <section className="pt-32 pb-16">
      <div className="container flex flex-col items-center text-center">
        <div
          className="relative w-full h-[500px] rounded-md overflow-hidden flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${course.image})` }}
        >
          <div className="absolute inset-0 bg-black/60 z-1" />
          <div className="space-y-3 sm:space-y-6 z-10 px-2">
            <h2
              className="text-3xl sm:text-5xl font-bold"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
            >
              {course.title}
            </h2>
            <h2
              className="text-xl sm:text-2xl font-semibold"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
            >
              {course.qualification}
            </h2>
            <Button
              onClick={() => dispatch(openConsultantModal())}
              className="max-w-[250px] py-6 text-lg bg-background text-foreground hover:bg-background hover:scale-[102%] transition-all duration-300 shadow-md"
            >
              Apply to course
            </Button>
          </div>
        </div>

        <Card className="w-full mt-8">
          <CardHeader className="border-b">
            <h3 className="text-lg font-bold">Course Details</h3>
          </CardHeader>
          <Table className="text-lg text-left">
            <TableBody>
              <TableRow>
                <TableCell className={titleStyles}>Title</TableCell>
                <TableCell>{course.title}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={titleStyles}>Qualification</TableCell>
                <TableCell>{course.qualification}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={titleStyles}>Summary</TableCell>
                <TableCell>{course.summary}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={titleStyles}>Subject</TableCell>
                <TableCell>{course.subject}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={titleStyles}>Duration</TableCell>
                <TableCell>{course.duration}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={titleStyles}>Intakes</TableCell>
                <TableCell>{course.intakes.join(", ")}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={titleStyles}>Languages</TableCell>
                {/* <TableCell>{course.languages.join(", ")}</TableCell> */}
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={titleStyles}>Tuition Fee</TableCell>
                <TableCell>{course.tutionFee || "N/A"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={titleStyles}>Consultation Fee</TableCell>
                <TableCell>{course.consultationFee || "N/A"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={titleStyles}>Discount</TableCell>
                <TableCell>{course.discount || "N/A"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={titleStyles}>Scholarship</TableCell>
                <TableCell>{course.scholarship ? "Yes" : "No"}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </section>
  );
};

export default CourseDetailPage;
