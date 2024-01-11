import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Media from "react-media";

function Video() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  return (
    <div className="container" style={{ textY }}>
      <Media query="(max-width: 767px)">
        <div className="row">
          <div className="col-md-5 col-sm-12 col-xs-12">
            <div id="words-home" className="fs-4 ">
              For over 30 years, Windsteppers Track Club has been a breeding
              ground for champions, consistently producing national titleholders
              in various disciplines, from racewalk and sprints to throws,
              jumps, and even pole vault. Our program is meticulously crafted
              with the singular goal of fostering champions, not only on the
              track but also in life. Whether nurturing the potential of
              children or teenagers, our legacy is defined by the numerous boys
              and girls who have ascended to national champion status under our
              guidance. At the Windstepper family, the pursuit of excellence is woven into
              the fabric of our program, instilling values that extend far
              beyond the athletic arena, shaping individuals who are champions
              both on and off the track.
            </div>
          </div>
          <div className="col-md-7 col-sm-12 col-xs-12">
            <div className="ratio ratio-21x9">
              <iframe
                src="https://www.youtube.com/embed/-CtD2fIFG-Q?autoplay=1&mute=1&loop=1&playlist=-CtD2fIFG-Q"
                title="Youtube video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </Media>
      <Media query="(min-width: 768px)">
        <div className="row">
          <div className="col-md-5 col-sm-12 col-xs-12">
            <div className="ratio ratio-21x9">
              <iframe
                src="https://www.youtube.com/embed/-CtD2fIFG-Q?autoplay=1&mute=1&loop=1&playlist=-CtD2fIFG-Q"
                title="Youtube video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col-md-7 col-sm-12 col-xs-12">
            <div id="words-home" className="fs-4">
              For over 30 years, Windsteppers Track Club has been a breeding
              ground for champions, consistently producing national titleholders
              in various disciplines, from racewalk and sprints to throws,
              jumps, and even pole vault. Our program is meticulously crafted
              with the singular goal of fostering champions, not only on the
              track but also in life. Whether nurturing the potential of
              children or teenagers, our legacy is defined by the numerous boys
              and girls who have ascended to national champion status under our
              guidance. At the Windstepper family, the pursuit of excellence is woven into
              the fabric of our program, instilling values that extend far
              beyond the athletic arena, shaping individuals who are champions
              both on and off the track.
            </div>
          </div>
        </div>
      </Media>
    </div>
  );
}

export default Video;
