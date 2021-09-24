import { Component } from "react";

class EducationItem extends Component {
  render() {
    const { updateState } = this.props;
    return (
      <div className="form-section">
        <label htmlFor="institute">Institution</label>
        <input name="institute" onChange={this.updateState}></input>
        <label htmlFor="qual">Qualification</label>
        <input name="qual" onChange={this.updateState}></input>
        <label htmlFor="grade">Grade</label>
        <input name="grade" onChange={this.updateState}></input>
        <label htmlFor="startDate">Start Date</label>
        <input name="startDate" type="date" onChange={this.updateState}></input>
        <label htmlFor="endDate">End Date</label>
        <input name="endDate" type="date" onChange={this.updateState}></input>
      </div>
    );
  }
}

export default EducationItem;
