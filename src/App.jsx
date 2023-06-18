import { useState } from "react";
import viteLogo from "/vite.svg";

import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Welcome />
      <About />
    </>
  );
}

export default App;
