import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { LooseValue } from "react-time-picker/dist/cjs/shared/types";
import { Doctor } from "../../types/typings";

interface FilterState {
  city: string;
  yearsOfExperienceRange: string;
  searchTerm: string;
  priceRange: {
    min: number;
    max: number;
  };
  day: string;
  doctors: Doctor[];
  availableTime: {
    startTime: LooseValue;
    endTime: LooseValue;
  };
}

const initialState: FilterState = {
  city: "",
  yearsOfExperienceRange: "",
  searchTerm: "",
  priceRange: {
    min: 0,
    max: 1000000,
  },
  day: "",
  doctors: [],
  availableTime: {
    startTime: "",
    endTime: "",
  },
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
    setMinPrice(state, action: PayloadAction<number>) {
      state.priceRange = { ...state.priceRange, min: action.payload };
    },
    setMaxPrice(state, action: PayloadAction<number>) {
      state.priceRange = { ...state.priceRange, max: action.payload };
    },
    setDay(state, action: PayloadAction<string>) {
      state.day = action.payload;
    },
    setStartTime(state, action: PayloadAction<LooseValue>) {
      state.availableTime = {
        ...state.availableTime,
        startTime: action.payload,
      };
    },
    setEndTime(state, action: PayloadAction<LooseValue>) {
      state.availableTime = { ...state.availableTime, endTime: action.payload };
    },
  },
});

export const {
  setCity,
  setMaxPrice,
  setMinPrice,
  setYearsOfExperienceRange,
  setTerm,
  setDay,
  setEndTime,
  setStartTime,
  filterDoctors,
} = filterSlice.actions;

export const selectCity = (state: RootState) => state.filter.city;
export const selectYearsOfExperience = (state: RootState) =>
  state.filter.yearsOfExperienceRange;
export const selectDoctor = (state: RootState) => state.filter.doctors;

export default filterSlice.reducer;
