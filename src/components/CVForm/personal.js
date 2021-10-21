import PersonalItem from "./personalItem";

function Personal(props) {
  const { updateState } = props;

  return (
    <div id="personal">
      <h2>Personal</h2>
      <PersonalItem updateState={updateState}></PersonalItem>
    </div>
  );
}

export default Personal;
