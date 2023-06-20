import {React, useEffect} from "react";
import heroImage from "../../assets/cut-outs2.png";
import "./Hero.css";
const Hero = () => {
  useEffect(() => {
    const updateVh = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    window.addEventListener('resize', updateVh);
    updateVh();
    return () => {
      window.removeEventListener('resize', updateVh);
    };
  }, []);
  return (
    <div className="wrapper">
      <div className="container-hero">
        <div className="intro">
          <h3 className="title">Welcome to Our</h3>
          <h1 className="h1-hero">DESIGN & ARCHITECTURE STUDIO</h1>
          <div className="btn-wrapper">
            <button className="btn-round-pink">GET IN TOUCH</button>
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
