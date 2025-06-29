import { createSlice } from "@reduxjs/toolkit";
import coursesData from "~/data/courses.json";

interface ItemState {
  courses: any[];
  filteredCourses: any[];
  selectedQualification: string | null;
  selectedDepartment: string | null;
}

const initialState: ItemState = {
  courses: coursesData,
  filteredCourses: coursesData,
  selectedQualification: null,
  selectedDepartment: null,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setSelectedQualification(state, action) {
      const selectedQualification = action.payload;
      state.selectedQualification = selectedQualification;

      state.filteredCourses = state.courses.filter(
        (course) =>
          course.qualification?.toLowerCase().replace(/\s+/g, "-") ===
          selectedQualification.toLowerCase().replace(/\s+/g, "-")
      );
    },
    setSelectedDepartment(state, action) {
      const selectedDepartment = action.payload;
      state.selectedDepartment = selectedDepartment;

      state.filteredCourses = state.courses.filter(
        (course) => course.department === selectedDepartment
      );
    },
  },
});

export const { setSelectedQualification, setSelectedDepartment } =
  coursesSlice.actions;

export default coursesSlice.reducer;
