import React from "react";
import {
  ConsultationStyle,
  FeatureContainer,
  SearchWrapper,
  TimeDropdownContainer,
} from "./ConsultationStyle";
import Select from "../Select/Select";
import BaseButton from "../Common/Buttons/BaseButton";
import { CategoryBox } from "../TabSection/TabSectionStyle";
import RadioButton from "../Common/Buttons/RadioButton";
import { cities, yearsOfExperience } from "./fakeData";
import DoctorResultsList from "./DoctorResultsList";

const ConsultationComponent = () => {
  const features = [
    "Ribuan Dokter Berpengalaman",
    "Dari Klinik Hewan Terbaik",
    "Kepastian Jadwal Booking",
  ];

  return (
    <ConsultationStyle>
      <h1>Konsultasi Mudah dan Cepat</h1>
      <FeatureContainer>
        {features.map((feature) => (
          <div>
            <img src="/assets/circle-check.svg" />
            <p>{feature}</p>
          </div>
        ))}
      </FeatureContainer>
      <SearchWrapper>
        <Select
          label="Seluruh Lokasi"
          radius="5px 0 0 5px"
          border="0.5px solid rgba(153, 146, 146, 0.7)"
          values={["Medan", "Jakarta"]}
          iconStart={<img src="/assets/location-4.svg" />}
          iconEnd={<img src="/assets/track.svg" />}
        />
        <input type="text" placeholder="Dokter Kucing" />

        <BaseButton
          className="btn"
          text="Search"
          radius="0 5px 5px 0"
          color="#127FFF"
          textColor="white"
        ></BaseButton>
      </SearchWrapper>
      <div style={{ display: "flex", marginTop: "1rem", gap: "2rem" }}>
        <div style={{ flex: 0.4 }}>
          <CategoryBox>
            <Select
              border=" 0.5px solid rgba(153, 146, 146, 0.7)"
              label="Pilih Kota"
              borderType="bottom"
              values={cities}
              iconEnd={<img src="/assets/arrow_dropdown.svg" />}
            />

            {cities.map((radio, i) => (
              <RadioButton key={i} value={radio} />
            ))}
          </CategoryBox>
          <CategoryBox>
            <Select
              border=" 0.5px solid rgba(153, 146, 146, 0.7)"
              label="Pengalaman praktik"
              borderType="bottom"
              values={yearsOfExperience}
              iconEnd={<img src="/assets/arrow_dropdown.svg" />}
            />

            {yearsOfExperience.map((radio, i) => (
              <RadioButton key={i} value={radio} />
            ))}
          </CategoryBox>
          <CategoryBox>dfsfd</CategoryBox>
        </div>
        <div style={{ flex: 0.6 }}>
          <h1 style={{ fontSize: "20px", fontWeight: 400 }}>
            Nikmati Layanan Bersama Dokter Hewan Terbaik
          </h1>
          <TimeDropdownContainer>
            <Select
              border=" 0.5px solid rgba(153, 146, 146, 0.7)"
              label="Pilih Hari"
              values={["Senin", "Selasa", "Rabu", "Kamis", "Jumat"]}
              radius="5px"
              iconEnd={<img src="/assets/arrow_dropdown.svg" />}
            />
            <Select
              border=" 0.5px solid rgba(153, 146, 146, 0.7)"
              label="Pilih Jam"
              values={["08.00 - 09.00", "14.00 - 15.00", "20.00 - 21.00"]}
              radius="5px"
              iconEnd={<img src="/assets/arrow_dropdown.svg" />}
            />
          </TimeDropdownContainer>
          <p style={{color:"rgba(28, 28, 28, 0.7)",fontWeight:500}}>Menampilkan <span style={{fontWeight:700,color:"rgba(59, 32, 232, 0.7) 32, 232)"}}>150</span> hasil</p>
          <DoctorResultsList />
        </div>
      </div>
    </ConsultationStyle>
  );
};

export default ConsultationComponent;
