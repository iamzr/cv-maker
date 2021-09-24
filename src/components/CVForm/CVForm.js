import "./CVForm.css";
import React, { Component } from "react";
import CVPreview from "../CVPreview/CVPreview";
import Personal from "./personal";

class CVForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  updateState = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="cv-form">
        <form>
          <Personal></Personal>
          <div className="form-section">
            <h2>Experience</h2>
            <label htmlFor="jobTitle">Job Title</label>
            <input name="jobTitle" onChange={this.updateState}></input>
            <label htmlFor="company">Company</label>
            <input name="company" onChange={this.updateState}></input>
            <label htmlFor="startDate">Start Date</label>
            <input
              name="startDate"
              type="date"
              onChange={this.updateState}
            ></input>
            <label htmlFor="endDate">End Date</label>
            <input
              name="endDate"
              type="date"
              onChange={this.updateState}
            ></input>
            <label htmlFor="text">Details</label>
            <input
              name="text"
              type="textarea"
              onChange={this.updateState}
            ></input>
          </div>

          <div>
            <h2>Education</h2>
            <label htmlFor="institute">Institution</label>
            <input name="institute" onChange={this.updateState}></input>
            <label htmlFor="qual">Qualification</label>
            <input name="qual" onChange={this.updateState}></input>
            <label htmlFor="grade">Grade</label>
            <input name="grade" onChange={this.updateState}></input>
            <label htmlFor="startDate">Start Date</label>
            <input
              name="startDate"
              type="date"
              onChange={this.updateState}
            ></input>
            <label htmlFor="endDate">End Date</label>
            <input
              name="endDate"
              type="date"
              onChange={this.updateState}
            ></input>
          </div>

          <div>
            <h2>Skills</h2>
            <label htmlFor="skill">Skill:</label>
            <input name="skill1" onChange={this.updateState}></input>
            <label htmlFor="skill2">Skill:</label>
            <input name="skill2" onChange={this.updateState}></input>
          </div>
        </form>
        <div className="CVPreview">
          <h2>CV Preview</h2>
          <CVPreview data={this.state}></CVPreview>
        </div>
      </div>
    );
  }
}

export default CVForm;
