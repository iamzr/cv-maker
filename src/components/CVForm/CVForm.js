import { enumDeclaration } from "@babel/types";
import React, { Component } from "react";

class CVForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <h2>Personal</h2>
          <label htmlfor="first-name">First name</label>
          <input id="first-name"></input>
          <label htmlfor="last-name">Last Name</label>
          <input id="last-name"></input>
          <label htmlfor="phone">Phone Number</label>
          <input id="phone" type="number"></input>
          <label htmlfor="address">Address</label>
          <input id="address"></input>
        </form>
      </div>
    );
  }
}

export default CVForm;
