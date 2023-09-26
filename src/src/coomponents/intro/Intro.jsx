import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Designer", "Content Creator"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assests/pic1.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>
            <span>A</span>taf Eleid
          </h1>
          <h3>
            Developper <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assests/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}