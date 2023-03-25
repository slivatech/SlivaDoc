import React, { FC } from "react";
// import styled from "styled-components";
import RowHeader from "../RowHeader";
import SwiperWrapper from "../SwiperWrapper/SwiperWrapper";
import { servicesList } from "./data";
import { ServiceButton, ServiceGrid, ServiceStyle } from "./ServiceStyle";
import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
import styled from "styled-components";

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

const ServiceImg = styled.img`
  border-radius: 5px;
  height: 175px;
  object-fit: cover;
  width: 100%;
  @media (max-width:768px) {
    height:125px;
  }

  @media(max-width:640px) {
    width:100px;
  }
`;

const ServiceSection: FC = () => {
  const breakPoints = {
    0: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 25,
    },
    1280: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  };
  return (
    <ServiceStyle>
      <RowHeader title="Layanan SlivaDoc" />

      <SwiperWrapper breakPoints={breakPoints}>
        {servicesList.map((service) => (
          <SwiperSlide>
            <ServiceButton>
              <ServiceImg
         
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
