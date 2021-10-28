import React from "react";
import { Form, Button } from "react-bootstrap";

function Section(props) {
  const {
    cv,
    section,
    sectionItem,
    addItem,
    removeItem,
    handleChange,
    heading,
    addRemove,
  } = props;

  function renderItem(item, itemIndex, section) {
    let divs = [];
    // item.forEach((element, idx) => {

    for (let element in item) {
      const id = item[element]["id"];
      divs.push(
        <Form.Group className="mb-3">
          <Form.Label
            key={"label-" + itemIndex + id}
            id={"label-" + itemIndex + id}
            // htmlFor={id}
          >
            {item[element]["name"]}
          </Form.Label>
          <Form.Control
            key={"input-" + itemIndex + id}
            id={"input-" + itemIndex + id}
            name={id}
            type={item[element]["type"]}
            defaultValue={item[element]["value"]}
            onChange={(e) => handleChange(e, section, itemIndex, id)}
          ></Form.Control>
        </Form.Group>
      );
    }
    console.log("renderItem done");
    return divs;
  }

  return (
    <Form className="Section" onSubmit={(e) => e.preventDefault()}>
      <h2 className="mt-5">{heading}</h2>
      {cv[section].map((i, index) => {
        const item = i.item;
        const id = i.id;
        return (
          <div key={id} id={id}>
            <React.Fragment>{renderItem(item, index, section)}</React.Fragment>
            {addRemove ? (
              <Button
                className="mb-3"
                variant="danger"
                onClick={() => {
                  console.log("removed");
                  removeItem(section, index);
                }}
              >
                Remove
              </Button>
            ) : (
              <div></div>
            )}
          </div>
        );
      })}
      {addRemove ? (
        <Button
          variant="primary"
          onClick={() => {
            console.log("clicked");
            addItem(sectionItem, section);
          }}
        >
          Add
        </Button>
      ) : (
        <div></div>
      )}
    </Form>
  );
}

export default Section;
