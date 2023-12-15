import React from "react";
import Childrens from "../../../Photos/CHildren.webp";
import Media from "react-media";

function Children() {
  return (
    <div className="container">
      <Media query="(max-width: 767px)">
        <div className="row">
          <div className="col-md-4 col-sm-12 col-xs-12" id="">
            <div className=" h3 d-flex" id="wordss">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
            <div className=" h3 d-flex" id="wordss">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </Media>
    </div>
  );
}

export default Children;
