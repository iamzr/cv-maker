import { Form } from "react-bootstrap";

function RenderItem({ item, itemIndex, section, handleChange }) {
  let divs = [];
  for (let element in item) {
    const id = item[element]["id"];
    if (item[element]["type"] === "textarea") {
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
            as={item[element]["type"]}
            defaultValue={item[element]["value"]}
            onChange={(e) => handleChange(e, section, itemIndex, id)}
          ></Form.Control>
        </Form.Group>
      );
    } else {
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
  }
  console.log("renderItem done");
  return divs;
}

export default RenderItem;
