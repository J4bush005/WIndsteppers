import React, { useRef } from "react";
import Open from "./open-image";
import SmallOpen from "./Open-sm";
import { motion, useScroll, useTransform } from "framer-motion";
import Media from "react-media";
import Content from "./homeContent";
import "./Home.css";


function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const backgroundYs = useTransform(scrollYProgress, [0, 1], ["0%", "-0npm%"]);

  return (
    <>
        <div id="container">
          <div id="full-image">
            <Open />
          </div>
          <motion.div style={{ y: backgroundY }}>
            <Content />
          </motion.div>
        </div>
    </>
  );
}

export default Home;
