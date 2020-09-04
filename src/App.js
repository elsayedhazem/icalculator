import React, { Component } from "react";
import Navbar from "./Navbar.js";
import Display from "./Display.js";
import ButtonGrid from "./ButtonGrid.js";
import "./App.css";
import { calculate } from "./logic.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: "0",
    };

    this.setDisplayValue = this.setDisplayValue.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.displayRef = React.createRef();
  }

  setDisplayValue(input) {
    const characters = "1234567890.()".split("");

    const oldDisplayValue = this.state.displayValue;
    let displayValue =
      oldDisplayValue.trim() === "0" || oldDisplayValue.indexOf("Error") !== -1
        ? ""
        : oldDisplayValue;

    let inputType;
    if (input === "CE") inputType = "clear";
    else if (input === "=" || input === "Enter") inputType = "equals";
    else if (characters.indexOf(input) !== -1) inputType = "character";
    else if (input === "Backspace") inputType = "backspace";
    else inputType = "operation";

    switch (inputType) {
      case "character":
        displayValue += input;
        break;

      case "operation":
        switch (input) {
          case "-":
            const symbols = ["-", "+", "x", "/", "÷"];

            if (symbols.indexOf(displayValue.trim().slice(-1)) !== -1) {
              displayValue += input;
            } else {
              displayValue += " " + input + " ";
            }
            break;

          default:
            displayValue += " " + input + " ";
            break;
        }
        break;

      case "clear":
        displayValue = "0";
        break;

      case "equals":
        displayValue = calculate(displayValue);
        break;

      case "backspace":
        displayValue = displayValue.substring(0, displayValue.length - 1);
        break;

      default:
        break;
    }

    inputType &&
      this.setState({
        displayValue: displayValue,
      });
  }

  handleButtonClick(buttonValue) {
    this.setDisplayValue(buttonValue);
    this.displayRef.current.focusDisplay();
  }

  handleKeyDown(event) {
    event.preventDefault();
    console.log(event.key);
    const goodKeys = "1234567890x÷/+-.()".split("");
    goodKeys.push("Enter", "Backspace");
    if (goodKeys.indexOf(event.key) !== -1) {
      this.setDisplayValue(event.key);
    }
  }

  render() {
    return (
      <div id="App">
        <Navbar />
        <Display
          keyDownHandler={this.handleKeyDown}
          ref={this.displayRef}
          value={this.state.displayValue}
        />
        <ButtonGrid buttonClickHandler={this.handleButtonClick} />
      </div>
    );
  }
}
