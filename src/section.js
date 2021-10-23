import data from "./src/data";

function Section(props) {
  const { sectionName } = props;

  return <div>{console.log(data.cv)}</div>;
}

export default Section;
