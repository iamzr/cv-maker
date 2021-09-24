import { Component } from "react";
import EducationItem from "./eduacationItem";

class Education extends Component {
  render() {
    const { updateState } = this.props;
    return (
      <div id="education">
        <h2>Education</h2>
        <EducationItem updateState={updateState}></EducationItem>
      </div>
    );
  }
}

export default Education;
