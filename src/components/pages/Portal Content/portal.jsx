import React from "react";

import Footer from "../../footer";
import MenList from "./MenList";
import PortalSlider from "./PortalSlider";
import WomenList from "./WomenList";
import './Portal.css'



function Portal() {

  return (
    <>
    <PortalSlider/>
    <MenList/>
    <WomenList/>
    <Footer/>
    </>
  );
}

export default Portal;
