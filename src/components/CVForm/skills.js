import { Component } from "react";
import SkillsItem from "./skillsItem";

class Skills extends Component {
  render() {
    const { updateState } = this.props;
    return (
      <div id="skills">
        <h2>Skills</h2>
        <SkillsItem></SkillsItem>
      </div>
    );
  }
}

export default Skills;
