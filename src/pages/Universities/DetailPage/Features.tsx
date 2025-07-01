import { BookCopy, List } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Card } from "~/components/ui/card";
import coursesData from "~/data/courses.json";
import CourseCard from "~/components/Cards/CourseCard";
import Overview from "./Overview";

const Features = ({ university }: any) => {
  const universityCourses = coursesData.filter((course) =>
    course.university.includes(university.id)
  );

  const features = [
    {
      id: "feature-1",
      title: "Overview",
      icon: <List className="w-full h-full" />,
      content: <Overview university={university} />,
    },
    {
      id: "feature-2",
      title: "Courses",
      icon: <BookCopy className="w-full h-full" />,
      content: (
        <>
          {universityCourses?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {universityCourses.map((course: any) => (
                <div className="border rounded-xl">
                  <CourseCard course={course} dark />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center my-8 text-xl">No courses</p>
          )}
        </>
      ),
    },
  ];

  return (
    <Tabs defaultValue={features[0].id}>
      <TabsList className="px-0 flex justify-start h-auto gap-4 bg-background flex-wrap mb-4">
        {features.map((feature) => (
          <TabsTrigger
            key={feature.id}
            value={feature.id}
            className="min-w-[150px] flex flex-col items-start justify-start gap-1 rounded-md border-2 p-4 text-left whitespace-normal text-primary hover:border-primary/40 hover:opacity-100 opacity-75 data-[state=active]:opacity-100  data-[state=active]:scale-[105%] data-[state=active]:shadow-2xl data-[state=active]:border-secondary data-[state=active]:bg-secondary"
          >
            <div className="flex w-full items-center flex-col gap-2">
              <span className="flex w-12 h-12 items-center justify-center rounded-full">
                {feature.icon}
              </span>
              <p className="text-lg font-semibold md:text-2xl lg:text-xl">
                {feature.title}
              </p>
            </div>
          </TabsTrigger>
        ))}
      </TabsList>

      {features.map((feature) => (
        <TabsContent key={feature.id} value={feature.id}>
          <Card className="w-full rounded p-5 space-y-5">
            {feature.content}
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default Features;
