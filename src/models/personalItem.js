import { v4 as uuid } from "uuid";

const personalItem = {
  id: uuid(),
  item: [
    { id: "name", name: "Name", type: "text", value: "" },
    {
      id: "phone",
      name: "Phone Number",
      type: "number",
      value: "",
    },
    { id: "email", name: "Email", type: "email", value: "" },
    { id: "address", name: "Address", type: "text", value: "" },
  ],
};

export default personalItem;
