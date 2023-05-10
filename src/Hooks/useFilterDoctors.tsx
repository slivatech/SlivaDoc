import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  setCity,
  setYearsOfExperienceRange,
  setTerm,
  setMaxPrice,
  setMinPrice
} from "../features/filterSlices/filterSlice";
import { doctors } from "../components/BookingComponents/fakeData";
import { useAppSelector } from "../store/hooks";
export const useFilterDoctors = () => {
  const dispatch = useDispatch();

  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(doctors);

  const { searchTerm, city, yearsOfExperienceRange,priceRange } = useAppSelector(
    (state) => state.filter
  );

  // runs everytime filteredDoctors' values change

  useEffect(() => {
    const filteredValues = handleFilter(
      doctors,
      city,
      yearsOfExperienceRange,
      searchTerm,
      priceRange.min,
      priceRange.max
    );
    setFilteredDoctors(filteredValues);
  }, [city,searchTerm,yearsOfExperienceRange,priceRange]);
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

  // const handlePriceRangeChange = (min: number, max: number) => {
  //   dispatch(setMinPrice(min));
  //   dispatch(setMaxPrice(max));
  // };
  const handleFilter = (
    doctors: Doctor[],
    city: string,
    yearsOfExperienceRange: string,
    searchText: string,
    minPrice:number,
    maxPrice:number
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
      const priceMatches =
      doctor.price >= minPrice && doctor.price <= maxPrice;
      return cityMatches && yearsOfExperienceMatches && searchMatches && priceMatches;
    });
  };

  return {
    handleCityChange,
    handleYearsOfExperienceChange,
    filteredDoctors,
    handleSearch,
  };
};
