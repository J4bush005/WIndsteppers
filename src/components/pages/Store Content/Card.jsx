import React from "react";

const Card = ({ item }) => {
  return (
    <div className="container-fluid">
      <div className="row d-flex">
        <div className="col d-flex justify-content-center">
          <div id="product-card" className="card">
            <img
              src={
                process.env.REACT_APP_UPLOAD_URL +
                item.attributes.Image.data.attributes.url
              }
              alt=""
              className="img-fluid"
              style={{ width: "400px" }}
            />
            <div id="card-body" className="card-body">
              <h2 className="card-title">{item?.attributes.Title}</h2>
              <h3>${item?.attributes.Price}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
