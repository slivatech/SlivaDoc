import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import { GridContent, PromoBanners, Row } from "./ResellerDetailStyled";
import React, { useCallback, useRef } from "react";
import { animals, bestSellers } from "./fakeData";
import AnimalCard from "./AnimalCard";

const ResellerMainTab = () => {


  const swiperRef = useRef<SwiperType>();
  return (
    <>
      <PromoBanners>
        {/* <Swiper ref={sliderRef} breakpoints={breakPoints}>
        <SwiperSlide>
          <img width={"100%"} src="/assets/banner-promo-reseller.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img width={"100%"} src="/assets/banner-promo-reseller.png" />
        </SwiperSlide>
        <div onClick={handlePrev}>ADF</div>
        <div onClick={handleNext}>BDDSDS</div>
      </Swiper> */}
        <Swiper
          spaceBetween={15}
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide>
            <img width={"100%"} src="/assets/banner-promo-reseller.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img width={"100%"} src="/assets/banner-promo-reseller.png" />
          </SwiperSlide>
        </Swiper>
        <div className="navBtns">
          <button onClick={() => swiperRef.current?.slidePrev()}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button onClick={() => swiperRef.current?.slideNext()}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </PromoBanners>
      <Row>
        <h2>Terlaris</h2>
        <GridContent>
          {bestSellers.map((animal) => (
            <AnimalCard animal={animal} />
          ))}
        </GridContent>
      </Row>
      <Row>
        <h2 style={{margin:'1.5rem 0'}}>Semua Produk</h2>
        <GridContent>
          {animals.map((animal,i) => (
            <AnimalCard animal={animal} key={i} />
          ))}
        </GridContent>
      </Row>
    </>
  );
};

export default ResellerMainTab;
