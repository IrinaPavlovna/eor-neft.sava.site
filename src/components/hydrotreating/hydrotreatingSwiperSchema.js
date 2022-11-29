import React from "react";
import IMG1 from "../../img/schema/1.jpg";
import IMG2 from "../../img/schema/2.jpg";
import IMG3 from "../../img/schema/3.jpg";
import IMG4 from "../../img/schema/4.jpg";


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/scss";
import "swiper/scss/pagination";

function hydrotreatingSwiper() {
  return (
    <Swiper
      style={{ height: '74vh' }}
      pagination={true}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide >
        <img style={{ maxWidth: 'fit-content', maxHeight: '100%' }} src={IMG1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={{ maxWidth: 'fit-content', maxHeight: '100%' }} src={IMG2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={{ maxWidth: 'fit-content', maxHeight: '100%' }} src={IMG3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={{ maxWidth: 'fit-content', maxHeight: '100%' }} src={IMG4} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default hydrotreatingSwiper;
