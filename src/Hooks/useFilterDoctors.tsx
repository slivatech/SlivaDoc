import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  setCity,
  setYearsOfExperienceRange,
  setTerm,
} from "../features/filterSlices/filterSlice";
import { doctors } from "../components/BookingComponents/fakeData";
import { useAppSelector } from "../store/hooks";
export const useFilterDoctors = () => {
  const dispatch = useDispatch();

  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(doctors);

  const { searchTerm, city, yearsOfExperienceRange } = useAppSelector(
    (state) => state.filter
  );

  // runs everytime filteredDoctors' values change

  useEffect(() => {
    const filteredValues = handleFilter(
      doctors,
      city,
      yearsOfExperienceRange,
      searchTerm
    );
    setFilteredDoctors(filteredValues);
  }, [city,searchTerm,yearsOfExperienceRange]);
  const handleCityChange = (city: string) => {
    console.log(city);
    dispatch(setCity(city));
  };

  const handleYearsOfExperienceChange = (range: string) => {
    dispatch(setYearsOfExperienceRange(range));
  };

  const handleSearch = (term: string) => {
    dispatch(setTerm(term));
  };

  const handleFilter = (
    doctors: Doctor[],
    city: string,
    yearsOfExperienceRange: string,
    searchText: string
  ): Doctor[] => {
    if (city === "" && yearsOfExperienceRange === "" && searchText && "")
      return doctors;
    return doctors.filter((doctor) => {
      const cityMatches = city === "" || doctor.location === city;
      const yearsOfExperienceMatches =
        yearsOfExperienceRange === "" ||
        (yearsOfExperienceRange === "Dibawah 5 tahun" &&
          doctor.yearsOfExperience < 5) ||
        (yearsOfExperienceRange === "5 - 10 tahun" &&
          doctor.yearsOfExperience >= 5 &&
          doctor.yearsOfExperience <= 10) ||
        (yearsOfExperienceRange === "Di atas 10 tahun" &&
          doctor.yearsOfExperience > 10);
      const searchMatches =
        searchText === "" ||
        doctor.name.toLowerCase().includes(searchText.toLowerCase()) ||
        doctor.role.toLowerCase().includes(searchText.toLowerCase());
      // doctor.company.toLowerCase().includes(searchText.toLowerCase()) ||
      // doctor.email.toLowerCase().includes(searchText.toLowerCase());
      return cityMatches && yearsOfExperienceMatches && searchMatches;
    });
  };

  return {
    handleCityChange,
    handleYearsOfExperienceChange,
    filteredDoctors,
    handleSearch,
  };
};
