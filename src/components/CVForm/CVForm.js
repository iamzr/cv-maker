import "./CVForm.css";
import React from "react";
import Personal from "./personal";
import Experience from "./experience";
import Education from "./education";
import Skills from "./skills";

function CVForm(props) {
  const { updateState } = props;

  return (
    <div className="cv-form">
      <form onSubmit={(e) => e.preventDefault()}>
        <Personal updateState={updateState}></Personal>
        <Experience updateState={updateState}></Experience>
        <Education updateState={updateState}></Education>
        <Skills updateState={updateState}></Skills>
      </form>
    </div>
  );
}

export default CVForm;
