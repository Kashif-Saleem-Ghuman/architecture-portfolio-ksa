import { useState } from "react";
import "./App.css";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Welcome from "./pages/Welcome/Welcome";
import About from  "./pages/About/About";

function App() {
  return (
    <>
      <Header />
      <Hero name="KSA"/>  
      <About />
    </>
  );
}

export default App;
