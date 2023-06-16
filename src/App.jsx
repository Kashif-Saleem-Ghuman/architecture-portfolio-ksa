import { useState } from "react";
import viteLogo from "/vite.svg";
import heroImage from "./assets/cut-out1.svg";
import "./App.css";
import Header from "./Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <div className="container-hero">
        <div className="intro">
          <h3 className="title">Welcome to Our</h3>
          <h1 className="h1-hero">DESIGN & ARCHITECTURE STUDIO</h1>
          <div className="btn-wrapper">
            <button className="btn-round-pink">GET IN TOUCH</button>
        
          </div>
        </div>
        <div className="image-hero">
          <img  src={heroImage} alt="Hero Image" />
        </div>
        
       
      </div>
    </>
  );
}

export default App;
