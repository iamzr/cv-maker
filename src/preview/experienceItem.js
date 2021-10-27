function ExperienceItem({ experience }) {
  return (
    <div>
      <div className="line1">
        <div>{experience.title.value}</div>
        <div className="dates">
          {experience.startDate.value} - {experience.endDate.value}
        </div>
      </div>
      <div className="line2">
        <div>{experience.company.value}</div>
      </div>
      <div className="line3">
        <div>{experience.text.value}</div>
      </div>
    </div>
  );
}

export default ExperienceItem;
