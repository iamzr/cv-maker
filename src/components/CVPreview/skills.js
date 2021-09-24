import { Component } from "react";
import SkillsItem from "./skillsItem";

class Skills extends Component {
  renderDivs(object) {
    let divs = [];
    for (let key in object) {
      divs.push(<SkillsItem experience={object[key]}></SkillsItem>);
    }
    return divs;
  }

  render() {
    const { skills } = this.props;
    return <ul>{this.renderDivs(skills)}</ul>;
  }
}

export default Skills;
