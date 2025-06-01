import CourseCard from "~/components/Cards/CourseCard";
// import { Course } from "~/types/course";
import coursesData from "~/data/courses.json";

const Courses = () => {
  return (
    <section className="pt-32 pb-16">
      <div className="container flex flex-col items-center text-center">
        <h2 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
          Courses
        </h2>
        <p className="mb-8 max-w-3xl text-muted-foreground lg:text-xl">
          Explore a diverse selection of expert-led courses designed to enhance
          your skills, boost your knowledge, and support your learning
          journey—whether you're just getting started or advancing your career.
        </p>
      </div>
      {coursesData?.length > 0 ? (
        <>
          <div className="grid grid-cols-3 gap-x-5 gap-y-8 mt-5">
            {coursesData.map((course: any) => (
              <CourseCard key={course.id} course={course} dark />
            ))}
          </div>
          {/* <div className="text-center">
            <Button
              variant="outline"
              className="mt-12 w-[150px] py-3 border-white/50"
            >
              Load More
            </Button>
          </div> */}
        </>
      ) : (
        <p className="text-center mt-8 text-xl">No courses found</p>
      )}
    </section>
  );
};

export default Courses;
