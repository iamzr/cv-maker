import React, { Component } from "react";
import "./CVPreview.css";
import PersonalItem from "./personalItem";
import Experience from "./experience";
import Education from "./education";
import Skills from "./skills";

class CVPreview extends Component {
  render() {
    const { personal, experience, education, skills } = this.props.data;

    return (
      <div className="preview">
        {/* <PersonalItem data={personal[0]}></PersonalItem> */}

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
