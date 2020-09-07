import React, { Component } from "react";
import Navbar from "./Navbar.js";
import Display from "./Display.js";
import ButtonGrid from "./ButtonGrid.js";
import "./App.css";
import { calculate } from "../logic.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: "0",
    };

    this.setDisplayValue = this.setDisplayValue.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.displayRef = React.createRef(); // reference to Display component
  }

  setDisplayValue(input) {
    const characters = "1234567890.()".split(""); // Any character not present in array will not render to Display

    const oldDisplayValue = this.state.displayValue;

    let displayValue =
      oldDisplayValue.trim() === "0" || oldDisplayValue.indexOf("Error") !== -1
        ? ""
        : oldDisplayValue;

    let inputType;
    /* 
    inputType possible values (used to determine how display will be manipulated):
    'clear' when CE button is clicked
    'equals' when Enter is pressed or = button is clicked
    'backspace' when backspace is is pressed
    'character' when a valid character's button is clicked or pressed
    'operation' on characters that resemble mathematical operations
    undefined when none of the above, in which case view will not change.
    */

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
              displayValue += ` ${input} `;
            }
            break;

          default:
            displayValue += ` ${input} `;
            break;
        }
        break;

      case "clear":
        displayValue = "0";
        break;

      case "equals":
        /* 
        Magic is done on the string,
        a valid answer is returned, or 'Syntax Error', or 'Math Error',  or 'Error' when we dont know what happened
        go to logic.js for implementation details 
        */
        displayValue = calculate(displayValue);
        break;

      case "backspace":
        displayValue = displayValue.substring(0, displayValue.length - 1);
        break;

      default:
        break;
    }

    // Display will only update when key pressed is not a bad character
    inputType &&
      this.setState({
        displayValue: displayValue,
      });
  }

  // called by Button on click
  handleButtonClick(buttonValue) {
    this.setDisplayValue(buttonValue);
    this.displayRef.current.focusDisplay();
  }

  // called by Display on key down
  handleKeyDown(event) {
    event.preventDefault(); // Browser behavior will be affected until more efficient method is found.
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
          ref={this.displayRef} // Reference lift up to return focus to Display after Button clicks
          value={this.state.displayValue}
        />
        <ButtonGrid buttonClickHandler={this.handleButtonClick} />
      </div>
    );
  }
}
