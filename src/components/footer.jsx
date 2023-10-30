import React from 'react'
import { Link } from 'react-router-dom'
import IG from "../Photos/ig logo.webp";
import Face from "../Photos/face.webp";

const insta = "https://www.instagram.com/hardwoodboss_/";
const face = "https://www.facebook.com/profile.php?id=100001292195808";
const mine = "https://www.forbushtech.com/";

function Footer() {
    return (
      <div id='foot' class="container my-5 foot">
      <footer class="text-center">
        <div class="container">
          <section class="mt-5">
            <div class="row text-center d-flex justify-content-center">
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <Link to="/Estimate" class="foot-hover">
                    Buy Gear
                  </Link>
                </h6>
              </div>
  
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <Link to="/Services" class="foot-hover">
                    Contact Us
                  </Link>
                </h6>
              </div>
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <Link to="/About" class="foot-hover">
                    Athlete Portal
                  </Link>
                </h6>
              </div>
  
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <Link to="/About" class="foot-hover">
                    Buy a Membership
                  </Link>
                </h6>
              </div>
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <Link to="/Contact" class="foot-hover">
                    SMBC Baptist Church
                  </Link>
                </h6>
              </div>
            </div>
          </section>
  
          <hr class="my-5" />
          <section class="mb-4 move">
            <Link
              to="/"
              class="btn btn-floating m1"
              role="button"
              aria-expanded="false"
            >
              <i class="fab fa-instagram">
                <img
                  src={IG}
                  class="img-fluid hover"
                  onClick={() => window.open(insta, "_blank")}
                  alt=""
                />
              </i>
            </Link>
            <Link
              to="/"
              class="btn btn-floating m1"
              role="button"
              aria-expanded="false"
            >
              <i class="fab fa-facebook-f">
                <img
                  src={Face}
                  class="img-fluid hover"
                  onClick={() => window.open(face, "_blank")}
                  alt=""
                />
              </i>
            </Link>
            <Link
              to="/"
              class="btn btn-floating m1"
              role="button"
              aria-expanded="false"
            >
            </Link>
          </section>
        </div>
        <div id="designed" class="text-center p-3">
          Designed by:
          <Link
            to="/"
            class="foot-hover space"
            onClick={() => window.open(mine, "_blank")}
          >
            Forbush Technologies LLC{" "}
          </Link>
        </div>
      </footer>
    </div>
    )
  }
  
  export default Footer