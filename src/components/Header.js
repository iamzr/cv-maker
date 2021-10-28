import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import example from "../components/example";

function Header({ setCV }) {
  function loadExample() {
    setCV((cv) => {
      return (cv = example);
    });
  }

  function reset() {
    setCV(
      (cv) =>
        (cv = {
          personal: [],
          experience: [],
          education: [],
          skills: [],
        })
    );
  }

  return (
    <header>
      <div id="logo">CV Maker</div>
      <div id="options-container">
        <Button id="load-example" onClick={loadExample}>
          Load Example
        </Button>{" "}
        <Button id="generate-pdf">Generate PDF</Button>{" "}
        <Button id="reset" onClick={reset}>
          Reset
        </Button>{" "}
        {/* <Button id="settings">Settings</Button>{" "} */}
      </div>
    </header>
  );
}

export default Header;
