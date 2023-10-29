import React, { useRef } from "react";
import Open from "../open-image";
import { Container } from "react-bootstrap";
import { motion, useScroll, useTransform } from "framer-motion";
function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  return (
    <>
      <div id="full-image">
        <Open />
      </div>
      <motion.div style={{ y: backgroundY }}>
        <section id="main-content" className="bg-white">
          <h1
            id="champions"
            className="display-1 d-flex justify-content-center"
          >
            Building Champions
          </h1>
          <div className="row">
            <div className="col-6">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/-CtD2fIFG-Q?autoplay=1&loop=1&playlist=-CtD2fIFG-Q"
                  title="Youtube video"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </section>
      </motion.div>
    </>
  );
}

export default Home;
