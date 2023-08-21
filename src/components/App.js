import React from "react";
import About from "./about"
import Home from "./home"
import NavBar from "./Navbar";

function App() {
  return (
    <div>
      <NavBar />
      <Home/>
      <About paragraph={{words:"Paragraph 1"}}/>
      <About paragraph={{words:"Paragraph 2"}}/>
      <About paragraph={{words:"Paragraph 3"}}/>
    </div>
  );
}

export default App;
