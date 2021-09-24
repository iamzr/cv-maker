import { Component } from "react";

class SkillsItem extends Component {
  render() {
    return (
      <div className="form-section">
        <label htmlFor="skill">Skill:</label>
        <input name="skill1" onChange={this.updateState}></input>
        <label htmlFor="skill2">Skill:</label>
        <input name="skill2" onChange={this.updateState}></input>
      </div>
    );
  }
}

export default SkillsItem;
