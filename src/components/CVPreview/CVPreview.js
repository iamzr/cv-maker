import React, { Component } from "react";
import "./CVPreview.css";
import Experience from "./experience";
import Education from "./education";
import Skills from "./skills";
import Personal from "./personal";

class CVPreview extends Component {
  render() {
    const { personal, experience, education, skills } = this.props.data;

    return (
      <div className="preview">
        <Personal personal={personal}></Personal>

        <div className="section">
          <div className="heading">Experience</div>
          <Experience experience={experience}></Experience>
        </div>

        <div className="section">
          <div className="heading">Education</div>
          <Education education={education}></Education>
        </div>

        <div className="section">
          <div className="heading">Skills</div>
          <Skills skills={skills}></Skills>
        </div>
      </div>
    );
  }
}

export default CVPreview;
