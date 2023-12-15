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
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const HistorySlider = () => {

  return (
  <div id="purp-back" className="container">
    <MDBCarousel showControls>
      <MDBCarouselItem itemId={1}>
        <img src={Retro} className='d-block w-100 h-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src={Retro2} className='d-block w-100 h-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={Retro3} className='d-block w-100 h-100' alt='...' />
      </MDBCarouselItem>
       <MDBCarouselItem itemId={4}>
        <img src={Retro4} className='d-block w-100 h-100' alt='...' />
      </MDBCarouselItem>
       <MDBCarouselItem itemId={5}>
        <img src={Retro5} className='d-block w-100 h-100' alt='...' />
      </MDBCarouselItem>
       <MDBCarouselItem itemId={6}>
        <img src={Retro6} className='d-block w-100 h-100' alt='...' />
      </MDBCarouselItem>
       <MDBCarouselItem itemId={7}>
        <img src={Retro7} className='d-block w-100 h-100' alt='...' />
      </MDBCarouselItem>
       <MDBCarouselItem itemId={8}>
        <img src={Final} className='d-block w-100 h-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
  </div>
  );
};

export default HistorySlider;
