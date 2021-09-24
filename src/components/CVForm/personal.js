import { Component } from "react";

class Personal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-section">
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
        <input name="address" id="address" onChange={this.updateState}></input>
      </div>
    );
  }
}

export default Personal;
