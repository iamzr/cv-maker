import { Component } from "react";

class EducationItem extends Component {
  render() {
    return (
      <div>
        <div className="line1">
          <div>{education.institute}</div>
          <div className="dates">
            {education.startDate} - {education.endDate}
          </div>
        </div>
        <div className="line3">
          <div>{education.qual}</div>
          <div>{education.grade}</div>
        </div>
      </div>
    );
  }
}

export default EducationItem;
