import "./CVForm.css";
import React from "react";
import Personal from "./personal";
import Experience from "./experience";
import Education from "./education";
import Skills from "./skills";
import Data from "../../data";

function CVForm(props) {
  const { updateState, removeItem, state } = props;

  return (
    <div className="cv-form">
      <form onSubmit={(e) => e.preventDefault()}>
        <Personal updateState={updateState}></Personal>
        <Experience
          state={state.experience}
          updateState={updateState}
          removeItem={removeItem}
        ></Experience>
        <Education
          updateState={updateState}
          removeItem={removeItem}
        ></Education>
        <Skills updateState={updateState} removeItem={removeItem}></Skills>
      </form>
      <Data></Data>
    </div>
  );
}

export default CVForm;
