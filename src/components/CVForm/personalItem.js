import { Component } from "react";

class PersonalItem extends Component {
  render() {
    const { updateState } = this.props;
    return (
      <div className="form-section">
        <label htmlFor="firstName">First name</label>
        <input name="firstName" id="firstName" onChange={updateState}></input>
        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" id="lastName" onChange={updateState}></input>
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          name="phone"
          type="number"
          onChange={updateState}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={updateState}
        ></input>
        <label htmlFor="address">Address</label>
        <input name="address" id="address" onChange={updateState}></input>
      </div>
    );
  }
}

export default PersonalItem;
