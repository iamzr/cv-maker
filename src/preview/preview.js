import PersonalItem from "./personalItem";
import ExperienceItem from "./experienceItem";
import EducationItem from "./educationItem";
import SkillsItem from "./skillsItem";

function Preview({ cv }) {
  return (
    <div className="Preview">
      <div>
        <h2>Preview</h2>
        {cv.personal.map((e) => {
          return <PersonalItem id={e.id} element={e.item}></PersonalItem>;
        })}
        <div>
          {cv.experience.map((e) => {
            return <ExperienceItem experience={e.item}></ExperienceItem>;
          })}
        </div>
      </div>
      <div>
        {cv.education.map((e) => {
          return <EducationItem education={e.item}></EducationItem>;
        })}
      </div>
      <div>
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
