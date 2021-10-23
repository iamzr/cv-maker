import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import { indexOf } from "lodash";

function Data() {
  const [cv, setCV] = useState({
    personal: [],
    experience: [],
    education: [],
    skills: [],
  });

  const personalItem = [
    { id: "name", name: "Name", type: "text", value: "" },
    { id: "phone", name: "Phone Number", type: "number", value: "" },
    { id: "email", name: "Email", type: "email", value: "" },
    { id: "address", name: "Address", type: "text", value: "" },
  ];

  const experienceItem = {
    id: uuid(),
    title: { type: "text", value: "" },
    company: { type: "text", value: "" },
    startDate: { type: "date", value: "" },
    endDate: { type: "date", value: "" },
    text: { type: "text", value: "" },
  };

  const educationItem = {
    id: uuid(),
    institute: { type: "text", value: "" },
    qual: { type: "text", value: "" },
    grade: { type: "text", value: "" },
    startDate: { type: "date", value: "" },
    endDate: { type: "date", value: "" },
  };

  const skillItem = {
    id: uuid(),
    text: { type: "text", value: "" },
  };

  //   function createItem() {
  //     cv.personal.push(personalItem);
  //   }

  //   function removeItem(index) {
  //     cv.personal.splice(index, 1);
  //   }

  //   setCV(cv.personal.push(personalItem));
  //   function updateItem(itemIndex, elementIndex, e) {
  //     setCV((cv.personal[itemIndex][elementIndex]["value"] = e.targe.value));
  //   }

  function handleChange(e, section, itemIndex, elementIndex) {
    setCV((cv[section][itemIndex][elementIndex] = e.target.value));
    console.log(cv);
    // console.log(cv);
  }

  //   function render(section) {
  //     let divs = [];
  //     cv[section].forEach((element) =>);
  //   }

  function renderItem(item) {
    let divs = [];
    item.forEach((element, idx) => {
      divs.push(
        <label key={"label-" + element.id} htmlFor={element.id}></label>
      );
      divs.push(
        <input
          key={"input-" + element.id}
          name={element.id}
          type={element.type}
          value={element.value}
          onChange={(e) => handleChange(e, "personal", 0, idx)}
        ></input>
      );
    });
    return divs;
  }

  useEffect(() => {
    setCV((cv) => {
      cv.personal.push(personalItem);
      return cv;
    });
    console.log(cv);
  }, []);
  return <div>{renderItem(personalItem)}</div>;
}

export default Data;
