import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "flowbite-react";
import React, { useState } from "react";
import sliderImg from "../assets/sliderImg-1.png";
import sliderImg1 from "../assets/sliderImg-2.png";
import sliderImg2 from "../assets/sliderImg-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // or the appropriate CSS file for Swiper styles
// import {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
//   Autoplay,
// } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./CarouselCompo.css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";

export default function CarouselCompo() {
  return (
    <div>
      <Carousel3/>
    </div>
  );
}

const Carousel3 = () => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"3"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          scale: 0.6,
        crossFade: true,
        }}
        autoplay
        pagination={{clickable:true}}
        navigation={SwiperSlide}
        modules={[EffectCoverflow, Pagination,Autoplay,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className=" mx-auto" src={sliderImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" mx-auto" src={sliderImg1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" mx-auto" src={sliderImg2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" mx-auto" src={sliderImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" mx-auto" src={sliderImg1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" mx-auto" src={sliderImg2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" mx-auto" src={sliderImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" mx-auto" src={sliderImg1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="mx-auto" src={sliderImg2} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
