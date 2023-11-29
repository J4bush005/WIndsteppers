import React from "react";
import Header from "../../header";
import HistoryContent from "./HistoryContent";
import Footer from "../../footer";
import "./History.css";
import Media from "react-media";
import HistoryContentsm from "./HistoryContentsm";

function History() {
  return (
    <>
      <Media query="(max-width: 768px)">
        <div id="purp-back">
          <Header />
          <HistoryContentsm />
          <Footer />
        </div>
      </Media>
      <Media query="(min-width: 769px)">
        <div id="purp-back">
          <Header />
          <HistoryContent />
          <Footer />
        </div>
      </Media>
    </>
  );
}

export default History;
