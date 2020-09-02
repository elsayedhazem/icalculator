import React, { Component } from "react";
import "./Button.css";
import { calculate } from "./logic.js";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.getNewDisplayValue = this.getNewDisplayValue.bind(this);
  }

  getNewDisplayValue(oldDisplayValue) {
    const [buttonType, buttonValue] = [this.props.buttonType, this.props.value];

    let displayValue =
      oldDisplayValue.trim() === "0" || oldDisplayValue.indexOf("Error") !== -1
        ? ""
        : oldDisplayValue;

    switch (buttonType) {
      case "character":
        displayValue += buttonValue;
        break;

      case "operation":
        switch (buttonValue) {
          case "-":
            const symbols = ["-", "+", "x", "/", "÷"];

            if (symbols.indexOf(displayValue.trim().slice(-1)) !== -1) {
              displayValue += buttonValue;
            } else {
              displayValue += " " + buttonValue + " ";
            }
            break;

          default:
            displayValue += " " + buttonValue + " ";
            break;
        }
        break;

      case "clear":
        displayValue = "0";
        break;

      case "equals":
        displayValue = calculate(displayValue);
        break;

      default:
        break;
    }

    return displayValue;
  }

  render() {
    return (
      <button
        onClick={() => this.props.buttonClickHandler(this.getNewDisplayValue)}
        className={"component-Button button-" + this.props.color}
        id={this.props.id}
      >
        {this.props.value}
      </button>
    );
  }
}
