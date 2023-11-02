import React from "react";
import Header from "../header";
import HistorySlider from "../HistorySlider";
import HistoryContent from "../HistoryContent";
import Footer from "../footer";

function History() {
  return (
    <div>
      <Header />
      <HistorySlider/>
      <HistoryContent/>
      <Footer/>
    </div>
  );
}

export default History;