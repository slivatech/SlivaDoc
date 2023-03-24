import { FC } from "react";
import Button from "../Button/Button";
import { StyledH3 } from "../FontStyle/Font";
import { GroupButtons } from "../GroupButtons/GroupButtons";
import { OfferCarousel, OfferImage, StyledOffer } from "./OfferStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectFade, EffectCards } from "swiper";

import "swiper/css/effect-cards";
import styled from "styled-components";
import SwiperWrapper from "../SwiperWrapper/SwiperWrapper";


const OfferSection: FC = () => {
  return (
    <StyledOffer>
      <StyledH3>Penawaran Menarik</StyledH3>
      <GroupButtons>
        <Button text="Semua" active={true} />
        <Button text="Promo" active={false} />
        <Button text="Kerjasama" active={false} />
      </GroupButtons>
      <SwiperWrapper
        slides={3}
        spacing={50}
      >
        <>
        <SwiperSlide>
          <OfferImage src="/promo-banner.png" />
        </SwiperSlide>
        <SwiperSlide>
          <OfferImage src="/ig-banner.png" />
        </SwiperSlide>
        <SwiperSlide>
          <OfferImage src="/promo-banner.png" />
        </SwiperSlide>
        <SwiperSlide>
          <OfferImage src="/promo-banner.png" />
        </SwiperSlide>
        <SwiperSlide>
          <OfferImage src="/ig-banner.png" />
        </SwiperSlide>
        <SwiperSlide>
          <OfferImage src="/promo-banner.png" />
        </SwiperSlide>
        </>
       
      </SwiperWrapper>
      {/* <OfferCarousel>
        

        
      </OfferCarousel> */}
    </StyledOffer>
  );
};

export default OfferSection;
