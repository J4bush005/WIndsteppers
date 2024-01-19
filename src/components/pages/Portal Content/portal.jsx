import React, { useEffect, useState } from "react";
import Test from "./Test";
import Footer from "../../footer";
import MenList from "./MenList";
import PortalSlider from "./PortalSlider";
import WomenList from "./WomenList";
import './Portal.css'
import Header from "../../header";
import ReactConfetti from "react-confetti";



function Portal() {
  return (
    <>
    <Header/>

    <Test/>
    <Footer/>
    </>
  );
}

export default Portal;
