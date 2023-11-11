import React from "react";
import Shoes from "../Photos/Shoes.png";

function FeaturedProducts() {
  return (
    <div>
      <div id="product-background">
        <div className="d-flex justify-content-evenly">
          <div id="catchy" className="col-6">
            <div className="display-1">Something catchy</div>
            <div className="row">
              <div className="col-6">
                <div className="display-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <img src={Shoes} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
