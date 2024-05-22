import React from "react";
import "./App.css";
import Navbar from "./composents/Navbar/Navbar.jsx";
import Hero from "./composents/Hero/Hero.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
      </div>
    </>
  );
};

export default App;
