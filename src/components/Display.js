import React, { Component } from "react";
import "./Display.css";

export default class Display extends Component {
  constructor(props) {
    super(props);
    this.displayRef = React.createRef();
    this.focusDisplay = this.focusDisplay.bind(this);
  }

  componentDidMount() {
    this.focusDisplay();
  }

  focusDisplay() {
    this.displayRef.current.focus();
  }

  render() {
    return (
      <p
        onKeyDown={(event) => this.props.keyDownHandler(event)}
        id="component-Display"
        ref={this.displayRef}
        contentEditable
      >
        {this.props.value}
      </p>
    );
  }
}
