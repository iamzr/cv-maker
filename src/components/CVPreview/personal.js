import { Component } from "react";
import PersonalItem from "./experienceItem";

class Personal extends Component {
  renderDivs(object) {
    let divs = [];
    for (let key in object) {
      divs.push(<PersonalItem personal={object[key]}></PersonalItem>);
    }
    return divs;
  }

  render() {
    const { personal } = this.props;
    return <div>{this.renderDivs(personal)}</div>;
  }
}

export default Personal;
