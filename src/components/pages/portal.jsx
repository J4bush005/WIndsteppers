import React, { useRef } from "react";

import Header from "../header"
import Footer from "../footer";
import MenList from "../MenList";
import PortalSlider from "../PortalSlider";
import WomenList from "../WomenList";



function Portal() {

  return (
    <>
    <Header/>
    <PortalSlider/>
    <MenList/>
    <WomenList/>
    <Footer/>
    </>
  );
}

export default Portal;
