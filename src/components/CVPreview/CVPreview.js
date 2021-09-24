import React, { Component } from "react";
import "./CVPreview.css";

class CVPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { personal, experience, education, skills } = this.props.data;

    return (
      <div className="preview">
        <div className="header">
          <div className="name">
            {personal.firstName} {personal.lastName}
          </div>
          <div>
            {personal.phone} | {personal.email}
          </div>
          <div>{personal.address}</div>
        </div>

        <div className="section">
          <div className="heading">Experience</div>
          <div className="line1">
            <div>{experience.jobTitle}</div>
            <div className="dates">
              {experience.startDate} - {experience.endDate}
            </div>
          </div>
          <div className="line2">
            <div>{experience.company}</div>
          </div>
          <ul className="line3">
            <li>{experience.text}</li>
          </ul>
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
