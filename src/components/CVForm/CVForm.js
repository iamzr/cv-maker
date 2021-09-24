import React, { Component } from "react";
import CVPreview from "../CVPreview/CVPreview";

class CVForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  updateState = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <h2>Personal</h2>
            <label htmlFor="firstName">First name</label>
            <input
              name="firstName"
              id="firstName"
              onChange={this.updateState}
            ></input>
            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              id="lastName"
              onChange={this.updateState}
            ></input>
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="number"
              onChange={this.updateState}
            ></input>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={this.updateState}
            ></input>
            <label htmlFor="address">Address</label>
            <input
              name="address"
              id="address"
              onChange={this.updateState}
            ></input>

            <h2>Experience</h2>
            <label htmlFor="jobTitle">Job Title</label>
            <input name="jobTitle" onChange={this.updateState}></input>
            <label htmlFor="company">Company</label>
            <input name="company" onChange={this.updateState}></input>
            <label htmlFor="startDate">Start Date</label>
            <input
              name="startDate"
              type="date"
              onChange={this.updateState}
            ></input>
            <label htmlFor="endDate">End Date</label>
            <input
              name="endDate"
              type="date"
              onChange={this.updateState}
            ></input>

            <h2>Education</h2>
            <label htmlFor="degree">Degree</label>
            <input name="degree" onChange={this.updateState}></input>
            <label htmlFor="university">University</label>
            <input name="university" onChange={this.updateState}></input>
            <label htmlFor="startDate">Start Date</label>
            <input
              name="startDate"
              type="date"
              onChange={this.updateState}
            ></input>
            <label htmlFor="endDate">End Date</label>
            <input
              name="endDate"
              type="date"
              onChange={this.updateState}
            ></input>

            <h2>Skills</h2>
            <label htmlFor="skill">Skill:</label>
            <input name="skill1" onChange={this.updateState}></input>
            <label htmlFor="skill2">Skill:</label>
            <input name="skill2" onChange={this.updateState}></input>
          </div>
        </form>

        <CVPreview data={this.state}></CVPreview>
      </div>
    );
  }
}

export default CVForm;
