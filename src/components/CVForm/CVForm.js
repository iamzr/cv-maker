import "./CVForm.css";
import React from "react";
import Personal from "./personal";
import Experience from "./experience";
import Education from "./education";
import Skills from "./skills";

function CVForm(props) {
  const { updateState, removeItem } = props;

  return (
    <div className="cv-form">
      <form onSubmit={(e) => e.preventDefault()}>
        <Personal updateState={updateState}></Personal>
        <Experience
          updateState={updateState}
          removeItem={removeItem}
        ></Experience>
        <Education
          updateState={updateState}
          removeItem={removeItem}
        ></Education>
        <Skills updateState={updateState} removeItem={removeItem}></Skills>
      </form>
    </div>
  );
}

export default CVForm;
