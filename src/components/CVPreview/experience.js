import { Component } from "react";
import ExperienceItem from "./experienceItem";

class Experience extends Component {
  renderDivs(object) {
    let divs = [];
    for (let key in object) {
      divs.push(<ExperienceItem experience={object[key]}></ExperienceItem>);
    }
    return divs;
  }

  render() {
    const { experience } = this.props;
    return <div>{this.renderDivs(experience)}</div>;
  }
}

export default Experience;
