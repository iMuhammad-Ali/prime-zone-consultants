import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import universitiesData from "~/data/universities.json";

//get current country from url or route params

// Define scholarship filter options
type ScholarshipFilter = "all" | "with" | "without";

interface UniversityState {
  universities: any[];
  filteredUniversities: any[];
  searchTerm: string;
  selectedCountry: string | null;
  selectedDep: string | null;
  scholarshipFilter: ScholarshipFilter;
  qualifications: any[];
}

// Initial state loads full data
const initialState: UniversityState = {
  universities: universitiesData,
  filteredUniversities: universitiesData,
  searchTerm: "",
  selectedCountry: null,
  selectedDep: null,
  scholarshipFilter: "all",
  qualifications: [], // Start with no qualification filter
};
// Helper: apply all filters to full list
const applyFilters = (state: UniversityState): any[] => {
  return state.universities.filter((u) => {
    //  text search
    if (
      state.searchTerm &&
      !u.name.toLowerCase().includes(state.searchTerm.toLowerCase())
    ) {
      return false;
    }

    //  country filter (normalize slug)
    if (state.selectedCountry) {
      const uniSlug = u.country?.toLowerCase().replace(/\s+/g, "-");
      const selSlug = state.selectedCountry.toLowerCase().replace(/\s+/g, "-");
      if (uniSlug !== selSlug) return false;
    }

    //Department Filter
    if (state.selectedDep && !u.departments?.includes(state.selectedDep)) {
      return false;
    }

    //  scholarship filter
    if (state.scholarshipFilter === "with" && !u.scholarship) {
      return false;
    }
    if (state.scholarshipFilter === "without" && u.scholarship) {
      return false;
    }

    //  qualifications (any match)
    if (
      state.qualifications.length > 0 &&
      !state.qualifications.some((q) => u.qualification?.includes(q.name))
    ) {
      return false;
    }

    return true;
  });
};

const universitiesSlice = createSlice({
  name: "universities",
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
      state.filteredUniversities = applyFilters(state);
    },
    setSelectedCountry(state, action: PayloadAction<string | null>) {
      state.selectedCountry = action.payload;
      state.filteredUniversities = applyFilters(state);
    },
    setSelectedDep(state, action: PayloadAction<string | null>) {
      state.selectedDep = action.payload;
      state.filteredUniversities = applyFilters(state);
    },
    setScholarshipFilter(state, action: PayloadAction<ScholarshipFilter>) {
      state.scholarshipFilter = action.payload;
      state.filteredUniversities = applyFilters(state);
    },
    setQualifications(state, action: PayloadAction<string[]>) {
      state.qualifications = action.payload; // Should be array of selected qualification names
      state.filteredUniversities = applyFilters(state);
    },
    // Optional: reset all filters
    resetFilters(state) {
      state.searchTerm = "";
      state.selectedCountry = null;
      state.selectedDep = null;
      state.scholarshipFilter = "all";
      state.qualifications = [];
      // state.filteredUniversities = applyFilters(state);
    },
  },
});

export const {
  setSearchTerm,
  setSelectedCountry,
  setSelectedDep,
  setScholarshipFilter,
  setQualifications,
  resetFilters,
} = universitiesSlice.actions;

export default universitiesSlice.reducer;
