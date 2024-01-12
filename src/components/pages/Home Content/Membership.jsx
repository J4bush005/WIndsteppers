import React from "react";
import Family from "../../../Photos/Replace.webp";
import { Link } from "react-router-dom";

function Membership() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7 col-sm-12 col-xs-12">
          <div id="words-home" className="fs-4">
            {" "}
            Your child can become a part of our rich history and tradition of
            excellence. Join us in shaping the future of young athletes by
            filling out the request form below. We are excited to connect with
            you and will reach out promptly with the next steps in the journey
            toward athletic and personal growth. Click below to take the first
            step in empowering your child with the Windstepper experience.
          </div>
          <div className="justify-content-start">
            <Link to={"/Membership"} className="btn" type="button" id="membership-btn">
              {" "}
              <span className="h6" id="get-membership">
                Get a Membership
              </span>
            </Link>
          </div>
        </div>
        <div className="col-md-5 col-sm-12 col-xs-12">
          <img src={Family} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Membership;
