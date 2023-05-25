import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css/effect-cards";

type BreakPointValue = 0 | 480 | 768 | 1024 | 1280;
interface IBreakPoint {
  slidesPerView: number;
  spaceBetween: number;
}

interface ISwiper {
  children: React.ReactNode;

  breakPoints: Record<BreakPointValue, IBreakPoint>;
}

const SwiperWrapper = ({ children, breakPoints }: ISwiper) => {
  return (
    <Swiper  style={{ marginTop: "1rem" }} breakpoints={breakPoints}>
      {children}
    </Swiper>
  );
};

export default SwiperWrapper;
