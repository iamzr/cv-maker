import Section from "./section";

function Personal({ cv, personalItem, addItem, removeItem, handleChange }) {
  <Section
    cv={cv}
    section="personal"
    sectionItem={personalItem}
    addItem={addItem}
    removeItem={removeItem}
    handleChange={handleChange}
  ></Section>;
}

export default Personal;
