import React from 'react'
import Athlete1 from "../Athletes/Athlete 1.webp";
import Athlete2 from "../Athletes/Athlete 2.webp";

import Athlete5 from "../Athletes/Athlete 5.webp";

import Athlete7 from "../Athletes/Athlete 7.webp";
import Athlete8 from "../Athletes/Athlete 8.webp";
import Athlete9 from "../Athletes/Athlete 9.webp";
import Athlete10 from "../Athletes/Athlete 10.webp";

import Athlete12 from "../Athletes/Athlete 12.webp";
import Athlete13 from "../Athletes/Athlete 13.webp";
import Athlete14 from "../Athletes/Athlete 14.webp";
import Athlete15 from "../Athletes/Athlete 15.webp";

import { Link } from 'react-router-dom'

function MenList() {
  return (
    <section id="sprinter-pics" className="mt-5">
    <div className="container-fluid">
        <div className="row">
            <h1 className="display-1" id="championsss">Mens Roster:</h1>
        </div>
      <div className="row d-flex justify-content-evenly">
        <div className="col-lg-2">
          <div className="card">
            <img src={Athlete1} alt="" className="card-img-top"  style={{height:"800px", objectFit:"cover"}}/>
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
            <img src={Athlete2} alt="" className="card-img-top"  style={{height:"800px", objectFit:"cover"}}/>
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
            <img src={Athlete5} alt="" className="card-img-top"  style={{height:"800px", objectFit:"cover"}}/>
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
            <img src={Athlete7} alt="" className="card-img-top"  style={{height:"800px", objectFit:"cover"}}/>
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
            <img src={Athlete8} alt="" className="card-img-top"  style={{height:"800px", objectFit:"cover"}}/>
            <div className="card-body">
              <h5 className="card-title">Athlete Name</h5>
              <Link to={"/"} className="btn">
                View Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-evenly mt-5">
        <div className="col-lg-2">
          <div className="card">
            <img src={Athlete9} alt="" className="card-img-top"  style={{height:"800px", objectFit:"cover"}}/>
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
            <img src={Athlete10} alt="" className="card-img-top"  style={{height:"800px", objectFit:"cover"}}/>
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
            <img src={Athlete12} alt="" className="card-img-top"  style={{height:"800px", objectFit:"cover"}}/>
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
            <img src={Athlete13} alt="" className="card-img-top"  style={{height:"800px", objectFit:"cover"}}/>
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
            <img src={Athlete14} alt="" className="card-img-top"  style={{height:"800px", objectFit:"cover"}}/>
            <div className="card-body">
              <h5 className="card-title">Athlete Name</h5>
              <Link to={"/"} className="btn">
                View Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-evenly mt-5">
        <div className="col-lg-2">
          <div className="card">
            <img src={Athlete15} alt="" className="card-img-top"  style={{height:"800px", objectFit:"cover"}}/>
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

export default MenList