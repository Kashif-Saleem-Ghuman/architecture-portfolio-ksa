import { useState } from "react";
import viteLogo from "/vite.svg";
import heroImage from "./assets/cut-outs2.png";
import "./App.css";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero/>
      
    </>
  );
}

export default App;
