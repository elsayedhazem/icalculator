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
            value="CE"
            color="grey-1"
          />
          <Button
            buttonClickHandler={this.handleButtonClick}
            value="("
            color="grey-1"
          />
          <Button
            buttonClickHandler={this.handleButtonClick}
            value=")"
            color="grey-1"
          />
          <Button
            buttonClickHandler={this.handleButtonClick}
            value="÷"
            color="orange"
          />
        </div>

        <div className="button-row">
          <Button
            buttonClickHandler={this.handleButtonClick}
            value="7"
            color="grey-2"
          />
          <Button
            buttonClickHandler={this.handleButtonClick}
            value="8"
            color="grey-2"
          />
          <Button
            buttonClickHandler={this.handleButtonClick}
            value="9"
            color="grey-2"
          />
          <Button
            buttonClickHandler={this.handleButtonClick}
            value="x"
            color="orange"
          />
        </div>

        <div className="button-row">
          <Button
            buttonClickHandler={this.handleButtonClick}
            value="4"
            color="grey-2"
          />
          <Button
            buttonClickHandler={this.handleButtonClick}
            value="5"
            color="grey-2"
          />
          <Button
            buttonClickHandler={this.handleButtonClick}
            value="6"
            color="grey-2"
          />
          <Button
            buttonClickHandler={this.handleButtonClick}
            value="-"
            color="orange"
          />
        </div>

        <div className="button-row">
          <Button
            buttonClickHandler={this.handleButtonClick}
            value="1"
            color="grey-2"
          />
          <Button
            buttonClickHandler={this.handleButtonClick}
            value="2"
            color="grey-2"
          />
          <Button
            buttonClickHandler={this.handleButtonClick}
            value="3"
            color="grey-2"
          />
          <Button
            buttonClickHandler={this.handleButtonClick}
            value="+"
            color="orange"
          />
        </div>

        <div className="button-row">
          <Button
            buttonClickHandler={this.handleButtonClick}
            value="0"
            color="grey-2"
            id="zero"
          />
          <Button
            buttonClickHandler={this.handleButtonClick}
            value="."
            color="grey-2"
          />
          <Button
            buttonClickHandler={this.handleButtonClick}
            value="="
            color="orange"
          />
        </div>
      </div>
    );
  }
}
