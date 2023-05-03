import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../../store/store';
import { doctors } from "../../components/BookingComponents/fakeData";



interface FilterState {
    city: string;
    yearsOfExperienceRange:string;
    doctors:Doctor[]
  }
  


const initialState:FilterState = {
  city: "",
  yearsOfExperienceRange: '',
  doctors:doctors
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers:{
    setCity(state,action:PayloadAction<string>) {
        state.city = action.payload
    },
    setYearsOfExperienceRange(state, action: PayloadAction<string>) {
      state.yearsOfExperienceRange = action.payload;
    },
    filterDoctors(state, action: PayloadAction<Doctor[]>) {
      state.doctors = action.payload;
    },
  }
});

export const { setCity, setYearsOfExperienceRange, filterDoctors } = filterSlice.actions;

export const selectCity = (state: RootState) => state.filter.city;
export const selectYearsOfExperience = (state: RootState) => state.filter.yearsOfExperienceRange;
export const selectDoctor = (state: RootState) => state.filter.doctors;

export default filterSlice.reducer;