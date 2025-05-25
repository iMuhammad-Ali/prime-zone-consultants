import {
  Code,
  GitBranch,
  List,
  Play,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { Button } from "~/components/ui/button";

import Course1 from "~/assets/images/course1.jpg";
import Course2 from "~/assets/images/course2.jpg";
import Course3 from "~/assets/images/course3.jpg";
import Course4 from "~/assets/images/course4.jpg";
import Course5 from "~/assets/images/course5.jpg";
import Course6 from "~/assets/images/course6.jpg";
import CourseCard from "~/components/Cards/CourseCard";

const coursesData = [
  {
    title: "Code Mastery",
    description: "Learn to code like a pro.",
    advisor: "John Doe",
    price: "$99",
    category: "Software",
    image: Course1,
    icon: <Code className="w-8 h-8 text-primary" strokeWidth={1} />,
  },
  {
    title: "Interactive Learning",
    description: "Engage with hands-on tutorials.",
    advisor: "Jane Smith",
    price: "$149",
    category: "Education",
    image: Course2,
    icon: <Play className="w-8 h-8 text-primary" strokeWidth={1} />,
  },
  {
    title: "Version Control",
    description: "Master Git and branching.",
    advisor: "Alex Johnson",
    price: "$129",
    category: "Development",
    image: Course3,
    icon: <GitBranch className="w-8 h-8 text-primary" strokeWidth={1} />,
  },
  {
    title: "Organized Study",
    description: "Keep your learning structured.",
    advisor: "Emily Clark",
    price: "$89",
    category: "Organization",
    image: Course4,
    icon: <List className="w-8 h-8 text-primary" strokeWidth={1} />,
  },
  {
    title: "Creative Coding",
    description: "Unleash your creativity with code.",
    advisor: "Michael Lee",
    price: "$199",
    category: "Design",
    image: Course5,
    icon: <WandSparkles className="w-8 h-8 text-primary" strokeWidth={1} />,
  },
  {
    title: "Spark Your Imagination",
    description: "Explore the limits of your creativity.",
    advisor: "Sarah Brown",
    price: "$179",
    category: "Creativity",
    image: Course6,
    icon: <Sparkles className="w-8 h-8 text-primary" strokeWidth={1} />,
  },
];

const Courses = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col items-center gap-6 text-center w-full">
        <h2 className="text-4xl font-semibold text-pretty lg:text-5xl">
          Popular Courses
        </h2>
        <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
          Explore list of our popular courses
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {coursesData.map((course) => (
            <CourseCard course={course} />
          ))}
        </div>

        <Button variant="outline" className="mt-8 px-6 py-3 border-white/50">
          View All Courses
        </Button>
      </div>
    </section>
  );
};

export { Courses };
