import React, { useRef } from "react";
import Header from "../header"
import Athlete2 from "../../Athletes/Athlete 2.webp";
import Athlete3 from "../../Athletes/Athlete 3.5.webp";
import Athlete4 from "../../Athletes/Athlete 4.webp";
import Athlete5 from "../../Athletes/Athlete 5.webp";
import Athlete6 from "../../Athletes/Athlete 6.webp";
import Athlete7 from "../../Athletes/Athlete 7.webp";
import Athlete8 from "../../Athletes/Athlete 8.webp";
import Athlete9 from "../../Athletes/Athlete 9.webp";
import Athlete10 from "../../Athletes/Athlete 10.webp";
import Athlete11 from "../../Athletes/Athlete 11.5.webp";
import Athlete12 from "../../Athletes/Athlete 12.webp";
import Athlete13 from "../../Athletes/Athlete 13.webp";
import Athlete14 from "../../Athletes/Athlete 14.webp";
import Athlete15 from "../../Athletes/Athlete 15.webp";
import Athlete16 from "../../Athletes/Athlete 16.webp";
import { Link } from "react-router-dom";

import Footer from "../footer";

import OpenDistance from "../OpenDistance";



function Portal() {
  const sprints = useRef(null);
  const jumps = useRef(null);
  const throws = useRef(null);
  const distance = useRef(null);
  const racewalk = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
    <Header/>
  

    <section id="distance" className="page-section call-to-action d-flex mt-5" ref={distance}>
      <div className="py-lg-5">
        <div className="col-lg-12 col-md-8 mx-auto">
          <h1 className="mb-5 display-1">Windstepper Family</h1>
        </div>
      </div>
    </section>
    <OpenDistance/>
    <Footer/>
    </>
  );
}

export default Portal;
