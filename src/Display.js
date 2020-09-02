import React, { Component } from "react";
import "./Display.css";

export default class Display extends Component {
  render() {
    return (
      <div id="component-Display" contentEditable="true" autocfocus="true">
        {this.props.value}
      </div>
    );
  }
}
