import React, { useState } from "react";
import "./Store.css";
function ProductPage() {
    const [selectedImg,setSelectedImg] = useState(0)

    const images = [
        'https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600&lazy=load',
        'https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    ];
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-evenly">
        <div className="col">
          <div className="row"><img src={images[0]} alt="" onClick={e=>setSelectedImg(0)} className="img-fluid"/></div>
          <div className="row"><img src={images[1]} alt="" onClick={e=>setSelectedImg(1)} className="img-fluid"/></div>
        </div>
        <div className="col"><img src={images[selectedImg]} alt="" className="img-fluid" /></div>
        <div className="col">
          <div className="row">gfdgfd</div>
          <div className="row">gfdgfd</div>
          <div className="row">gfdgfd</div>
          <div className="row">gfdgfd</div>
          <div className="row">gfdgrfd</div>
          <div className="row">gfdgfd</div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
