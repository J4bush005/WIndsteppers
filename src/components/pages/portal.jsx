import React, { useRef } from "react";

import Header from "../header"
import Footer from "../footer";
import MenList from "../MenList";
import PortalSlider from "../PortalSlider";



function Portal() {

  return (
    <>
    <Header/>
    <PortalSlider/>
    <MenList/>
    <Footer/>
    </>
  );
}

export default Portal;
