import { Component } from "react";

class EducationItem extends Component {
  render() {
    const { updateState, remove, no } = this.props;
    return (
      <div className="form-section" id={no}>
        <label htmlFor="institute">Institution</label>
        <input name="institute" onChange={updateState}></input>
        <label htmlFor="qual">Qualification</label>
        <input name="qual" onChange={updateState}></input>
        <label htmlFor="grade">Grade</label>
        <input name="grade" onChange={updateState}></input>
        <label htmlFor="startDate">Start Date</label>
        <input name="startDate" type="date" onChange={updateState}></input>
        <label htmlFor="endDate">End Date</label>
        <input name="endDate" type="date" onChange={updateState}></input>
        <button onClick={remove}>Remove</button>
      </div>
    );
  }
}

export default EducationItem;
