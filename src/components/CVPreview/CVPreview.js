import React, { Component } from "react";
import "./CVPreview.css";
import PersonalItem from "./personalItem";
import ExperienceItem from "./experienceItem";

class CVPreview extends Component {
  renderDivs(object) {
    let divs = [];
    for (let key in object) {
      divs.push(<ExperienceItem experience={object[key]}></ExperienceItem>);
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
          <div>{this.renderDivs(experience)}</div>
        </div>

        <div className="section">
          <div className="heading">Education</div>
          <div className="line1">
            <div>{education.institute}</div>
            <div className="dates">
              {education.startDate} - {education.endDate}
            </div>
          </div>
          <div className="line3">
            <div>{education.qual}</div>
            <div>{education.grade}</div>
          </div>
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
