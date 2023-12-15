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

        <div id="purp-back">
          <Header />
          <HistoryContent />
          <Footer />
        </div>
 
    </>
  );
}

export default History;
