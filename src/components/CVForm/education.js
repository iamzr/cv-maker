import { useState } from "react";
import EducationItem from "./educationItem";

function Education(props) {
  const [count, setCount] = useState(0);
  const { updateState, removeItem } = props;

  function renderDivs() {
    let divs = [];
    for (let i = 0; i < count; i++) {
      divs.push(
        <EducationItem
          updateState={updateState}
          remove={handleRemove}
          key={"education" + i}
          no={"education" + i}
        ></EducationItem>
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
    <div id="education">
      <h2>Education</h2>
      {renderDivs()}
      <button onClick={addItem}>Add</button>
    </div>
  );
}

// class Education extends Component {
//   render() {
//     const { updateState } = this.props;
//     const item = (count) => (
//       <EducationItem
//         updateState={updateState}
//         key={"ed" + count}
//         no={"ed" + count}
//       ></EducationItem>
//     );

//     return (
//       <div id="education">
//         <h2>Education</h2>
//         <Section name="education" div={item}></Section>
//       </div>
//       // <div id="education">
//       // <h2>Education</h2>
//       // <EducationItem updateState={updateState}></EducationItem>
//       // </div>
//     );
//   }
// }

export default Education;
