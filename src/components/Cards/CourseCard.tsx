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
    <Link to="/courses/123">
      <Card
        className={`cursor-pointer w-full relative overflow-hidden border-0 ${
          !dark && "bg-white"
        }`}
      >
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-40 object-cover rounded-t-md"
        />
        <Badge className="absolute top-2 right-2 text-sm">
          {course.category}
        </Badge>
        <CardContent className="text-left">
          <h2 className="mt-4 mb-1 text-lg font-semibold text-background">
            {course.title}
          </h2>
          <p className="leading-snug text-muted">{course.description}</p>
          <p className="text-sm text-gray-600 mt-2">
            Advisor: {course.advisor}
          </p>
          <p className="text-lg font-semibold text-background mt-1 text-end">
            {course.price}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CourseCard;
