import React from 'react'
import IG from "../Photos/ig logo.webp";
import Face from "../Photos/face.webp";

const insta = "https://www.instagram.com/hardwoodboss_/";
const face = "https://www.facebook.com/profile.php?id=100001292195808";
const mine = "https://www.forbushtech.com/";

function Footer() {
    return (
      <div id='foot' class="container mt-5 foot">
      <footer class="text-center">
        <div class="container">
          <section class="mt-5">
            <div class="row text-center d-flex justify-content-center">
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="/Store" class="foot-hover">
                    Buy Gear
                  </a>
                </h6>
              </div>
  
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                <a href="/Portal" class="foot-hover">
                    Athletes
                  </a>
                </h6>
              </div>
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                <a href="/About" class="foot-hover">
                    Events
                  </a>
                </h6>
              </div>
  
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                <a href="/Estimate" class="foot-hover">
                    Join the Family
                  </a>
                </h6>
              </div>
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href='https://smbctgm.org/' target='page' class="foot-hover">
                    SMBC Baptist Church
                  </a>
                </h6>
              </div>
            </div>
          </section>
  
          <hr class="my-5" />
          <section class="mb-4 move">
            <a
              href="/"
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
            </a>
            <a
              href="/"
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
            </a>
            <a
              href="/"
              class="btn btn-floating m1"
              role="button"
              aria-expanded="false"
            >
            </a>
          </section>
        </div>
        <div id="designed" class="text-center p-3 h6">
          Designed by:
          <a
            href="/"
            class="foot-hover space h6"
            onClick={() => window.open(mine, "_blank")}
          >
            Forbush Technologies LLC{" "}
          </a>
        </div>
      </footer>
    </div>
    )
  }
  
  export default Footer