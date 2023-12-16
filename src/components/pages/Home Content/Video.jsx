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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </Media>
    </div>
  );
}

export default Video;
