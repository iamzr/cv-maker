import { Component } from "react";

class ExperienceItem extends Component {
  render() {
    const { updateState, no } = this.props;
    return (
      <div className="form-section" id={no}>
        <label htmlFor={"jobTitle" + no}>Job Title</label>
        <input name={"jobTitle" + no} onChange={updateState}></input>
        <label htmlFor={"company" + no}>Company</label>
        <input name={"company" + no} onChange={updateState}></input>
        <label htmlFor={"startDate" + no}>Start Date</label>
        <input
          name={"startDate" + no}
          type="date"
          onChange={updateState}
        ></input>
        <label htmlFor={"endDate" + no}>End Date</label>
        <input name={"endDate" + no} type="date" onChange={updateState}></input>
        <label htmlFor={"text" + no}>Details</label>
        <input
          name={"text" + no}
          type="textarea"
          onChange={updateState}
        ></input>
        <button>Remove</button>
      </div>
    );
  }
}

export default ExperienceItem;
