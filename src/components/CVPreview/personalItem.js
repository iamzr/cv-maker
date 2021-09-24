import { Component } from "react";

class PersonalItem extends Component {
  render() {
    const { personal } = this.props;
    return (
      <div className="header">
        <div className="name">
          {personal.firstName} {personal.lastName}
        </div>
        <div>
          {personal.phone} | {personal.email}
        </div>
        <div>{personal.address}</div>
      </div>
    );
  }
}

export default PersonalItem;
