import React from "react";
import { v4 as uuid } from "uuid";

function Section(props) {
  const {
    cv,
    section,
    sectionItem,
    addItem,
    removeItem,
    handleChange,
    heading,
  } = props;

  function renderItem(item, itemIndex, section) {
    let divs = [];
    // item.forEach((element, idx) => {

    for (let element in item) {
      const id = item[element]["id"];
      divs.push(
        <React.Fragment>
          <label
            key={"label-" + itemIndex + id}
            id={"label-" + itemIndex + id}
            htmlFor={id}
          >
            {item[element]["name"]}
          </label>
          <input
            key={"input-" + itemIndex + id}
            id={"input-" + itemIndex + id}
            name={id}
            type={item[element]["type"]}
            defaultValue={item[element]["value"]}
            onChange={(e) => handleChange(e, section, itemIndex, id)}
          ></input>
        </React.Fragment>
      );
    }
    console.log("renderItem done");
    return divs;
  }

  return (
    <div className="Section">
      <h2>{heading}</h2>
      {cv[section].map((i, index) => {
        const item = i.item;
        const id = i.id;
        return (
          <div key={id} id={id}>
            <React.Fragment>{renderItem(item, index, section)}</React.Fragment>
            <button
              onClick={() => {
                console.log("removed");
                removeItem(section, index);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button
        onClick={() => {
          console.log("clicked");
          addItem(sectionItem, section);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default Section;
