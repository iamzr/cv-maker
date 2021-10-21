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
      <form>
        <Personal updatestate={updateState}></Personal>
        <Experience updatestate={updateState}></Experience>
        <Education updatestate={updateState}></Education>
        <Skills updatestate={updateState}></Skills>
      </form>
    </div>
  );
}

export default CVForm;
