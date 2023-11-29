import React, { useRef } from "react";
import Open from "./open-image";
import SmallOpen from "./Open-sm";
import { motion, useScroll, useTransform } from "framer-motion";
import Media from "react-media";
import Content from "./homeContent";
import "./Home.css";
import ContentSmall from "./ContentSmall";

function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const backgroundYs = useTransform(scrollYProgress, [0, 1], ["0%", "-2%"]);

  return (
    <>
      <Media query="(max-width: 768px)">
        <div id="">
          <div id="full-image">
          <SmallOpen/>
          </div>
          <motion.div style={{y:backgroundYs}}>
          <ContentSmall/>
          </motion.div>
        </div>
      </Media>

      <Media query="(min-width: 769px)">
        <div id="container">
          <div id="full-image">
            <Open />
          </div>
          <motion.div style={{ y: backgroundY }}>
            <Content />
          </motion.div>
        </div>
      </Media>
    </>
  );
}

export default Home;
