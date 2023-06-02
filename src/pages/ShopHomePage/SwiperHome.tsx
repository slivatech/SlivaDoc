import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  
    .swiper-button-next,
    .swiper-button-prev {
        font-weight: 700;
        font-size: 24px;
        color: #211717;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #ffffff;
        width: 47px;
        height: 46px;
        border-radius: 50%;
        @media(max-width: 720px) {
          display: none;
        }
        &:after {
            display: none;
        }
    }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

interface SliderProps {
    images: string[];
  }
  
  const SwiperHome: React.FC<SliderProps>= ({ images}) => {
  return (
    <SliderContainer>
      <Swiper
        pagination={{
          clickable: true,
        }}
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        navigation= {{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        speed={2000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <CardImage src={image} alt='' />
          </SwiperSlide>
        ))}
        <div className="swiper-button-next">
            {'>'}
        </div>
        <div className="swiper-button-prev">
            {'<'}
        </div>
      </Swiper>
    </SliderContainer>
  );
};

export default SwiperHome;