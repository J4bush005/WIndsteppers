import React from "react";
import Coach from "../../../Photos/Coach.jpg";
import Coaches2 from "../../../Photos/Coaches 2.JPG";
import Coaches3 from "../../../Photos/Coaches 3.JPG";
import Coaches4 from "../../../Photos/Coaches 4.JPG";
import Coaches5 from "../../../Photos/Coaches 5.jpeg";
import Coaches6 from "../../../Photos/Coaches 6.jpeg";
import Coaches7 from "../../../Photos/Coaches 7.jpg";
import Coaches8 from "../../../Photos/Coaches 8.jpg";
import Media from "react-media";

function Collage() {
  return (
    <>
 
        <div id="border">
      <div className="d-flex">
        <div className="col-lg-3 col-4">
          <img src={Coach} alt="" className="img-fluid" id="ratio"/>
        </div>
          <div className="col-lg-3 col-4">
          <img src={Coaches2} alt="" className="img-fluid" id="ratio"/>
        </div>
          <div className="col-lg-3 col-4">
          <img src={Coaches3} alt="" className="img-fluid" id="ratio"/>
        </div>
          <div className="col-lg-3 col-4">
          <img src={Coaches4} alt="" className="img-fluid" id="ratio"/>
        </div>
      </div>
      <div className="d-flex">
      <div className="col-lg-3 col-4">
      <img src={Coaches5} alt="" className="img-fluid" id="ratio"/>
      </div>
          <div className="col-lg-3 col-4">
      <img src={Coaches6} alt="" className="img-fluid" id="ratio"/>
      </div>
          <div className="col-lg-3 col-4">
      <img src={Coaches7} alt="" className="img-fluid" id="ratio"/>
      </div>
          <div className="col-lg-3 col-4">
      <img src={Coaches8} alt="" className="img-fluid" id="ratio"/>
      </div>
      </div>
    </div>
    </>
  );
}
export default Collage;
