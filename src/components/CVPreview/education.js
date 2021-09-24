import { Component } from "react";
import ExperienceItem from "./experienceItem";

class Education extends Component {
  renderDivs(object) {
    let divs = [];
    for (let key in object) {
      divs.push(<ExperienceItem experience={object[key]}></ExperienceItem>);
    }
    return divs;
  }

  render() {}
}

export default Education;
