import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div id="logo">CV Maker</div>
        <div id="options-container">
          <button id="load-example">Load Example</button>
          <button id="generate-pdf">Generate PDF</button>
          <button id="reset">Reset</button>
          <button id="settings">Settings</button>
        </div>
      </header>
    );
  }
}

export default Header;
