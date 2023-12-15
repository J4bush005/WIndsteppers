import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Jamison from "../../../Photos/Jamison Medal.webp";
import Thomas from "../../../Photos/Thomas Medal.webp";
import Sage from "../../../Photos/Sage Medal.webp";

function Pictures() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  return (
    <div id="picture-format" className="container d-flex">
      <motion.div
        style={{ y: textY }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="col-lg-4 col-md-4  d-flex justify-content-center"
      >
        <img src={Jamison} alt="" className="img-fluid" id="jamison" />
      </motion.div>
      <motion.div
        style={{ y: textY }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        className="col-lg-4 d-flex justify-content-center"
      >
        <img src={Thomas} alt="" className="img-fluid" id="thomas" />
      </motion.div>
      <motion.div
        style={{ y: textY }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        viewport={{ once: true }}
        className="col-lg-4 d-flex justify-content-center"
      >
        <img src={Sage} alt="" className="img-fluid" id="thomas" />
      </motion.div>
    </div>
  );
}

export default Pictures;
