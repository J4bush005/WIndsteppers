import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

import Retro from "../../../Photos/Retro-1.webp";
import Retro2 from "../../../Photos/Retro-2.webp";
import Retro3 from "../../../Photos/Retro-3.webp";
import Retro4 from "../../../Photos/Retro 4.webp";
import Retro5 from "../../../Photos/Retro 5 (1).webp"
import Retro6 from "../../../Photos/Retro 6.webp"
import Retro7 from "../../../Photos/Retro 7.webp"
import Final from "../../../Photos/Opening-Picture.webp";

const HistorySlider = () => {

  return (
  <div id="purp-back" className="container-fluid">
    <div className="d-flex justify-content-center align-items-center">
    <Swiper
    effect={'coverflow'}
    grabCursor={true}
    slideShadow={false}
    centeredSlides={true}
    loop={true}
    slidesPerView={'3'}
    autoplay={{
        delay: 5000,

    }}
    coverflowEffect={
        {
            rotate: 0,
            stretch: -400,
            depth: 400,
            modifier: 0.5,
        }
    }

    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
    className="swiper_container">
        <SwiperSlide>
            <img src={Retro} alt="" id="test" className="img-fluid"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Retro2} alt="" id="test"className="img-fluid"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Retro3} alt="" id="test"className="img-fluid"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Retro4} alt="" id="test"className="img-fluid"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Retro5} alt="" id="test" className="img-fluid"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Retro6} alt="" id="test" className="img-fluid"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Retro7} alt="" id="test" className="img-fluid"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Final} alt="" id="test"className="img-fluid"/>
        </SwiperSlide>
    </Swiper>
    </div>
  </div>
  );
};

export default HistorySlider;
