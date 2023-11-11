import React from "react";

const Card = ({ item }) => {
  return (
    <div className="container-fluid">
      <div className="row d-flex">
        <div className="col d-flex justify-content-center">
          <div className="card">
            <img
              src={item.img}
              alt=""
              className="img-fluid"
              style={{ width: "300px" }}
            />
            <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <h3>${item.price}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
