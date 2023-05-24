import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/scss";
import "./Swiper.scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
const carousel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src="images/swiper1.png" alt="imgSwiper" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="images/swiper1.png" alt="imgSwiper" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="images/swiper1.png" alt="imgSwiper" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="images/swiper1.png" alt="imgSwiper" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="images/swiper1.png" alt="imgSwiper" />
      </SwiperSlide>
    </Swiper>
  );
};

export default carousel;
