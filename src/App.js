import React from "react";
import Navbar from "./Navbar.js";
import Display from "./Display.js";
import ButtonGrid from "./ButtonGrid.js";
import "./App.css";

export default function App() {
  return (
    <div id="App">
      <Navbar />
      <Display />
      <ButtonGrid />
    </div>
  );
}
