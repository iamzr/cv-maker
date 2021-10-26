import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { v4 as uuid } from "uuid";

import Section from "./section";

function App() {
  const personalItem = {
    id: uuid(),
    item: {
      name: { id: "name", name: "Name", type: "text", value: "" },
      phone: {
        id: "phone",
        name: "Phone Number",
        type: "number",
        value: "",
      },
      email: { id: "email", name: "Email", type: "email", value: "" },
      address: { id: "address", name: "Address", type: "text", value: "" },
    },
  };

  const experienceItem = {
    id: uuid(),
    item: {
      title: { id: "title", name: "Title", type: "text", value: "" },
      company: { id: "company", name: "Company", type: "text", value: "" },
      startDate: {
        id: "startDate",
        name: "Start Date",
        type: "date",
        value: "",
      },
      endDate: { id: "endDate", name: "End Date", type: "date", value: "" },
      text: { id: "text", name: "Details", type: "text", value: "" },
    },
  };

  const educationItem = {
    id: uuid(),
    item: {
      institute: {
        id: "institute",
        name: "Institute",
        type: "text",
        value: "",
      },
      qual: { id: "qual", name: "Qualification", type: "text", value: "" },
      grade: { id: "grade", name: "grade", type: "text", value: "" },
      startDate: {
        id: "startDate",
        name: "Start Date",
        type: "date",
        value: "",
      },
      endDate: { id: "endDate", name: "End Date", type: "date", value: "" },
    },
  };

  const skillItem = {
    id: uuid(),
    item: {
      skill: { id: "skill", name: "Skill", type: "text", value: "" },
    },
  };

  const [cv, setCV] = useState({
    personal: [],
    experience: [],
    education: [],
    skills: [],
  });

  function addItem(item, section) {
    setCV((cv) => {
      console.log(["section", section]);
      cv[section] = [...cv[section], item];
      return { ...cv };
    });
  }

  function removeItem(section, index) {
    setCV((cv) => {
      cv[section].splice(index, 1);
      return { ...cv };
    });
  }

  function handleChange(e, section, itemIndex, id) {
    console.log(e.target.value);
    setCV((cv) => {
      cv[section][itemIndex]["item"][id]["value"] = e.target.value;
      return { ...cv };
    });
  }

  console.log(cv);
  return (
    <div>
      {/* <div className="cv-form">
        {cv.personal.map((i, index) => {
          const item = i.item;
          const id = i.id;
          const section = "personal";
          return (
            <div key={id} id={id}>
              <React.Fragment>
                {renderItem(item, index, section)}
              </React.Fragment>
              <button
                onClick={() => {
                  console.log("removed");
                  removeItem("personal", index);
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
            addItem(personalItem, "personal");
          }}
        >
          Add
        </button>
      </div>
      <div> */}
      <Section
        cv={cv}
        section="personal"
        sectionItem={personalItem}
        addItem={addItem}
        removeItem={removeItem}
        handleChange={handleChange}
      ></Section>
      <Section
        cv={cv}
        section="experience"
        sectionItem={experienceItem}
        addItem={addItem}
        removeItem={removeItem}
        handleChange={handleChange}
      ></Section>
      <Section
        cv={cv}
        section="education"
        sectionItem={educationItem}
        addItem={addItem}
        removeItem={removeItem}
        handleChange={handleChange}
      ></Section>
      <Section
        cv={cv}
        section="skills"
        sectionItem={skillItem}
        addItem={addItem}
        removeItem={removeItem}
        handleChange={handleChange}
      ></Section>
      <div>
        <h2>Preview</h2>
        <div>
          {cv.personal.map((e) => {
            const element = e.item;
            return (
              <div className="header">
                <div className="name">{element.name.value}</div>
                <div>
                  {element.phone.value} | {element.email.value}
                </div>
                <div>{element.address.value}</div>
              </div>
            );
          })}
        </div>
        <div>
          {cv.experience.map((e) => {
            const experience = e.item;
            return (
              <div>
                <div className="line1">
                  <div>{experience.title.value}</div>
                  <div className="dates">
                    {experience.startDate.value} - {experience.endDate.value}
                  </div>
                </div>
                <div className="line2">
                  <div>{experience.company.value}</div>
                </div>
                <div className="line3">
                  <div>{experience.text.value}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        {cv.education.map((e) => {
          const education = e.item;
          return (
            <div key={e.id}>
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
        })}
      </div>
      <div>
        {cv.skills.map((e) => {
          const skill = e.item;
          return <li>{skill.skill.value}</li>;
        })}
      </div>
    </div>
  );
}

export default App;
