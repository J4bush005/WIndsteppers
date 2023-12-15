import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../../footer";
import Family from "../../../Photos/Replace.webp";
import Children from "../../../Photos/CHildren.webp";
import Video from "./Video";
import Pictures from "./Pictures";

function HomeContent() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  return (
    <div id="building">
      <section>
        <div className="container">
          <div className="col-lg">
            <motion.div
              className="d-flex justify-content-center"
              style={{ textY }}
            >
              <h1 id="champions" className="display-1">
                Building Champions
              </h1>
            </motion.div>
          </div>
        </div>
       <Video/>
       <Pictures/>
      </section>

      <motion.div
        style={{ y: textY }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
      >
        <section id="building-youth">
          <div className="container">
            <div className="d-flex justify-content-center">
              <h1 className="display-1" id="build">
                Developing the Youth
              </h1>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-12 col-xs-12" id="">
                <img src={Children} alt="" className="img-fluid mb-3" />
              </div>
              <div className="col-md-8 col-sm-12 col-xs-12">
                <div className=" h3 d-flex" id="wordss">
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
        <section id="membership" className="mt-4">
          <div className="container">
            <div className="d-flex justify-content-center">
              <h1 className="display-1" id="champions">
                Join Our Family
              </h1>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-sm-12 col-xs-12">
                <div id="words-home" className="h4">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
                <div className="justify-content-start">
                  <button className="btn" type="button" id="membership-btn">
                    {" "}
                    <span className="h6" id="get-membership">Get a Membership</span>
                  </button>
                </div>
              </div>
              <div className="col-md-5 col-sm-12 col-xs-12">
              <img src={Family} alt="" className="img-fluid" /></div>
            </div>
          </div>
        </section>
        <Footer />
      </motion.div>
    </div>
  );
}

export default HomeContent;
