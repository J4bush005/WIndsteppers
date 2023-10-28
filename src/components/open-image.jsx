import React, { useRef } from "react";
import Header from ".//header";
import { useScroll, useTransform } from "framer-motion";
function Open() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
    <section id="open-section" className="page-section call-to-action d-flex">
      <Header />
      <h1 id="team-name" className="text-break">
        Windsteppers
      </h1>
    </section>
  );
}

export default Open;
