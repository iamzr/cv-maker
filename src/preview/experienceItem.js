function ExperienceItem({ experience }) {
  return (
    <div>
      <div className="line1">
        <div>{experience.title.value}</div>
        <div className="dates">
          {new Date(experience.startDate.value).toLocaleDateString("en-UK", {
            month: "short",
            year: "numeric",
          })}{" "}
          -{" "}
          {new Date(experience.endDate.value).toLocaleDateString("en-UK", {
            month: "short",
            year: "numeric",
          })}
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
