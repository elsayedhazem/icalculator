import React, { Component } from "react";
import Button from "./Button.js";
import "./ButtonGrid.css";

export default class ButtonGrid extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(func) {
    this.props.buttonClickHandler(func);
  }

  render() {
    return (
      <div id="component-ButtonGrid">
        <div className="button-row">
          <Button
            buttonClickHandler={this.handleButtonClick}
            displayValue={this.props.displayValue}
            value="CE"
            color="grey-1"
            buttonType="clear"
          />
          <Button
            buttonClickHandler={this.handleButtonClick}
            displayValue={this.props.displayValue}
            value="("
            color="grey-1"
            buttonType="character"
          />
          <Button
            buttonClickHandler={this.handleButtonClick}
            displayValue={this.props.displayValue}
            value=")"
            color="grey-1"
            buttonType="character"
          />
          <Button
            buttonClickHandler={this.handleButtonClick}
            displayValue={this.props.displayValue}
            value="÷"
            color="orange"
            buttonType="operation"
          />
        </div>

        <div className="button-row">
          <Button
            buttonClickHandler={this.handleButtonClick}
            displayValue={this.props.displayValue}
            value="7"
            color="grey-2"
            buttonType="character"
          />
          <Button
            buttonClickHandler={this.handleButtonClick}
            displayValue={this.props.displayValue}
            value="8"
            color="grey-2"
            buttonType="character"
          />
          <Button
            buttonClickHandler={this.handleButtonClick}
            displayValue={this.props.displayValue}
            value="9"
            color="grey-2"
            buttonType="character"
          />
          <Button
            buttonClickHandler={this.handleButtonClick}
            displayValue={this.props.displayValue}
            value="x"
            color="orange"
            buttonType="operation"
          />
        </div>

        <div className="button-row">
          <Button
            buttonClickHandler={this.handleButtonClick}
            displayValue={this.props.displayValue}
            value="4"
            color="grey-2"
            buttonType="character"
          />
          <Button
            buttonClickHandler={this.handleButtonClick}
            displayValue={this.props.displayValue}
            value="5"
            color="grey-2"
            buttonType="character"
          />
          <Button
            buttonClickHandler={this.handleButtonClick}
            displayValue={this.props.displayValue}
            value="6"
            color="grey-2"
            buttonType="character"
          />
          <Button
            buttonClickHandler={this.handleButtonClick}
            displayValue={this.props.displayValue}
            value="-"
            color="orange"
            buttonType="operation"
          />
        </div>

        <div className="button-row">
          <Button
            buttonClickHandler={this.handleButtonClick}
            displayValue={this.props.displayValue}
            value="1"
            color="grey-2"
            buttonType="character"
          />
          <Button
            buttonClickHandler={this.handleButtonClick}
            displayValue={this.props.displayValue}
            value="2"
            color="grey-2"
            buttonType="character"
          />
          <Button
            buttonClickHandler={this.handleButtonClick}
            displayValue={this.props.displayValue}
            value="3"
            color="grey-2"
            buttonType="character"
          />
          <Button
            buttonClickHandler={this.handleButtonClick}
            displayValue={this.props.displayValue}
            value="+"
            color="orange"
            buttonType="operation"
          />
        </div>

        <div className="button-row">
          <Button
            buttonClickHandler={this.handleButtonClick}
            displayValue={this.props.displayValue}
            value="0"
            color="grey-2"
            buttonType="character"
            id="zero"
          />
          <Button
            buttonClickHandler={this.handleButtonClick}
            displayValue={this.props.displayValue}
            value="."
            color="grey-2"
            buttonType="character"
          />
          <Button
            buttonClickHandler={this.handleButtonClick}
            displayValue={this.props.displayValue}
            value="="
            color="orange"
            buttonType="equals"
          />
        </div>
      </div>
    );
  }
}
