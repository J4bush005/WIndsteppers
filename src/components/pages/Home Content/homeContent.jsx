import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../../footer";
import Video from "./Video";
import Pictures from "./Pictures";
import Children from "./Children";
import Membership from "./Membership";
import Media from "react-media";

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
          <Media query="(max-width: 767px)">
            <div className="col-lg">
              <motion.div className="d-flex justify-content-center" style={{ textY }}>
                <h1 id="champions" className="display-2 ">
                  Building Champions
                </h1>
              </motion.div>
            </div>
          </Media>
          <Media query="(min-width: 768px)">
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
          </Media>
        </div>
        <Video />
        <Pictures />
      </section>

      <motion.div
        style={{ y: textY }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
      >
        <Media query="(max-width: 767px)">
          <section id="building-youth">
            <div className="container">
              <div className="d-flex justify-content-center">
                <h1 className="display-2" id="build">
                  Developing the Youth
                </h1>
              </div>
            </div>
            <Children />
          </section>
        </Media>
        <Media query="(min-width: 768px)">
          <section id="building-youth">
            <div className="container">
              <div className="d-flex justify-content-center">
                <h1 className="display-1" id="build">
                  Developing the Youth
                </h1>
              </div>
            </div>
            <Children />
          </section>
        </Media>
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
          <Membership />
        </section>
        <Footer />
      </motion.div>
    </div>
  );
}

export default HomeContent;
