import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface FilterState {
  city: string;
  yearsOfExperienceRange: string;
  searchTerm: string;
  doctors: Doctor[];
}

const initialState: FilterState = {
  city: "",
  yearsOfExperienceRange: "",
  searchTerm: "",
  doctors: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    setTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setYearsOfExperienceRange(state, action: PayloadAction<string>) {
      state.yearsOfExperienceRange = action.payload;
    },
    filterDoctors(state, action: PayloadAction<Doctor[]>) {
      state.doctors = action.payload;
    },
  },
});

export const { setCity, setYearsOfExperienceRange,setTerm ,filterDoctors } =
  filterSlice.actions;

export const selectCity = (state: RootState) => state.filter.city;
export const selectYearsOfExperience = (state: RootState) =>
  state.filter.yearsOfExperienceRange;
export const selectDoctor = (state: RootState) => state.filter.doctors;

export default filterSlice.reducer;
