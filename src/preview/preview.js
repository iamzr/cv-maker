import { Component } from "react";
import PersonalItem from "./personalItem";
import ExperienceItem from "./experienceItem";
import EducationItem from "./educationItem";
import SkillsItem from "./skillsItem";
import "./preview.css";

class Preview extends Component {
  render() {
    const { cv } = this.props;
    return (
      <div className="Preview">
        <div>
          {cv.personal.map((e) => {
            return <PersonalItem id={e.id} element={e.item}></PersonalItem>;
          })}
        </div>
        <div className="section-container">
          <div className="section-header">Education</div>
          {cv.education.map((e) => {
            return <EducationItem education={e.item}></EducationItem>;
          })}
        </div>
        <div className="section-container">
          <div className="section-header">Experience</div>
          {cv.experience.map((e) => {
            return <ExperienceItem experience={e.item}></ExperienceItem>;
          })}
        </div>

        <div className="section-container">
          <div className="section-header">Skills</div>
          {cv.skills.map((e) => {
            return <SkillsItem id={e.id} skill={e.item}></SkillsItem>;
          })}
        </div>
      </div>
    );
  }
}

export default Preview;
