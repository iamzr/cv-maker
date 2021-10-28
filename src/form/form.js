import Section from "./section";
import { v4 as uuid } from "uuid";
import "./form.css";
import { useEffect } from "react";

function Form({ cv, setCV }) {
  const personalItem = {
    id: uuid(),
    item: {
      name: {
        id: "name",
        name: "Name",
        type: "text",
        value: "",
      },
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
      text: { id: "text", name: "Details", type: "textarea", value: "" },
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
      grade: { id: "grade", name: "Grade", type: "text", value: "" },
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

  useEffect(() => {
    addItem(personalItem, "personal");
  }, []);

  return (
    <div className="Form">
      <Section
        cv={cv}
        section="personal"
        heading="Personal"
        sectionItem={personalItem}
        addItem={addItem}
        removeItem={removeItem}
        handleChange={handleChange}
        addRemove={false}
      ></Section>
      <Section
        cv={cv}
        section="education"
        heading="Education"
        sectionItem={educationItem}
        addItem={addItem}
        removeItem={removeItem}
        handleChange={handleChange}
        addRemove={true}
      ></Section>
      <Section
        cv={cv}
        section="experience"
        heading="Experience"
        sectionItem={experienceItem}
        addItem={addItem}
        removeItem={removeItem}
        handleChange={handleChange}
        addRemove={true}
      ></Section>
      <Section
        cv={cv}
        section="skills"
        heading="Skills"
        sectionItem={skillItem}
        addItem={addItem}
        removeItem={removeItem}
        handleChange={handleChange}
        addRemove={true}
      ></Section>
    </div>
  );
}

export default Form;
