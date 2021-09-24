import { Component } from "react";

class PersonalItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="header">
        <div className="name">
          {data.firstName} {data.lastName}
        </div>
        <div>
          {data.phone} | {data.email}
        </div>
        <div>{data.address}</div>
      </div>
    );
  }
}

export default PersonalItem;
