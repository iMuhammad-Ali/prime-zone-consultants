import CourseCard from "~/components/Cards/CourseCard";
import { Button } from "~/components/ui/button";
import { Course } from "~/types/course";

const courses = [
  {
    title: "Code Mastery",
    description: "Learn to code like a pro.",
    advisor: "John Doe",
    price: "$99",
    category: "Software",
    image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
  },
  {
    title: "Interactive Learning",
    description: "Engage with hands-on tutorials.",
    advisor: "Jane Smith",
    price: "$149",
    category: "Education",
    image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
  },
  {
    title: "Version Control",
    description: "Master Git and branching.",
    advisor: "Alex Johnson",
    price: "$129",
    category: "Development",
    image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
  },
  {
    title: "Organized Study",
    description: "Keep your learning structured.",
    advisor: "Emily Clark",
    price: "$89",
    category: "Organization",
    image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
  },
  {
    title: "Creative Coding",
    description: "Unleash your creativity with code.",
    advisor: "Michael Lee",
    price: "$199",
    category: "Design",
    image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
  },
  {
    title: "Spark Your Imagination",
    description: "Explore the limits of your creativity.",
    advisor: "Sarah Brown",
    price: "$179",
    category: "Creativity",
    image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
  },
];

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
      {courses?.length > 0 ? (
        <>
          <div className="grid grid-cols-3 gap-x-5 gap-y-8 mt-5">
            {courses.map((course: Course) => (
              <CourseCard course={course} dark />
            ))}
          </div>
          <div className="text-center">
            <Button
              variant="outline"
              className="mt-12 w-[150px] py-3 border-white/50"
            >
              Load More
            </Button>
          </div>
        </>
      ) : (
        <p className="text-center mt-8 text-xl">No courses found</p>
      )}
    </section>
  );
};

export default Courses;
