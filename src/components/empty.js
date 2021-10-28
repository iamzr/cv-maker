import { v4 as uuid } from "uuid";

const empty = {
  personal: [
    {
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
        email: {
          id: "email",
          name: "Email",
          type: "email",
          value: "",
        },
        address: {
          id: "address",
          name: "Address",
          type: "text",
          value: "",
        },
      },
    },
  ],
  experience: [],
  education: [],
  skills: [],
};

export default empty;
