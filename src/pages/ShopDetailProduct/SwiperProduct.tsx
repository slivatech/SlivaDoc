import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import styled from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const CardImage = styled.img<{height: string}>(
  ({height}) =>`
  width: 100%;
  height: ${height ? height : "100%"};
  object-fit: cover;
  border-radius: 5px;
`);

interface SliderProps {
    images?: string[];
  }

const SwiperProduct: React.FC<SliderProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <SliderContainer>
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <CardImage height="500px" src={image} alt='' />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
      >
       {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <CardImage height="100px" src={image} alt='' />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
}

export default SwiperProduct;
