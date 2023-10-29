import React, { useRef } from "react";
import Open from "../open-image";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "react-bootstrap/Button";

import Family from "../../Photos/Opening-Picture.webp";
import Jamison from "../../Photos/Jamison Medal.webp";
import Thomas from "../../Photos/Thomas Medal.webp";
import Sage from "../../Photos/Sage Medal.webp";
import { Link } from "react-router-dom";
function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  return (
    <div id="container">
      <div id="full-image">
        <Open />
      </div>
      <motion.div style={{ y: backgroundY }}>
        <section id="building" className="">
          <h1
            id="champions"
            className="display-1 d-flex justify-content-center"
          >
            Building Champions
          </h1>
          <div className="d-flex justify-content-evenly">
            <div className="col-6">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/-CtD2fIFG-Q?autoplay=1&loop=1&playlist=-CtD2fIFG-Q"
                  title="Youtube video"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-6">
              <div id="words" className="r-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>
          <div id="picture-format" className="d-flex justify-content-center">
            <div className="col d-flex justify-content-center">
              <img src={Jamison} alt="" className="img-fluid" id="jamison" />
            </div>
            <div className="col d-flex justify-content-center">
              <img src={Thomas} alt="" className="img-fluid" id="thomas" />
            </div>
            <div className="col d-flex justify-content-center">
              <img src={Sage} alt="" className="img-fluid" id="sage" />
            </div>
          </div>
          <section id="membership">
            <h1
              id="champions"
              className="display-1 d-flex justify-content-center"
            >
              Join the Family
            </h1>
            <div className="d-flex justify-content-evenly">
              <div className="col-6">
                <div id="words" className="r-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
                <div id="join-button" className="">
                  <Link
                    to={"/about"}
                    className="membership-btn"
                    type="button"
                    role="button"
                  >
                    {" "}
                    Get a Membership
                  </Link>
                </div>
              </div>
              <div className="col-6">
                <img src={Family} alt="" className="img-fluid" />
              </div>
            </div>
          </section>
        </section>
      </motion.div>
    </div>
  );
}

export default Home;
