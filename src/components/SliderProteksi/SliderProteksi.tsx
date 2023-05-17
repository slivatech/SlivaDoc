import React, { useState } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

import Next from "../../assets/icon/Next.png";
import Prev from "../../assets/icon/Prev.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

interface SliderProps {
  data: {
    id: number;
    img: string;
    title: string;
    desc: string;
  }[];
}

const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const CardSlide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(0deg, #fffefe, #fffefe),
    linear-gradient(0deg, #fffefe, #fffefe), #fffefe;
  border-radius: 10px;
  width: 249px;
  height: 252px;
`;

const ImageWrapper = styled.div`
  width: 114px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DescWrapper = styled.div`
  padding: 10px;
  p {
    font-weight: 400;
    font-size: 10px;
    line-height: 20px;
  }
  h1 {
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
  }
`;

const NavigationWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 10;
  cursor: pointer;
`;

const NavigationPrev = styled.img`
  width: 40px;
  height: 40px;
`;

const NavigationNext = styled.img`
  width: 40px;
  height: 40px;
`;

const PaginationWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    margin: 0 8px;
    border-radius: 50%;
    background: linear-gradient(180deg, #c8d5e4 0%, #90aad1 100%);
    border-radius: 10px;
  }

  .swiper-pagination-bullet-active {
    width: 20px;
    background-color: linear-gradient(180deg, #c8d5e4 0%, #90aad1 100%);
    border-radius: 10px;
  }
`;

const SliderProteksi: React.FC<SliderProps> = ({ data }) => {
  const [swiperIndex, setSwiperIndex] = useState<number>(0);

  const handleSlideChange = (swiper: { activeIndex: number }) => {
    setSwiperIndex(swiper.activeIndex);
  };
  return (
    <SliderWrapper>
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        navigation={{
          prevEl: ".slider-prev",
          nextEl: ".slider-next",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        onSlideChange={handleSlideChange}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <CardSlide>
              <ImageWrapper>
                <Image src={item.img} />
              </ImageWrapper>
              <DescWrapper>
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
              </DescWrapper>
            </CardSlide>
          </SwiperSlide>
        ))}
      </Swiper>
      <NavigationWrapper>
        <NavigationPrev className="slider-prev" src={Prev} />
        <NavigationNext className="slider-next" src={Next} />
      </NavigationWrapper>
      <PaginationWrapper>
        <div className="swiper-pagination"></div>
      </PaginationWrapper>
    </SliderWrapper>
  );
};

export default SliderProteksi;
