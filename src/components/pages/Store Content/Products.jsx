import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Products = ({ type }) => {


  const sweats = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Sweatshirt",
      isNew: true,
      price: 40,
    },

    {
      id: 2,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      isNew: true,
      title: "Sweats",
      price: 40,
    },

    {
      id: 3,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Backpack",
      isNew: true,
      price: 40,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Backpack",
      isNew: true,
      price: 40,
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Backpack",
      isNew: true,
      price: 40,
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res= await axios.get(
          process.env.REACT_APP_API_URL + "/products?populate=*",
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        setData(res.data.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  console.log(data);

  return (
    <div className="d-flex justify-content-evenly">
      <div className="col-11">
        <div className="col-lg d-flex">
          {data.map((shirt) => (
            <Card item={shirt} key={shirt.id} />
          ))}
        </div>
        {/*}
        <div className=" mt-3">
          <div className="col d-flex">
            {sweats.map((sweat) => (
              <Card item={sweat} key={sweat.id} />
            ))}
          </div>
        </div>
        */}
      </div>
    </div>
  );
};

export default Products;
