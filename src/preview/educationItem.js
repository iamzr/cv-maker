function EducationItem({ education }) {
  return (
    <div>
      <div className="line1">
        <div>{education.institute.value}</div>
        <div className="dates">
          {education.startDate.value} - {education.endDate.value}
        </div>
      </div>
      <div className="line3">
        <div>{education.qual.value}</div>
        <div>{education.grade.value}</div>
      </div>
    </div>
  );
}

export default EducationItem;
