function SkillsItem({ id, skill }) {
  return (
    <li key={"preview-" + id} id={"preview-" + id}>
      {skill.skill.value}
    </li>
  );
}

export default SkillsItem;
