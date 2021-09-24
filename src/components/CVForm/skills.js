import { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { updateState } = this.props;
    return (
      <div className="form-section">
        <h2>Skills</h2>
        <label htmlFor="skill">Skill:</label>
        <input name="skill1" onChange={this.updateState}></input>
        <label htmlFor="skill2">Skill:</label>
        <input name="skill2" onChange={this.updateState}></input>
      </div>
    );
  }
}

export default Skills;
