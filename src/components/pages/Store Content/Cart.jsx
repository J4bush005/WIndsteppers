import React from "react";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Shirt",
      desc: "shirt",
      isNew: true,
      price: 40,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Shirt",
      desc: "shirt",
      isNew: true,
      price: 40,
    },
  ];
  return (
    <div className="cart">
      <div className="row d-flex justify-content-center">
        <div className=" h5">Products in your cart</div>
      </div>
      <div className="row">
        {data?.map((item) => (
          <div className="row item mb-3" key={item.id}>
            <div className="col-4">
              <img
                src={item.img}
                alt=""
                className="img-fluid"
                style={{ width: "90px", height: "100px" }}
              />
            </div>
            <div className="col-4">
              <div className="h6">{item.title}</div>
              <div className="row">
                {" "}
                <div className="fs-6">{item.desc.substring(0, 100)}</div>
              </div>
              <div className="row">
                <div className="price">1 x ${item.price}</div>
              </div>
            </div>
            <div className="col-4">
              <button className="btn btn-danger">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <h1 className="h4">Subtotal: $80</h1>
      </div>
      <div className="row">
        <div className="col-10">
          <button className="btn btn-warning">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
