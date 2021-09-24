import { Component } from "react";
import EducationItem from "./educationItem";

class Education extends Component {
  renderDivs(object) {
    let divs = [];
    for (let key in object) {
      divs.push(<EducationItem education={object[key]}></EducationItem>);
    }
    return divs;
  }

  render() {
    const { education } = this.props;
    return <div>{this.renderDivs(education)}</div>;
  }
}

export default Education;
