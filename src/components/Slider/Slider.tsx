import React, { useState, useEffect, useRef } from 'react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

interface SliderProps {
  images: { image: string }[];
}

const SwiperContainer = styled.div`
width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SwiperWrapper = styled.div`
  width: 405px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h1{
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
  }
  h3{
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size:14px;
    text-align:center;
  }

  .mySwiper{
    display: flex;
    flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 104px;
  height: 104px;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .swiper-pagination-bullet {
    width: 40px;
    height: 40px;
    background-color:#ECE4E4;
    color: #1C1C1CB2;
    border-radius: 50%;
    margin-right: 35px;
    cursor: pointer;
    display:inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;

    &:hover {
      background-color: #5296e5;
      color: white;
    }
  }

  .swiper-pagination-bullet-active {
    background-color: #5296e5;
    color: white;
  }
`;

const Image = styled.img`
  width: 104px;
  height: 104px;
  border-radius: 50%;
`;

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(activeIndex);
    }
  }, [activeIndex]);

  const handleClickBullet = (index: number) => {
    setActiveIndex(index);
  };

  const updateSwiper = (swiper: SwiperCore) => {
    swiperRef.current = swiper;
  };

  return (
    <SwiperContainer>
      <SwiperWrapper>
        <h1>Tanya Dokter di SlivaDoc</h1>
        <h3>Layanan telemedisin yang siap siaga untuk bantu kamu hidup lebih sehat</h3>
        <Swiper
          autoplay={{ delay: 3000 }}
          spaceBetween={1}
          centeredSlides={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={(swiper) => updateSwiper(swiper)}
          pagination={false}
          className="mySwiper"
        >
       
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image src={image.image} alt={`Slider ${index}`} />
            </SwiperSlide>
          ))}
          
        </Swiper>
        <h3>Dokter akan segera menerima permintaan chat kamu</h3>
      </SwiperWrapper>
      <div>
        
      </div>
      <PaginationContainer>
        <div className="swiper-pagination">
          {images.map((_, index) => (
            <span
              key={index}
              className={`swiper-pagination-bullet ${
                activeIndex === index ? 'swiper-pagination-bullet-active' : ''
              }`}
              onClick={() => handleClickBullet(index)}
            >
              {index + 1}
            </span>
          ))}
        </div>
      </PaginationContainer>
    </SwiperContainer>
  );
};

export default Slider;
