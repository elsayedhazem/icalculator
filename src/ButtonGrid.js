import React, { Component } from "react";
import Button from "./Button.js";
import "./ButtonGrid.css";

export default class ButtonGrid extends Component {
  render() {
    return (
      <div id="component-ButtonGrid">
        <div className="button-row">
          <Button value="CE" color="grey-1" />
          <Button value="(" color="grey-1" />
          <Button value=")" color="grey-1" />
          <Button value="÷" color="orange" />
        </div>

        <div className="button-row">
          <Button value="7" color="grey-2" />
          <Button value="8" color="grey-2" />
          <Button value="9" color="grey-2" />
          <Button value="x" color="orange" />
        </div>

        <div className="button-row">
          <Button value="4" color="grey-2" />
          <Button value="5" color="grey-2" />
          <Button value="6" color="grey-2" />
          <Button value="-" color="orange" />
        </div>

        <div className="button-row">
          <Button value="1" color="grey-2" />
          <Button value="2" color="grey-2" />
          <Button value="3" color="grey-2" />
          <Button value="+" color="orange" />
        </div>

        <div className="button-row">
          <Button value="0" color="grey-2" id="zero" />
          <Button value="." color="grey-2" />
          <Button value="=" color="orange" />
        </div>
      </div>
    );
  }
}
