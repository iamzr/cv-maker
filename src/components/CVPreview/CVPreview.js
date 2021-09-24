import React, { Component } from "react";
import "./CVPreview.css";

class CVPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;
    let content = [];
    for (const item in data) {
      content.push(<div>{data[item]}</div>);
    }

    return (
      <div className="Preview">
        <div className="header">
          <div className="title">
            {data.firstName} {data.lastName}
          </div>
          <div>
            {data.phone} | {data.email}
          </div>
          <div>{data.address}</div>
        </div>

        <div className="section">
          <div className="heading">Experience</div>
          <div>{data.jobTitle}</div>
        </div>
      </div>
    );
  }
}

export default CVPreview;
