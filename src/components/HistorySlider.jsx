import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import Test from "../Photos/Opening-Picture.webp";
import Test3 from "../Photos/CHildren.webp";
import Test2 from "../Photos/Jamison Medal.webp";
import Test4 from "../Photos/Sage Medal.webp";
import Test5 from "../Photos/Thomas Medal.webp";

const HistorySlider = () => {

  return (
  <div className="container">
    <h1 className="heading">Team History</h1>
    <Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    loop={true}
    slidesPerView={'2'}
    coverflowEffect={
        {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
        }
    }
    pagination={{el:'swiper-pagination',clickable:true}}
    navigation={{
        nextEl:'swiper-button-next',
        prevEl:'swiper-button-prev',
        clickable: true
    }}
    modules={[EffectCoverflow, Pagination, Navigation]}
    className="swiper_container">
        <SwiperSlide>
            <img src={Test} alt="" id="test" className="img-fluid"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Test2} alt="" id="test"className="img-fluid"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Test3} alt="" id="test"className="img-fluid"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Test4} alt="" id="test"className="img-fluid"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Test5} alt="" id="test"className="img-fluid"/>
        </SwiperSlide>

        <div className="slider-controller">
            <div className="swiper-button-prev slider-arrow"></div>
            <div className="swiper-button-next slider-arrow"></div>
            <div className="swiper-pagination"></div>
        </div>

    </Swiper>
  </div>
  );
};

export default HistorySlider;
