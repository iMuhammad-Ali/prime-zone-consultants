import { createSlice } from "@reduxjs/toolkit";
import universitiesData from "~/data/universities.json";

interface ItemState {
  universities: any[];
  filteredUniversities: any[];
  selectedCountry: string | null;
}

const initialState: ItemState = {
  universities: universitiesData,
  filteredUniversities: universitiesData,
  selectedCountry: null,
};

const universitiesSlice = createSlice({
  name: "universities",
  initialState,
  reducers: {
    setSelectedCountry(state, action) {
      const selectedCountry = action.payload;
      state.selectedCountry = selectedCountry;

      state.filteredUniversities = state.universities.filter(
        (university) =>
          university.country?.toLowerCase().replace(/\s+/g, "-") ===
          selectedCountry.toLowerCase().replace(/\s+/g, "-")
      );
    },
  },
});

export const { setSelectedCountry } = universitiesSlice.actions;

export default universitiesSlice.reducer;
