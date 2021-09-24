import React, { Component } from "react";

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
      <div>
        <h2>CV Preview</h2>

        <div className="title">
          {data.firstName} {data.lastName}
        </div>
        <div>
          {data.phone}| {data.email}
        </div>
        <div>{data.address}</div>

        <div className="heading">Experience</div>
        <div>{data.jobTitle}</div>
      </div>
    );
  }
}

export default CVPreview;
