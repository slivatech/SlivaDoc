import { useDispatch, useSelector } from "react-redux";
import {
  selectCity,
  selectDoctor,
  selectYearsOfExperience,
  setCity,
  setYearsOfExperienceRange,
  filterDoctors,
} from "../features/filterSlices/filterSlice";
import { doctors } from "../components/BookingComponents/fakeData";
export const useBookingDoctors = () => {
  const dispatch = useDispatch();
  const city = useSelector(selectCity);
  const yearsOfExperience = useSelector(selectYearsOfExperience);

  const handleCityChange = (city: string) => {
    console.log(city);
    dispatch(setCity(city));
    const filteredPeople = filterPeopleByCityAndYearsOfExperience(
      doctors,
      city,
      yearsOfExperience
    );
    dispatch(filterDoctors(filteredPeople));
  };

  const handleYearsOfExperienceChange = (range: string) => {
    console.log(yearsOfExperience);
    dispatch(setYearsOfExperienceRange(range));
    const filteredPeople = filterPeopleByCityAndYearsOfExperience(
      doctors,
      city,
      range
    );
    dispatch(filterDoctors(filteredPeople));
  };

  const filterPeopleByCityAndYearsOfExperience = (
    doctors: Doctor[],
    city: string,
    yearsOfExperienceRange: string
  ): Doctor[] => {
    if (city === "" && yearsOfExperience === "") {
      return doctors;
    } else {
      return doctors.filter((doctor) => {
        const { yearsOfExperience, location: doctorCity } = doctor;
        if (yearsOfExperienceRange === "Dibawah 5 tahun") {
          return (
            doctorCity.toLowerCase().includes(city.toLowerCase()) &&
            yearsOfExperience < 5
          );
        } else if (yearsOfExperienceRange === "5 - 10 tahun") {
          return (
            doctorCity.toLowerCase().includes(city.toLowerCase()) &&
            yearsOfExperience >= 5 &&
            yearsOfExperience <= 10
          );
        } else if (yearsOfExperienceRange === "Di atas 10 tahun") {
          return (
            doctorCity.toLowerCase().includes(city.toLowerCase()) &&
            yearsOfExperience > 10
          );
        } else {
          return doctorCity.toLowerCase().includes(city.toLowerCase());
        }
      });
    }
  };

  return { handleCityChange, handleYearsOfExperienceChange };
};
