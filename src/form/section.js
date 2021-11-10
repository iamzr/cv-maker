import React from "react";
import { Form, Button } from "react-bootstrap";
import RenderItem from "./renderItem";

function Section({
  cv,
  section,
  sectionItem,
  addItem,
  removeItem,
  handleChange,
  heading,
  addRemove,
}) {
  return (
    <Form className="Section" onSubmit={(e) => e.preventDefault()}>
      <h2 className="mt-5">{heading}</h2>
      {cv[section].map((i, index) => {
        const item = i.item;
        const id = i.id;
        return (
          <div key={id} id={id}>
            <React.Fragment>
              <RenderItem
                item={item}
                itemIndex={index}
                section={section}
                handleChange={handleChange}
              ></RenderItem>
            </React.Fragment>
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
