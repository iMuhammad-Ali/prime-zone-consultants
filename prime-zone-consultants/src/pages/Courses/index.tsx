import CourseCard from "~/components/Cards/CourseCard";
import { useAppDispatch, useAppSelector } from "~/hooks/redux";
import Departments from "./Departments";
import Qualifications from "./Qualifications";
import { useLocation } from "react-router";
import { useEffect } from "react";
import {
  setSelectedDepartment,
  setSelectedQualification,
} from "~/store/universities/coursesSlice";

const Courses = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedQualification = searchParams.get("qualification");
  const selectedDepartment = searchParams.get("department");

  const { filteredCourses } = useAppSelector((state) => state.course);

  useEffect(() => {
    if (selectedQualification) {
      dispatch(setSelectedQualification(selectedQualification));
    }
    if (selectedDepartment) {
      dispatch(setSelectedDepartment(selectedDepartment));
    }
  }, [selectedQualification, selectedDepartment]);

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
      {!selectedDepartment && !selectedQualification ? (
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Qualifications />
          <Departments />
        </div>
      ) : filteredCourses?.length > 0 ? (
        <div className="grid grid-cols-3 gap-x-5 gap-y-8 mt-5">
          {filteredCourses.map((course: any) => (
            <CourseCard key={course.id} course={course} dark />
          ))}
        </div>
      ) : (
        <p className="text-center mt-8 text-xl">No courses found</p>
      )}
    </section>
  );
};

export default Courses;
