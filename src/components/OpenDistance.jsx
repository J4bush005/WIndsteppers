import React from 'react'
import Athlete1 from "../Athletes/Athlete 1.webp";
import { Link } from 'react-router-dom'

function OpenDistance() {
  return (
    <section id="sprinter-pics" className="mt-5">
    <div className="container">
      <div className="row">
        <div className="col-lg">
          <div className="card">
            <img src={Athlete1} alt="" className="card-img-top"  style={{height:"500px", objectFit:"cover"}}/>
            <div className="card-body">
              <h5 className="card-title">Athlete Name</h5>
              <Link to={"/"} className="btn">
                View Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg">
          <div className="card">
            <img src={Athlete1} alt="" className="card-img-top"  style={{height:"500px", objectFit:"cover"}}/>
            <div className="card-body">
              <h5 className="card-title">Athlete Name</h5>
              <Link to={"/"} className="btn">
                View Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg">
          <div className="card">
            <img src={Athlete1} alt="" className="card-img-top"  style={{height:"500px", objectFit:"cover"}}/>
            <div className="card-body">
              <h5 className="card-title">Athlete Name</h5>
              <Link to={"/"} className="btn">
                View Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg">
          <div className="card">
            <img src={Athlete1} alt="" className="card-img-top"  style={{height:"500px", objectFit:"cover"}}/>
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
  )
}

export default OpenDistance