import { useState } from "react";
import ExperienceItem from "./experienceItem";

function Experience(props) {
  const [count, setCount] = useState(0);
  const { updateState, removeItem, state } = props;

  function renderDivs() {
    let divs = [];
    for (let i = 0; i < count; i++) {
      divs.push(
        <ExperienceItem
          state={state}
          updateState={updateState}
          remove={handleRemove}
          key={"experience" + i}
          id={"experience" + i}
        ></ExperienceItem>
      );
    }
    return divs;
  }

  function addItem() {
    setCount(count + 1);
  }

  function handleRemove(e) {
    removeItem(e);
    setCount(count - 1);
  }

  return (
    <div id="experience">
      <h2>Experience</h2>
      {renderDivs()}
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default Experience;
