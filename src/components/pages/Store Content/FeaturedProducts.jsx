import React from "react";
import Shoes from "../../../Photos/Shoes.png";

function FeaturedProducts() {
  return (
    <div id="background">
      <div id="product-background">
        <div className="d-flex justify-content-evenly">
          <div id="catchy" className="col-6">
            <div id="open-shoe" className="display-1">Something catchy</div>
            <div className="row">
              <div className="col-6">
                <div id="open-shoes" className="display-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </div>
                <button id="buy-btn" className="btn">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="col-4">
            <img src={Shoes} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
