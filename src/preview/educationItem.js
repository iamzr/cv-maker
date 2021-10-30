function EducationItem({ education }) {
  return (
    <div>
      <div className="line1">
        <div className="bold">{education.institute.value}</div>
        <div className="dates">
          {new Date(education.startDate.value).toLocaleDateString("en-UK", {
            month: "short",
            year: "numeric",
          })}{" "}
          -{" "}
          {new Date(education.endDate.value).toLocaleDateString("en-UK", {
            month: "short",
            year: "numeric",
          })}
        </div>
      </div>
      <div className="line3">
        <div>
          {education.qual.value} {education.grade.value}
        </div>
      </div>
    </div>
  );
}

export default EducationItem;
