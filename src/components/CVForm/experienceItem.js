import { Component } from "react";

class ExperienceItem extends Component {
  render() {
    const { updateState, no } = this.props;
    return (
      <div className="form-section" id={no}>
        <label htmlFor="jobTitle">Job Title</label>
        <input name="jobTitle" onChange={updateState}></input>
        <label htmlFor="company">Company</label>
        <input name="company" onChange={updateState}></input>
        <label htmlFor="startDate">Start Date</label>
        <input name="startDate" type="date" onChange={updateState}></input>
        <label htmlFor="endDate">End Date</label>
        <input name="endDate" type="date" onChange={updateState}></input>
        <label htmlFor="text">Details</label>
        <input name="text" type="textarea" onChange={updateState}></input>
        <button>Remove</button>
      </div>
    );
  }
}

export default ExperienceItem;
