import React, { useEffect, useState } from "react";
import heroImage from "../../assets/cut-outs2.png";
import "./Hero.css";

const Hero = (props) => {
  const [inTouch, setInTouch] = useState(false);
  useEffect(() => {
    const updateVh = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    window.addEventListener("resize", updateVh);
    updateVh();
    return () => {
      window.removeEventListener("resize", updateVh);
    };
  }, []);
  return (
    <div className="wrapper">
      <div className="container-hero">
        <div className="intro">
          <h3 className="title">Welcome to</h3>
          <h1 className="h1-hero">{props.name} DESIGN & ARCHITECTURE STUDIO</h1>
          <div className="btn-wrapper">
            <button
              onClick={() => setInTouch(true)}
              disabled={inTouch}
              className="btn-round-pink"
            >
              {!inTouch ? "Get in touch" : "Thankyou!"}
            </button>
          </div>
        </div>
        <div className="image-hero">
          <img src={heroImage} alt="Hero Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
