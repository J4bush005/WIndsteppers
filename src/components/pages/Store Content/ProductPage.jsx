import React, { useState } from "react";
import "./Store.css";
import Header from "../../header"
import Footer from "../../footer";
function ProductPage() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quanity, setQuanity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  ];
  return (
    <div className="container-fluid">
    <Header/>
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
            <h1 id="title" className="">Title</h1>
          </div>
          <div className="row">
            <span className="display-6">Price</span>
          </div>
          <div className="row">
            <span>Description</span>
          </div>
          <div className="row">
            <div id="quanity">
              <button onClick={() => setQuanity((prev) => (prev === 1 ? 1: prev -1))}>-</button>
              {quanity}
              <button onClick={() => setQuanity((prev) => prev + 1)}>+</button>
            </div>
          </div>
          <div className="row"><button>Add to Cart</button></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ProductPage;
