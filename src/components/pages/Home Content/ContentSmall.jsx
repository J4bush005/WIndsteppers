import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../../footer";
import Family from "../../../Photos/Replace.webp";
import Jamison from "../../../Photos/Jamison Medal.webp";
import Thomas from "../../../Photos/Thomas Medal.webp";
import Sage from "../../../Photos/Sage Medal.webp";
import Children from "../../../Photos/CHildren.webp";

function ContentSmall() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div id="building">
        <section>
          <h1 id="champions-sm" className="display-3 d-flex">
            Building Champions
          </h1>

          <motion.div style={{ y: textY }}>
            <div className="d-flex">
              <div className="col-12">
                <div className="ratio ratio-21x9">
                  <iframe
                    src="https://www.youtube.com/embed/-CtD2fIFG-Q?autoplay=1&loop=1&playlist=-CtD2fIFG-Q"
                    title="Youtube video"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="d-flex">
              {" "}
              <div className="col-12">
                <div id="words-sm" className="r-text">
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
          <div className="d-flex justify-content-evenly">
            <div id="picture-format-sm" className="d-flex ">
              <motion.div
                style={{ y: textY }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="col d-flex "
              >
                <img src={Thomas} alt="" className="img-fluid" />
              </motion.div>

              <motion.div
                style={{ y: textY }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
                className="col d-flex "
              >
                <img src={Jamison} alt="" className="img-fluid" />
              </motion.div>

              <motion.div
                style={{ y: textY }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
                viewport={{ once: true }}
                className="col d-flex "
              >
                <img src={Sage} alt="" className="img-fluid" />
              </motion.div>
            </div>
          </div>
        </section>
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <section id="building-youth-sm">
          <div>
            <h1 id="build-sm" className="display-1 d-flex">
              Developing the Youth
            </h1>
            </div>
            <div className="d-flex ">
              <div className="col-12">
                <div id="wordss-sm" className="r-text">
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
            <div id="group-picture" className="d-flex">
              <img src={Children} alt="" className="img-fluid" />
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
            <h1 id="champions-sm" className="display-3 d-flex">
              Join the Family
            </h1>
            <div className="d-flex">
              <div className="col-12">
                <div id="words-sm" className="r-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
                <div id="join-button" className="d-flex justify-content-start">
                  <button
                    href="/about"
                    id="membership-btn"
                    className="btn"
                    type="button"
                  >
                    {" "}
                    <span id="get-membership">Get a Membership</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div id="family-pic" className="col-12">
                <img src={Family} alt="" className="img-fluid" />
              </div>
            </div>
            <Footer />
          </section>
          
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ContentSmall;
