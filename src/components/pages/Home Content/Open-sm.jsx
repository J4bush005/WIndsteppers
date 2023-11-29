import React, { useRef } from "react";
import Header from "../../header";
import { motion, useScroll, useTransform } from "framer-motion";

function Opensmall() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const moveUp = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]);
  const moveHeader = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const moveScripture = useTransform(scrollYProgress, [0, 1], ["0%", "-110%"]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div id="">
        <Header/>
        <motion.div style={{ y: moveUp }}>
          <section
            id="open-section-sm"
            className="page-section call-to-action d-flex"
          >
            <motion.div
              style={{ y: moveHeader }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
            >
              
            </motion.div>
            <motion.h1
              style={{ y: moveScripture }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              id="scripture-abbr"
            >
              ECCL 9:11
            </motion.h1>
            <motion.h1
              style={{ y: textY }}
              id="team-name-sm"
              className="text-break d-flex justify-content-center"
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                W
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                viewport={{ once: true }}
              >
                I
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                viewport={{ once: true }}
              >
                N
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
                viewport={{ once: true }}
              >
                D
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.3 }}
                viewport={{ once: true }}
              >
                S
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              >
                T
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.7 }}
                viewport={{ once: true }}
              >
                E
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.9 }}
                viewport={{ once: true }}
              >
                P
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.1 }}
                viewport={{ once: true }}
              >
                P
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.3 }}
                viewport={{ once: true }}
              >
                E
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
                viewport={{ once: true }}
              >
                R
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.7 }}
                viewport={{ once: true }}
              >
                S
              </motion.span>
            </motion.h1>
          </section>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Opensmall;
