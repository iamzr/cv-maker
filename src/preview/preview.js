import PersonalItem from "./personalItem";
import ExperienceItem from "./experienceItem";
import EducationItem from "./educationItem";
import SkillsItem from "./skillsItem";
import "./preview.css";

function Preview({ cv }) {
  return (
    <div className="Preview">
      <div className="preview-container">
        {cv.personal.map((e) => {
          return <PersonalItem id={e.id} element={e.item}></PersonalItem>;
        })}
      </div>
      <div>
        <div className="section-header">Education</div>
        {cv.education.map((e) => {
          return <EducationItem education={e.item}></EducationItem>;
        })}
      </div>
      <div>
        <div className="section-header">Experience</div>
        {cv.experience.map((e) => {
          return <ExperienceItem experience={e.item}></ExperienceItem>;
        })}
      </div>

      <div>
        <div className="section-header">Skills</div>
        {cv.skills.map((e) => {
          const skill = e.item;
          console.log(skill);
          return <li key={"preview" + e.id}>{skill.skill.value}</li>;
          // <SkillsItem id={e.id} skill={e.item}></SkillsItem>;
        })}
      </div>
    </div>
  );
}

export default Preview;
