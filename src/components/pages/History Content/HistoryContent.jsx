import React from "react";
import HistorySlider from "./HistorySlider";

function HistoryContent() {
  return (
    <>
      <div id="purp-back" className="container">
        <div>
          <h1
            id="champions"
            className="display-1 justify-content-center d-flex"
          >
            Our History
          </h1>
          <div className="row d-flex justify-content-center mb-5">
            <div
              id="words"
              className="col-12 d-flex justify-content-center fs-4"
            >
              Founded in 1989 within the confines of Second Missionary Baptist
              Church, the Windsteppers Track Club has evolved into one of the
              oldest and most esteemed AAU track programs in the Kansas City
              Metro area. Inspired by Kimberly Waller and led by commissioners
              such as Dwayne Ford, Pastor Blow, and Johnathon Forbush, Sr., the
              club, rooted in faith, has consistently produced national
              champions for over a decade. From its humble origins, the
              Windsteppers have become a nationally recognized force, impacting
              the lives of youth and showcasing a legacy of excellence on the
              track. As they embark on yet another season, the anticipation is
              high, and the club looks forward to continuing its storied history
              of success and community impact.
            </div>
          </div>
        </div>
        <HistorySlider />
        <div className="row d-flex justify-contnet-evenly mt-5">
          <div className="col-lg-6">
            <h1 id="championss" className="display-1">
              Ecclesiastes 9:11
            </h1>
            <div id="words" className="fs-4">
              "I returned, and saw under the sun, that the race is not to the
              swift, nor the battle to the strong, neither yet bread to the
              wise, nor yet riches to men of understanding, nor yet favour to
              men of skill; but time and chance happeneth to them all."
            </div>
          </div>
          <div className="col-lg-6">
            <h1 id="championss" className="display-1">
              No Excuses
            </h1>
            <div id="words" className=" fs-4">
              "Do everything without grumbling or arguing,so that you may become
              blameless and pure, “children of God without fault in a warped and
              crooked generation.” Then you will shine among them like stars in
              the sky" - Philippians 2:14-15
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoryContent;
