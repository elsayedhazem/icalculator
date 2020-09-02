import React, { Component } from "react";
import Navbar from "./Navbar.js";
import Display from "./Display.js";
import ButtonGrid from "./ButtonGrid.js";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: "0",
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(func) {
    const displayValue = this.state.displayValue;
    console.log(displayValue);
    this.setState({
      displayValue: func(displayValue),
    });
  }

  render() {
    return (
      <div id="App">
        <Navbar />
        <Display value={this.state.displayValue} />
        <ButtonGrid buttonClickHandler={this.handleButtonClick} />
      </div>
    );
  }
}
