import React from "react";
import Footer from "./footer";
import HistorySlider from "./HistorySlider";

function HistoryContent() {
  return (
    <>
    <div id="purp-back" className="container-fluid">
      <div id="color-change">
        <h1 id="champions" className="display-1 justify-content-center d-flex">
          Our History
        </h1>
        <div className="row d-flex justify-content-center mb-5">
          <div id="words" className="col-lg d-flex justify-content-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
      <HistorySlider/>
      <div className="row d-flex justify-contnet-evenly mt-5">
        <div className="col-lg">
          <h1 id="championss" className="display-1">
            Ecclesiastes 9:11
          </h1>
          <div id="words">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className="col-lg">
          <h1 id="championss" className="display-1">
            No Excuses
          </h1>
          <div id="words">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
   
   </>
  );
}

export default HistoryContent;
