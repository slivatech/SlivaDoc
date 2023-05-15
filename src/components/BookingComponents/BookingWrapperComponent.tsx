import React from "react";
import SidebarBooking from "./SidebarBooking";
import { FeatureContainer, SearchWrapper } from "./BookingStyle";
import Select from "../Select/Select";
import BaseButton from "../Common/Buttons/BaseButton";
import useMediaQuery from "../../Hooks/useMediaQuery";
import { useFilterDoctors } from "../../Hooks/useFilterDoctors";

const BookingWrapperComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const features = [
    "Ribuan Dokter Berpengalaman",
    "Dari Klinik Hewan Terbaik",
    "Kepastian Jadwal Booking",
  ];
  const tablet = useMediaQuery("(min-width:1024px)");
  const { handleSearch } = useFilterDoctors();
  return (
    <>
      <FeatureContainer>
        {features.map((feature,i) => (
          <div key={i}>
            <img src="/assets/circle-check.svg" />
            <p>{feature}</p>
          </div>
        ))}
      </FeatureContainer>

      <div style={{ display: "flex" }}>
        {tablet ? <SidebarBooking /> : null}

        <div style={{ width: "100%" }}>
          <SearchWrapper>
            <input type="text" placeholder="Dokter Kucing" onChange={(e)=>handleSearch(e.target.value)} />

            <BaseButton
              className="btn"
              text="Search"
              radius="0 5px 5px 0"
              color="#127FFF"
              textColor="white"
            ></BaseButton>
          </SearchWrapper>
          {children}
        </div>
      </div>
    </>
  );
};

export default BookingWrapperComponent;
