import React, { useRef } from "react";
import Open from '../open-image'
import { motion, useScroll, useTransform } from "framer-motion";
function Home() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0,1], ["0%", "200%"]);
  return (
    <>
     <Open/>
     <section>
        <h1 id="test" className="d-flex justify-content-center">HELLO</h1>
        <h1 id="test" className="d-flex justify-content-center">HELLO</h1>
        <h1 id="test" className="d-flex justify-content-center">HELLO</h1>
        <h1 id="test" className="d-flex justify-content-center">HELLO</h1>
     </section>
    </>
  );
}

export default Home;
