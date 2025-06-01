import { FC } from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Course } from "~/types/course";
import { Link } from "react-router-dom";

type CourseCardProps = {
  course: Course;
  dark?: boolean;
};

const CourseCard: FC<CourseCardProps> = ({ course, dark }) => {
  return (
    <Link to={`/courses/${course.id}`}>
      <Card
        className={`cursor-pointer w-full relative overflow-hidden border-0 ${
          !dark && "bg-white"
        }`}
      >
        {/* <img
          src={course.image}
          alt={course.title}
          className="w-full h-40 object-cover rounded-t-md"
        /> */}
        <div className="flex items-center justify-center bg-gray-200 text-background/75 font-bold text-6xl w-full h-40 object-cover rounded-t-md">
          {course.courseCode}
        </div>
        <Badge
          className={`absolute top-2 right-2 text-sm ${
            dark && "bg-background text-foreground"
          }`}
        >
          {course.category}
        </Badge>
        <CardContent className="text-left">
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
        </CardContent>
      </Card>
    </Link>
  );
};

export default CourseCard;
