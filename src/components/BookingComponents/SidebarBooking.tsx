import React, { useEffect, useState } from "react";
import { cities, yearsOfExperience } from "./fakeData";
import Select from "../Select/Select";
import { CategoryBox } from "../TabSection/TabSectionStyle";
import RadioButton from "../Common/Buttons/RadioButton";
import { PriceInput, SearchWrapper } from "./BookingStyle";
import MultiRangeSlider from "../Common/MultiRangeSlider/MultiRangeSlider";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useFilterDoctors } from "../../hooks/useFilterDoctors";
import { useAppSelector } from "../../store/hooks";
import { doctors } from "./fakeData";

const SidebarBooking = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  // const [city, setCity] = useState<string>("Medan");
  // const [experience, setExperience] = useState<string>("");
  // const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setCity(e.target.value);
  // };
  // const handleExpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setExperience(e.target.value);
  // };

  const city = useAppSelector(state=>state.filter.city);
  const experience = useAppSelector(state=>state.filter.yearsOfExperienceRange);
  const { handleCityChange,handleYearsOfExperienceChange } = useFilterDoctors();
  const tablet = useMediaQuery("(min-width:1024px)");


  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* <SearchWrapper tablet={true}>
          {tablet ? (
            <Select
              label="Seluruh Lokasi"
              radius="5px 0 0 5px"
              border="0.5px solid rgba(153, 146, 146, 0.7)"
              values={["Medan", "Jakarta"]}
              iconStart={<img src="/assets/location-4.svg" />}
              iconEnd={<img src="/assets/track.svg" />}
            />
          ) : null}

          <input type="text" placeholder="Dokter Kucing" />

          <BaseButton
            className="btn"
            text="Search"
            radius="0 5px 5px 0"
            color="#127FFF"
            textColor="white"
          ></BaseButton>
        </SearchWrapper> */}
                  {tablet ? (
            <Select
            padding=".4rem 1rem"
              label="Seluruh Lokasi"
              radius="5px 0 0 5px"
              border="0.5px solid rgba(153, 146, 146, 0.7)"
              values={["Medan", "Jakarta"]}
              iconStart={<img src="/assets/location-4.svg" />}
              iconEnd={<img src="/assets/track.svg" />}
            />
          ) : null}
        <div>
          <CategoryBox>
            <Select
              border=" 0.5px solid rgba(153, 146, 146, 0.7)"
              label="Pilih Kota"
              padding=" 0"
              borderType="bottom"
              values={cities}
              iconEnd={<img src="/assets/arrow_dropdown.svg" />}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: ".5rem",
                fontSize: "10px",
                padding: "0 .3rem",
              }}
            >
              <img style={{ width: "16px" }} src="/assets/my-location.svg" />
              <label>Gunakan Lokasi Saya</label>
            </div>

            {cities.map((radio, i) => (
              <RadioButton
                label={radio}
                key={i}
                value={radio}
                checked={city === radio}
                handleChange={()=>handleCityChange(radio)}
              />
            ))}
          </CategoryBox>
          <CategoryBox>
            <Select
              border=" 0.5px solid rgba(153, 146, 146, 0.7)"
              label="Pengalaman praktik"
              borderType="bottom"
              padding="0"
              values={yearsOfExperience}
              iconEnd={<img src="/assets/arrow_dropdown.svg" />}
            />

            {yearsOfExperience.map((radio, i) => (
              <RadioButton
                label={radio}
                key={i}
                value={radio}
                checked={radio === experience}
                handleChange={()=>handleYearsOfExperienceChange(radio)}
              />
            ))}
          </CategoryBox>
          <CategoryBox>
            <Select
              border=" 0.5px solid rgba(153, 146, 146, 0.7)"
              label="Harga"
              padding="0"
              borderType="bottom"
              values={[10000, 20000, 50000, 90000]}
              iconEnd={<img src="/assets/arrow_dropdown.svg" />}
            />
            <div
              style={{ display: "flex", gap: ".5rem", alignItems: "center" }}
            >
              <PriceInput>
                <span>Rp</span>
                <input
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                  min={0}
                  max={1000000}
                  type="number"
                  value={minPrice}
                />
              </PriceInput>
              <span>-</span>
              <PriceInput>
                <span>Rp</span>
                <input
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  min={0}
                  max={1000000}
                  type="number"
                  value={maxPrice}
                />
              </PriceInput>
            </div>
            <MultiRangeSlider
              trackColor="#777777"
              thumbColor="#777777"
              step={100000}
              min={0}
              max={1000000}
              
              onChange={({ min, max }) => {
                setMinPrice(min);
                setMaxPrice(max);
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "rgba(28, 28, 28, 0.7)",
                fontSize: "8px",
                paddingTop: ".5rem",
              }}
            >
              <p>Rp.{minPrice}</p>
              <p>Rp.{maxPrice}</p>
            </div>
          </CategoryBox>
        </div>
      </div>
    </div>
  );
};

export default SidebarBooking;
