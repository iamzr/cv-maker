import { Component } from "react";

class SkillsItem extends Component {
  render() {
    const { skills } = this.props;
    return <li>{skills.value}</li>;
  }
}

export default SkillsItem;
