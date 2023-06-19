import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  setCity,
  setYearsOfExperienceRange,
  setTerm,
  setDay,
  // setMaxPrice,
  // setMinPrice,
} from "../features/filterSlices/filterSlice";
import { doctors } from "../components/BookingComponents/fakeData";
import { useAppSelector } from "../store/hooks";
import { Doctor } from "../types/typings";
import { LooseValue } from "react-time-picker/dist/cjs/shared/types";
export const useFilterDoctors = () => {
  const dispatch = useDispatch();

  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(doctors);

  const {
    searchTerm,
    city,
    yearsOfExperienceRange,
    priceRange,
    day,
    availableTime: { startTime, endTime },
  } = useAppSelector((state) => state.filter);

  // runs everytime filteredDoctors' values change

  useEffect(() => {
    const filteredValues = handleFilter(
      doctors,
      city,
      yearsOfExperienceRange,
      searchTerm,
      priceRange.min,
      priceRange.max,
      day,
      startTime,
      endTime
    );
    setFilteredDoctors(filteredValues);
  }, [city, searchTerm, yearsOfExperienceRange, priceRange, day]);
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
  const handleDay = (day: string) => {
    console.log(day);

    dispatch(setDay(day));
  };
  const convertToSeconds = (timeValue: LooseValue) => {
    const [hours, minutes] = timeValue?.toString().split(":") as string[];
    return Number(hours) * 60 * 60 + Number(minutes) * 60;
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
    minPrice: number,
    maxPrice: number,
    day: string,
    startTime: LooseValue,
    endTime: LooseValue
  ): Doctor[] => {
    if (
      city === "" &&
      yearsOfExperienceRange === "" &&
      searchText &&
      "" &&
      day === ""
    )
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
      const priceMatches = doctor.price >= minPrice && doctor.price <= maxPrice;
      const dayMatches = day === "" || doctor.availableDays.includes(day);
      const timeMatches =
        startTime === "" ||
        endTime === "" ||
        (convertToSeconds(doctor.availableTime?.startTime) >=
          convertToSeconds(startTime) &&
          convertToSeconds(doctor.availableTime?.endTime) <=
            convertToSeconds(endTime));
      return (
        cityMatches &&
        yearsOfExperienceMatches &&
        searchMatches &&
        priceMatches &&
        dayMatches &&
        timeMatches
      );
    });
  };

  return {
    handleCityChange,
    handleYearsOfExperienceChange,
    filteredDoctors,
    handleSearch,
    handleDay,
  };
};
