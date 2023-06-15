import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <div className="container-hero">
        <div className="intro">
          <h3 className="title">Hello there</h3>
          <h1 className="h1-hero">DESIGN & ARCHITECTURE STUDIO</h1>
          <div className="btn-wrapper">
            <button>contact</button>
            <button>book now</button>
          </div>
        </div>
        <div className="pictures-section">
          <div className="shape1"></div>
          <div className="shape2"></div>
          <div className="shape3"></div>
          <div className="shape4"></div>
        </div>
      </div>
    </>
  );
}

export default App;
