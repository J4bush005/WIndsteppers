import React, { useRef } from "react";
import Header from ".//header";
import { motion, useScroll, useTransform } from "framer-motion";
function Open() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const moveUp = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const moveHeader = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  return (
    <motion.div style={{ y: moveUp }}>
      <section id="open-section" className="page-section call-to-action d-flex">
        <motion.div style={{ y: moveHeader }}>
          <Header />
        </motion.div>
        <motion.h1 style={{ y: textY }} id="team-name" className="text-break">
          Windsteppers
        </motion.h1>
      </section>
    </motion.div>
  );
}

export default Open;
