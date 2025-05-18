import {
  Code,
  GitBranch,
  List,
  Play,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

const coursesData = [
  {
    title: "Code Mastery",
    description: "Learn to code like a pro.",
    advisor: "John Doe",
    price: "$99",
    category: "Software",
    image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
    icon: <Code className="w-8 h-8 text-primary" strokeWidth={1} />,
  },
  {
    title: "Interactive Learning",
    description: "Engage with hands-on tutorials.",
    advisor: "Jane Smith",
    price: "$149",
    category: "Education",
    image: "https://shadcnblocks.com/images/block/placeholder-2.svg",
    icon: <Play className="w-8 h-8 text-primary" strokeWidth={1} />,
  },
  {
    title: "Version Control",
    description: "Master Git and branching.",
    advisor: "Alex Johnson",
    price: "$129",
    category: "Development",
    image: "https://shadcnblocks.com/images/block/placeholder-3.svg",
    icon: <GitBranch className="w-8 h-8 text-primary" strokeWidth={1} />,
  },
  {
    title: "Organized Study",
    description: "Keep your learning structured.",
    advisor: "Emily Clark",
    price: "$89",
    category: "Organization",
    image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
    icon: <List className="w-8 h-8 text-primary" strokeWidth={1} />,
  },
  {
    title: "Creative Coding",
    description: "Unleash your creativity with code.",
    advisor: "Michael Lee",
    price: "$199",
    category: "Design",
    image: "https://shadcnblocks.com/images/block/placeholder-5.svg",
    icon: <WandSparkles className="w-8 h-8 text-primary" strokeWidth={1} />,
  },
  {
    title: "Spark Your Imagination",
    description: "Explore the limits of your creativity.",
    advisor: "Sarah Brown",
    price: "$179",
    category: "Creativity",
    image: "https://shadcnblocks.com/images/block/placeholder-6.svg",
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
          {coursesData.map((course, index) => (
            <Card key={index} className="w-full relative overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover rounded-t-md"
              />
              <Badge className="absolute top-2 right-2 text-sm">
                {course.category}
              </Badge>
              <CardContent className="text-left">
                <h2 className="mt-4 mb-1 text-lg font-semibold">
                  {course.title}
                </h2>
                <p className="leading-snug text-muted-foreground">
                  {course.description}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Advisor: {course.advisor}
                </p>
                <p className="text-lg font-semibold text-primary mt-1 text-end">
                  {course.price}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button variant="outline" className="mt-8 px-6 py-3">
          View All Courses
        </Button>
      </div>
    </section>
  );
};

export { Courses };
