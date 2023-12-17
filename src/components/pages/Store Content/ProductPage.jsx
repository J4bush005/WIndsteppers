import React, { useState } from "react";
import "./Store.css";
import Header from "../../header";
import Footer from "../../footer";
function ProductPage() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quanity, setQuanity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  ];
  return (
    <div id="background" className="">
      <Header />
      <div className="row d-flex justify-content-evenly">
        <div id="left-pics" className="col">
          <div className="row">
            <img
              src={images[0]}
              alt=""
              onClick={(e) => setSelectedImg(0)}
              className="img-fluid"
            />
          </div>
          <div className="row">
            <img
              src={images[1]}
              alt=""
              onClick={(e) => setSelectedImg(1)}
              className="img-fluid"
            />
          </div>
        </div>
        <div id="middle-pics" className="col">
          <img src={images[selectedImg]} alt="" className="img-fluid" />
        </div>
        <div className="col-4">
          <div className="row">
            <h1 id="title" className="display-1">
              Super Cool Amazing Product
            </h1>
          </div>
          <div className="row">
            <span id="price" className="display-6">$1000</span>
          </div>
          <div className="row">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          </div>
          <div className="row">
            <div id="quanity">
              <button
                id="quant-btn"
                className=""
                onClick={() =>
                  setQuanity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quanity}
              <button
                id="quant-btn"
                className=""
                onClick={() => setQuanity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="row">
            <button id="cart-btn" className="btn">Add to Cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;
