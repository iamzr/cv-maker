import { Component } from "react";
import PersonalItem from "./personalItem";

class Personal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { updateState } = this.props;

    return (
      <div id="personal">
        <h2>Personal</h2>
        <PersonalItem updateState={updateState}></PersonalItem>
      </div>
    );
  }
}

export default Personal;
