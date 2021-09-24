import React, { Component } from "react";
import "./CVPreview.css";
import PersonalItem from "./personalItem";
import Experience from "./experience";
import Education from "./education";

class CVPreview extends Component {
  renderDivs(object) {
    let divs = [];
    for (let key in object) {
 
      );
    }
    return divs;
  }

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
          <div className="line1">
            <div>{skills.institute}</div>
            <div className="dates">
              {skills.startDate} - {skills.endDate}
            </div>
          </div>
          <div className="line3">
            <div>{skills.qual}</div>
            <div>{skills.grade}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CVPreview;
