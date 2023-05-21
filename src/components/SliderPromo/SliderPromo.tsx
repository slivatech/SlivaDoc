import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { ReactComponent as NextIcon } from "../../assets/icon/NextPromo.svg";
import { ReactComponent as PrevIcon } from "../../assets/icon/PrevPromo.svg";
import "swiper/swiper.min.css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

const SliderContainer = styled.div`
  width: 100%;
  height: 365px;
  display: flex;
  .swiper-promo {
    width: 100%;

    .swiper-button-next,
    .swiper-button-prev {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      width: 47px;
      height: 46px;
      border-radius: 50%;

      svg {
        width: 17px;
        height: 20px;
      }
    }
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
interface SliderProps {
    images: string[];
  }
  
  const SliderPromo: React.FC<SliderProps>= ({ images }) => {
  return (
    <SliderContainer>
      <Swiper
        className="swiper-promo"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <CardImage src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
        <div className="swiper-button-next">
          <NextIcon />
        </div>
        <div className="swiper-button-prev">
          <PrevIcon />
        </div>
      </Swiper>
    </SliderContainer>
  );
};

export default SliderPromo;
