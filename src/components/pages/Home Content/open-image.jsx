import React, { useRef } from "react";
import Header from "../../header";
import { motion, useScroll, useTransform } from "framer-motion";
function Open() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const moveUp = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const moveHeader = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const moveScripture = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  return (
    
    <motion.div
      initial={{ y: 0 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div id="">
      <motion.div style={{ y: moveUp }}>
        <section
          id="open-section"
          className="page-section call-to-action d-flex"
        >
        </section>
      </motion.div>
      </div>
    </motion.div>
    
    
  );
}

export default Open;
