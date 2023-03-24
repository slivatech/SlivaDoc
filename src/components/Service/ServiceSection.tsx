import React, { FC } from "react";
// import styled from "styled-components";
import RowHeader from "../RowHeader";
import SwiperWrapper from "../SwiperWrapper/SwiperWrapper";
import { servicesList } from "./data";
import { ServiceButton, ServiceGrid, ServiceStyle } from "./ServiceStyle";
import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";

// const StyledHref = styled.a`
//   font-weight: 500;
//   padding: 8px 16px;
//   font-size: 12px;
//   cursor: pointer;
//   color: #454467;
//   background-color: #e7ebf0;
//   font-weight: 700;
//   box-shadow: 2px -2px 18px -10px rgba(0, 0, 0, 0.61);
//   -webkit-box-shadow: 2px -2px 18px -10px rgba(0, 0, 0, 0.61);
//   -moz-box-shadow: 2px -2px 18px -10px rgba(0, 0, 0, 0.61);
// `;

const ServiceSection: FC = () => {
  return (
    <ServiceStyle>
      <RowHeader title="Layanan SlivaDoc" />

      <SwiperWrapper slides={6} spacing={25}>
        {servicesList.map((service) => (
          <SwiperSlide>
            <ServiceButton>
              <img
                style={{
                  borderRadius: "5px",
                  height:"175px",
                  objectFit: "cover",
                  width: "100%",
                }}
                src={service.imageSrc}
                alt="service"
              />
              <p>{service.title}</p>
            </ServiceButton>
          </SwiperSlide>
        ))}
      </SwiperWrapper>
    </ServiceStyle>
  );
};

export default ServiceSection;
