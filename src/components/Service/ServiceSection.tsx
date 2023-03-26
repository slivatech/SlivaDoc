import React, { FC } from "react";
import RowHeader from "../RowHeader";
import SwiperWrapper from "../SwiperWrapper/SwiperWrapper";
import { servicesList } from "./data";
import { ServiceButton, ServiceStyle } from "./ServiceStyle";
import "swiper/css";
import { SwiperSlide } from "swiper/react";
import styled from "styled-components";

const ServiceImg = styled.img`
  border-radius: 5px;
  height: 175px;
  object-fit: cover;
  width: 100%;
  @media (max-width: 768px) {
    height: 125px;
  }

  @media (max-width: 640px) {
    width: 100px;
  }

  @media (max-width: 400px) {
    width: 80px;
    height: 80px;
  }
`;

const ServiceSection: FC = () => {
  const breakPoints = {
    0: {
      slidesPerView: 4,
      spaceBetween: 100,
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
              <ServiceImg src={service.imageSrc} alt="service" />
              <p>{service.title}</p>
            </ServiceButton>
          </SwiperSlide>
        ))}
      </SwiperWrapper>
    </ServiceStyle>
  );
};

export default ServiceSection;
