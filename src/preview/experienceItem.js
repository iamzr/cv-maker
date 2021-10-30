function ExperienceItem({ experience }) {
  const arr = experience.text.value.split("\n");

  return (
    <div>
      <div className="line1">
        <div className="bold">{experience.title.value}</div>
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
        <ul>
          {arr.map((element) => (
            <li>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceItem;
