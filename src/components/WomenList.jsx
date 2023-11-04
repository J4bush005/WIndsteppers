import React from "react";
import { Link } from "react-router-dom";
import Athlete3 from "../Athletes/Athlete 3.5.webp";
import Athlete4 from "../Athletes/Athlete 4.webp";
import Athlete6 from "../Athletes/Athlete 6.webp";
import Athlete11 from "../Athletes/Athlete 11.5.webp";
import Athlete16 from "../Athletes/Athlete 16.webp";

function WomenList() {
  return (
    <section id="sprinter-pics" className="mt-5">
      <div className="container-fluid">
        <div className="row">
          <h1 className="display-1" id="championsss">
            Womens Roster:
          </h1>
        </div>
        <div className="row d-flex justify-content-evenly">
          <div className="col-lg-2">
            <div className="card">
              <img
                src={Athlete3}
                alt=""
                className="card-img-top"
                style={{ height: "800px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Athlete Name</h5>
                <Link to={"/"} className="btn">
                  View Profile
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card">
              <img
                src={Athlete4}
                alt=""
                className="card-img-top"
                style={{ height: "800px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Athlete Name</h5>
                <Link to={"/"} className="btn">
                  View Profile
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card">
              <img
                src={Athlete6}
                alt=""
                className="card-img-top"
                style={{ height: "800px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Athlete Name</h5>
                <Link to={"/"} className="btn">
                  View Profile
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card">
              <img
                src={Athlete11}
                alt=""
                className="card-img-top"
                style={{ height: "800px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Athlete Name</h5>
                <Link to={"/"} className="btn">
                  View Profile
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card">
              <img
                src={Athlete16}
                alt=""
                className="card-img-top"
                style={{ height: "800px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Athlete Name</h5>
                <Link to={"/"} className="btn">
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WomenList;
