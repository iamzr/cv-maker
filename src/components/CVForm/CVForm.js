import "./CVForm.css";
import React, { Component } from "react";
import CVPreview from "../CVPreview/CVPreview";
import Personal from "./personal";
import Experience from "./experience";
import Education from "./education";
import Skills from "./skills";
import ExperienceItem from "./experienceItem";

class CVForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {},
      experience: {},
      education: {},
      skills: {},
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState = (e) => {
    // console.log(e.target.parentNode.parentNode);
    const parentNode = e.target.parentNode.parentNode.id;
    this.setState((prevState) => ({
      [parentNode]: {
        ...prevState[parentNode],
        [e.target.name]: e.target.value,
      },
    }));
  };

  render() {
    return (
      <div className="cv-form">
        <form>
          <Personal updateState={this.updateState}></Personal>
          <Experience updateState={this.updateState}></Experience>
          <Education updateState={this.updateState}></Education>
          <Skills updateState={this.updateState}></Skills>
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
