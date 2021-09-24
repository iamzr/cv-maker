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
        <ul className="line3">
          <li>{experience.text}</li>
        </ul>
      </div>
    );
  }
}

export default ExperienceItem;
