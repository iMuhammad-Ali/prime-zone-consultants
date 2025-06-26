import { Button } from "~/components/ui/button";

import CourseCard from "~/components/Cards/CourseCard";
import { Link } from "react-router-dom";
import coursesData from "~/data/courses.json";

const Courses = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col items-center gap-6 text-center w-full">
        <h2 className="text-4xl font-semibold text-pretty lg:text-5xl">
          Popular Courses
        </h2>
        <p className="text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
          Explore our list of most popular courses that align with your career
          goals. From Business and Engineering to IT and Healthcare, we help you
          discover programs that open global opportunities and fit your academic
          profile perfectly.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {coursesData.slice(0, 6).map((course: any) => (
            <CourseCard key={course.id} course={course} dark />
          ))}
        </div>

        <Link to="/courses">
          <Button variant="outline" className="mt-8 px-6 py-3 border-white/50">
            View All Courses
          </Button>
        </Link>
      </div>
    </section>
  );
};

export { Courses };
