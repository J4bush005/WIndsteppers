import React, { useRef } from "react";
import Header from "../header"
import Athlete1 from "../../Athletes/Athlete 1.webp";
import Athlete2 from "../../Athletes/Athlete 2.webp";
import Athlete3 from "../../Athletes/Athlete 3.5.webp";
import Athlete4 from "../../Athletes/Athlete 4.webp";
import Athlete5 from "../../Athletes/Athlete 5.webp";
import Athlete6 from "../../Athletes/Athlete 6.webp";
import Athlete7 from "../../Athletes/Athlete 7.webp";
import Athlete8 from "../../Athletes/Athlete 8.webp";
import Athlete9 from "../../Athletes/Athlete 9.webp";
import Athlete10 from "../../Athletes/Athlete 10.webp";
import Athlete11 from "../../Athletes/Athlete 11.5.webp";
import Athlete12 from "../../Athletes/Athlete 12.webp";
import Athlete13 from "../../Athletes/Athlete 13.webp";
import Athlete14 from "../../Athletes/Athlete 14.webp";
import Athlete15 from "../../Athletes/Athlete 15.webp";
import Athlete16 from "../../Athletes/Athlete 16.webp";
import { Link } from "react-router-dom";


function Portal() {
  const sprints = useRef(null);
  const jumps = useRef(null);
  const throws = useRef(null);
  const distance = useRef(null);
  const racewalk = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
    <Header/>
    <div id="shift" className="col">
    <div id="" className="second-word">
      <ul className="options">
        <li className="listed-one">
          <Link onClick={() => scrollToSection(sprints)} className="sections">Sprints</Link>
        </li>
        <li className="listed-two">|</li>
        <li className="listed-three">
          <Link onClick={() => scrollToSection(jumps)} className="sections">Jumps</Link>
        </li>
        <li className="listed-four">|</li>
        <li className="listed-five">
          <Link onClick={() => scrollToSection(throws)} className="sections">Throws</Link>
        </li>
        <li className="listed-six">|</li>
        <li className="listed-seven">
          <Link onClick={() => scrollToSection(distance)} className="sections">Distance</Link>
        </li>
        <li className="listed-eight">|</li>
        <li className="listed-nine">
          <Link onClick={() => scrollToSection(racewalk)} className="sections">Racewalk</Link>
        </li>
      </ul>
    </div>
  </div>
    <div className="container">
      <div className="row">
        <div className="col-lg">
          <div className="card">
            <img src={Athlete1} alt="" className="card-img-top"  style={{height:"500px", objectFit:"cover"}} />
            <div className="card-body">
              <h5 className="card-title">Athlete Name</h5>
              <Link to={"/"} className="btn">
                View Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg">
          <div className="card" >
            <img src={Athlete2} alt="" className="card-img-top" style={{height:"500px", objectFit:"cover"}} />
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
            <img src={Athlete3} alt="" className="card-img-top" style={{height:"500px", objectFit:"cover"}}/>
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
            <img src={Athlete4} alt="" className="card-img-top" style={{height:"500px", objectFit:"cover"}}/>
            <div className="card-body">
              <h5 className="card-title">Athlete Name</h5>
              <Link to={"/"} className="btn">
                View Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg">
          <div className="card">
            <img src={Athlete5} alt="" className="card-img-top" style={{height:"500px", objectFit:"cover"}}/>
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
            <img src={Athlete6} alt="" className="card-img-top" style={{height:"500px", objectFit:"cover"}}/>
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
            <img src={Athlete7} alt="" className="card-img-top" style={{height:"500px", objectFit:"cover"}}/>
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
            <img src={Athlete8} alt="" className="card-img-top" style={{height:"500px", objectFit:"cover"}}/>
            <div className="card-body">
              <h5 className="card-title">Athlete Name</h5>
              <Link to={"/"} className="btn">
                View Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg">
          <div className="card">
            <img src={Athlete9} alt="" className="card-img-top" style={{height:"500px", objectFit:"cover"}}/>
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
            <img src={Athlete10} alt="" className="card-img-top" style={{height:"500px", objectFit:"cover"}} />
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
            <img src={Athlete11} alt="" className="card-img-top" style={{height:"500px", objectFit:"cover"}}/>
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
            <img src={Athlete12} alt="" className="card-img-top" style={{height:"500px", objectFit:"cover"}}/>
            <div className="card-body">
              <h5 className="card-title">Athlete Name</h5>
              <Link to={"/"} className="btn">
                View Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg">
          <div className="card">
            <img src={Athlete13} alt="" className="card-img-top" style={{height:"500px", objectFit:"cover"}}/>
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
            <img src={Athlete14} alt="" className="card-img-top" style={{height:"500px", objectFit:"cover"}}/>
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
            <img src={Athlete15} alt="" className="card-img-top" style={{height:"500px", objectFit:"cover"}}/>
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
            <img src={Athlete16} alt="" className="card-img-top" style={{height:"500px", objectFit:"cover"}}/>
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
    </>
  );
}

export default Portal;
