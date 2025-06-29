import { Button } from "~/components/ui/button";
import { useAppDispatch } from "~/hooks/redux";
import { openConsultantModal } from "~/store/consultant/consultantSlice";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import coursesData from "~/data/courses.json";
import Features from "./Features";
import universitiesData from "~/data/universities.json";

const CourseDetailPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [course, setCourse] = useState<any | null>(null);
  const [courseUniversity, setCourseUniversity] = useState<any | null>(null);

  useEffect(() => {
    if (id) {
      const found = coursesData.find((course) => course.id === id);
      if (found) {
        setCourse(found);
        setCourseUniversity(
          universitiesData.find((uni: any) => uni.id === found.university)!
        );
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
          style={{ backgroundImage: `url(${courseUniversity.image})` }}
        >
          <div className="absolute inset-0 bg-black/60 z-1" />
          <div className="space-y-3 sm:space-y-6 z-10 px-2">
            <h2
              className="text-3xl sm:text-5xl font-bold"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
            >
              {course.name}
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
              Apply for course
            </Button>
          </div>
        </div>
      </div>
      <Features course={course} courseUniversity={courseUniversity} />
    </section>
  );
};

export default CourseDetailPage;
