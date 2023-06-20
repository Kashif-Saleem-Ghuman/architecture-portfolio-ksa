import { useState } from "react";
import "./App.css";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import About from  "./pages/About/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero/>  
      <About />
    </>
  );
}

export default App;
