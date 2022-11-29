import React from "react";
import IMG1 from "../../img/hydrotreating/hydrotreatingSlider/1.jpg";
import IMG2 from "../../img/hydrotreating/hydrotreatingSlider/2.jpg";
import IMG3 from "../../img/hydrotreating/hydrotreatingSlider/3.jpg";
import IMG4 from "../../img/hydrotreating/hydrotreatingSlider/4.jpg";
import IMG5 from "../../img/hydrotreating/hydrotreatingSlider/5.jpg";
import IMG6 from "../../img/hydrotreating/hydrotreatingSlider/6.jpg";
import IMG7 from "../../img/hydrotreating/hydrotreatingSlider/7.jpg";
import IMG8 from "../../img/hydrotreating/hydrotreatingSlider/8.jpg";
import IMG9 from "../../img/hydrotreating/hydrotreatingSlider/9.jpg";
import IMG10 from "../../img/hydrotreating/hydrotreatingSlider/10.jpg";
import IMG11 from "../../img/hydrotreating/hydrotreatingSlider/11.jpg";
import IMG12 from "../../img/hydrotreating/hydrotreatingSlider/12.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/scss";
import "swiper/scss/pagination";

function hydrotreatingSwiper() {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={true}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={IMG1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={IMG2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={IMG3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={IMG4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={IMG5} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={IMG6} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={IMG7} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={IMG8} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={IMG9} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={IMG10} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={IMG11} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={IMG12} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default hydrotreatingSwiper;
