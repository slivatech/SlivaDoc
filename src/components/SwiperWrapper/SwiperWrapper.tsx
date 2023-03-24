import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectFade, EffectCards } from "swiper";

import "swiper/css/effect-cards";
const SwiperWrapper = ({ children,slides,spacing }: { children: React.ReactNode,slides:number,spacing:number }) => {
  return (
    <Swiper style={{ marginTop:"1rem" }} spaceBetween={spacing} slidesPerView={slides}>
      {children}
    </Swiper>
  );
};

export default SwiperWrapper;
