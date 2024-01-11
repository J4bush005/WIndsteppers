import React from "react";
import Childrens from "../../../Photos/CHildren.webp";
import Media from "react-media";

function Children() {
  return (
    <div className="container">
      <Media query="(max-width: 767px)">
        <div className="row">
          <div className="col-md-4 col-sm-12 col-xs-12" id="">
            <div className=" fs-4 d-flex" id="wordss">
              At Windsteppers Track Club, we are committed to the holistic
              development of youth athletes, catering to ages 4 through college
              level. Our foundational focus lies with elementary, middle, and
              high school athletes, ensuring a low coach-to-athlete ratio for
              personalized attention. With a dedicated coaching staff in jumps,
              sprints, racewalk, and throws, we prioritize the long-term growth
              of each individual. Emphasizing versatility, our younger athletes,
              up to middle school age, receive comprehensive training across
              various events, particularly up to the 400 meters. As athletes
              showcase their abilities through training and meets, we tailor
              their development, allowing for specialization in shorter sprints,
              longer events, or even racewalking for those inclined differently.
            </div>
          </div>
          <div className="col-md-8 col-sm-12 col-xs-12">
            <img src={Childrens} alt="" className="img-fluid mb-3" />
          </div>
        </div>
      </Media>
      <Media query="(min-width: 768px)">
        <div className="row">
          <div className="col-md-4 col-sm-12 col-xs-12" id="">
            <img src={Childrens} alt="" className="img-fluid mb-3" />
          </div>
          <div className="col-md-8 col-sm-12 col-xs-12">
            <div className=" fs-4 d-flex" id="wordss">
              At Windsteppers Track Club, we are committed to the holistic
              development of youth athletes, catering to ages 4 through college
              level. Our foundational focus lies with elementary, middle, and
              high school athletes, ensuring a low coach-to-athlete ratio for
              personalized attention. With a dedicated coaching staff in jumps,
              sprints, racewalk, and throws, we prioritize the long-term growth
              of each individual. Emphasizing versatility, our younger athletes,
              up to middle school age, receive comprehensive training across
              various events, particularly up to the 400 meters. As athletes
              showcase their abilities through training and meets, we tailor
              their development, allowing for specialization in shorter sprints,
              longer events, or even racewalking for those inclined differently.
            </div>
          </div>
        </div>
      </Media>
    </div>
  );
}

export default Children;
