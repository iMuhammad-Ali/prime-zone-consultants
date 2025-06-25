import { FC } from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Link } from "react-router-dom";
import { Clock, GraduationCap, Languages, University } from "lucide-react";
import universitiesData from "~/data/universities.json";
import departmentsData from "~/data/departments.json";
import DiscountLabel from "../discount-label";

type CourseCardProps = {
  course: any;
  dark?: boolean;
};

const CourseCard: FC<CourseCardProps> = ({ course, dark }) => {
  const courseUniversity = universitiesData.find(
    (uni) => uni.id === course.university
  )!;
  const courseDepartment = departmentsData.find(
    (dep) => dep.id === course.department
  )!;

  return (
    <Link to={`/courses/${course.id}`}>
      <Card
        className={`h-full hover:scale-[102%] duration-300 hover:border cursor-pointer w-full relative overflow-hidden ${
          !dark && "bg-white"
        }`}
      >
        <DiscountLabel discount={course.discount} />
        <div className="flex items-center justify-center bg-gray-200 text-background/75 font-bold text-6xl w-full h-40 object-cover rounded-t-md p-4">
          {courseUniversity?.logo ? (
            <img src={courseUniversity?.logo} className="h-full rounded-full" />
          ) : (
            course.courseCode
          )}
        </div>
        <Badge
          className={`absolute top-2 left-2 text-sm cursor-default hover:bg-foreground ${
            dark && "bg-background text-foreground hover:bg-background"
          }`}
        >
          {courseDepartment.name}
        </Badge>
        <CardContent className="mt-4 flex flex-col justify-between h-full">
          <div className="space-y-2">
            <div className="line-clamp-3 text-lg font-medium break-words md:text-xl lg:text-2xl">
              {course.name}
            </div>
            <div className="line-clamp-2 text-sm text-muted-foreground md:text-base">
              {course.summary}
            </div>
            <div className="flex justify-between gap-3 text-sm py-2">
              <p className="text-green-500 font-semibold">
                Discounted Fee: {course.discountedFee}
              </p>
              <p className="text-muted-foreground">
                Actual Fee: {course.actualFee}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <University className="flex-shrink-0" />
              {courseUniversity.name}
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="flex-shrink-0" />
              {course.qualification}
            </div>
            <div className="flex items-center gap-2">
              <Languages className="flex-shrink-0" />
              {course.languages.join(", ")}
            </div>
            <div className="flex items-center gap-2">
              <Clock />
              {course.duration}
            </div>
          </div>
          {/* <div className="flex items-center text-sm mt-5">
            Read more{" "}
            <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
          </div> */}
        </CardContent>
        {/* <CardContent className="text-left">
          <h2
            className={`mt-4 mb-1 text-lg font-semibold ${
              dark ? "text-foreground" : "text-background"
            }`}
          >
            {course.title}
          </h2>
          <p
            className={`leading-snug 
              ${dark ? "text-muted-foreground" : "text-muted"}
          `}
          >
            {course.description}
          </p>
          <p
            className={`text-sm mt-2
              ${dark ? "text-muted-foreground" : "text-gray-600"}

          }`}
          >
            Advisor: {course.advisor}
          </p>
          <p
            className={`text-lg font-semibold mt-1 text-end ${
              dark ? "text-foreground" : "text-background"
            }`}
          >
            {course.price}
          </p>
        </CardContent> */}
      </Card>
    </Link>
  );
};

export default CourseCard;
