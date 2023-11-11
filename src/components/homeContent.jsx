import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "./footer";

import Family from "../Photos/Replace.webp";
import Jamison from "../Photos/Jamison Medal.webp";
import Thomas from "../Photos/Thomas Medal.webp";
import Sage from "../Photos/Sage Medal.webp";
import Children from "../Photos/CHildren.webp";

function HomeContent() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  return (
    <div id="building">
    <section id="" className="">
          <motion.div style={{ y: textY }}>
            <h1
              id="champions"
              className="display-1 d-flex justify-content-center"
            >
              Building Champions
            </h1>
          </motion.div>

          <motion.div style={{ y: textY }}>
            <div className="d-flex justify-content-evenly">
              <div className="col-6">
                <div className="ratio ratio-21x9">
                  <iframe
                    src="https://www.youtube.com/embed/-CtD2fIFG-Q?autoplay=1&loop=1&playlist=-CtD2fIFG-Q"
                    title="Youtube video"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
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
              </div>
            </div>
          </motion.div>

          <div id="picture-format" className="d-flex justify-content-center">
            <motion.div
              style={{ y: textY }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="col d-flex justify-content-center"
            >
              <img src={Jamison} alt="" className="img-fluid" id="jamison" />
            </motion.div>

            <motion.div
              style={{ y: textY }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              viewport={{ once: true }}
              className="col d-flex justify-content-center"
            >
              <img src={Thomas} alt="" className="img-fluid" id="thomas" />
            </motion.div>

            <motion.div
              style={{ y: textY }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
              viewport={{ once: true }}
              className="col d-flex justify-content-center"
            >
              <img src={Sage} alt="" className="img-fluid" id="sage" />
            </motion.div>
          </div>
        </section>
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <section id="building-youth">
            <h1 id="build" className="display-1 d-flex">
              Developing the Youth
            </h1>
            <div className="d-flex ">
              <div id="group-picture" className="col-6 justify-content-start">
                <img src={Children} alt="" className="img-fluid" />
              </div>
              <div className="col-7">
                <div id="wordss" className="r-text justify-content-end">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
              </div>
            </div>
          </section>
        </motion.div>
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
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
                <div id="join-button" className="d-flex justify-content-center">
                  <a
                    href="/about"
                    className="membership-btn"
                    type="button"
                    role="button"
                  >
                    {" "}
                    <span id="get-membership">Get a Membership</span>
                  </a>
                </div>
              </div>
              <div className="col-6">
                <img src={Family} alt="" className="img-fluid" />
              </div>
            </div>
          </section>
          <Footer />
        </motion.div>
        </div>
  )
}

export default HomeContent