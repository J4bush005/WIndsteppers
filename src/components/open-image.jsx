import React, { useRef } from "react";
import Header from ".//header";
import { animate, motion, useScroll, useTransform } from "framer-motion";
function Open() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const moveUp = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const moveHeader = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const moveScripture = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  return (
    <motion.div
      initial={{ y: 900 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div style={{ y: moveUp }}>
        <section
          id="open-section"
          className="page-section call-to-action d-flex"
        >
          <motion.div
            style={{ y: moveHeader }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
          >
            <Header />
          </motion.div>
          <motion.h1
            style={{ y: moveScripture }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            id="scripture-abbr"
          >
            Ecc 9:11
          </motion.h1>
          <motion.h1 style={{ y: textY }} id="team-name" className="text-break">
            <motion.span
              initial={{ y: 300 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              W
            </motion.span>
            <motion.span
              initial={{ y: 300 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
            >
              I
            </motion.span>
            <motion.span
              initial={{ y: 300 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              viewport={{ once: true }}
            >
              N
            </motion.span>
            <motion.span
              initial={{ y: 300 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              viewport={{ once: true }}
            >
              D
            </motion.span>
            <motion.span
              initial={{ y: 300 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
              viewport={{ once: true }}
            >
              S
            </motion.span>
            <motion.span
              initial={{ y: 300 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              viewport={{ once: true }}
            >
              T
            </motion.span>
            <motion.span
              initial={{ y: 300 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, delay: 1.7 }}
              viewport={{ once: true }}
            >
              E
            </motion.span>
            <motion.span
              initial={{ y: 300 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, delay: 1.9 }}
              viewport={{ once: true }}
            >
              P
            </motion.span>
            <motion.span
              initial={{ y: 300 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, delay: 2.1 }}
              viewport={{ once: true }}
            >
              P
            </motion.span>
            <motion.span
              initial={{ y: 300 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, delay: 2.3 }}
              viewport={{ once: true }}
            >
              E
            </motion.span>
            <motion.span
              initial={{ y: 300 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
              viewport={{ once: true }}
            >
              R
            </motion.span>
            <motion.span
              initial={{ y: 300 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, delay: 2.7 }}
              viewport={{ once: true }}
            >
              S
            </motion.span>
          </motion.h1>
        </section>
      </motion.div>
    </motion.div>
  );
}

export default Open;
