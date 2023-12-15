import React from 'react'
import Family from "../../../Photos/Replace.webp";

function Membership() {
  return (
    <div className="container">
            <div className="row">
              <div className="col-md-7 col-sm-12 col-xs-12">
                <div id="words-home" className="h4">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
                <div className="justify-content-start">
                  <button className="btn" type="button" id="membership-btn">
                    {" "}
                    <span className="h6" id="get-membership">Get a Membership</span>
                  </button>
                </div>
              </div>
              <div className="col-md-5 col-sm-12 col-xs-12">
              <img src={Family} alt="" className="img-fluid" /></div>
            </div>
          </div>
  )
}

export default Membership