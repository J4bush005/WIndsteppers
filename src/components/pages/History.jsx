import React from "react";
import Header from "../header";
import HistorySlider from "../HistorySlider";
import HistoryContent from "../HistoryContent";


function History() {
  return (
    <div id="purp-back">
      <Header />
      <HistorySlider/>
      <HistoryContent/>
    </div>
  );
}

export default History;
