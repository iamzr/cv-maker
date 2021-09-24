import { Component } from "react";

class SkillsItem extends Component {
  render() {
    const { updateState } = this.props;
    return (
      <div className="form-section">
        <label htmlFor="skill">Skill:</label>
        <input name="skill" onChange={updateState}></input>
      </div>
    );
  }
}

export default SkillsItem;
