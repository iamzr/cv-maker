function SkillsItem({ id, skill }) {
  return <li key={"preview" + id}>{skill.skill.value}</li>;
}

export default SkillsItem;
