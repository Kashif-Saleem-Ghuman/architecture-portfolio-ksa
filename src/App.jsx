import { useEffect} from "react";
import "./App.css";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
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
