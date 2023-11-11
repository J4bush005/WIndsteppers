import React from 'react'
import Shoes from "../Photos/Shoes.png";

function FeaturedProducts() {
  return (
    <div>
        <div id="product-background">
            <div className="d-flex justify-content-evenly">
            <div className="col-6">
                <div className="display-1">Something catchy</div>
                <div className="row">
                    <div className="col-6">
                        <div className="display-4">words</div>
                    </div>
                </div>
            </div>
            <div className="col"><img src={Shoes} alt="" className="img-fluid" /></div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProducts