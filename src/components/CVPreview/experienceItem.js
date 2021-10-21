import { Component } from "react";

class ExperienceItem extends Component {
  render() {
    const { experience } = this.props;
    return (
      <div>
        <div className="line1">
          <div>{experience.jobTitle}</div>
          <div className="dates">
            {experience.startDate} - {experience.endDate}
          </div>
        </div>
        <div className="line2">
          <div>{experience.company}</div>
        </div>
        <div className="line3">
          <div>{experience.text}</div>
        </div>
      </div>
    );
  }
}

export default ExperienceItem;
