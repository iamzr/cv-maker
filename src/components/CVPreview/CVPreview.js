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
      <div className="preview">
        <div className="header">
          <div className="name">
            {data.firstName} {data.lastName}
          </div>
          <div>
            {data.phone} | {data.email}
          </div>
          <div>{data.address}</div>
        </div>

        <div className="section">
          <div className="heading">Experience</div>
          <div className="line1">
            <div>{data.jobTitle}</div>
            <div className="dates">
              {data.startDate} - {data.endDate}
            </div>
          </div>
          <div className="line2">
            <div>{data.company}</div>
          </div>
          <ul className="line3">
            <li>{data.text}</li>
          </ul>
        </div>

        <div className="section">
          <div className="heading">Education</div>
          <div className="line1">
            <div>{data.institute}</div>
            <div className="dates">
              {data.startDate} - {data.endDate}
            </div>
          </div>
          <div className="line3">
            <div>{data.qual}</div>
            <div>{data.grade}</div>
          </div>
        </div>

        <div className="section">
          <div className="heading">Skills</div>
          <div className="line1">
            <div>{data.institute}</div>
            <div className="dates">
              {data.startDate} - {data.endDate}
            </div>
          </div>
          <div className="line3">
            <div>{data.qual}</div>
            <div>{data.grade}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CVPreview;
