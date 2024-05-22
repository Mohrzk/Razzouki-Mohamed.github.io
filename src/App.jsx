import React from "react";
import "./App.css";
import Navbar from "./composents/Navbar/Navbar.jsx";
import Hero from "./composents/Hero/Hero.jsx";
import Skills from "./composents/Skills/Skills.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
      </div>
    </>
  );
};

export default App;
