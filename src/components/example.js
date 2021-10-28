import { v4 as uuid } from "uuid";

const example = {
  personal: [
    {
      id: uuid(),
      item: {
        name: {
          id: "name",
          name: "Name",
          type: "text",
          value: "John Smith ",
        },
        phone: {
          id: "phone",
          name: "Phone Number",
          type: "number",
          value: "0780909090",
        },
        email: {
          id: "email",
          name: "Email",
          type: "email",
          value: "john.smith@gmail.com",
        },
        address: {
          id: "address",
          name: "Address",
          type: "text",
          value: "101 Abbey Row, Nottingham",
        },
      },
    },
  ],
  experience: [],
  education: [
    {
      id: uuid(),
      item: {
        institute: {
          id: "institute",
          name: "Institute",
          type: "text",
          value: "University of Nottingham",
        },
        qual: {
          id: "qual",
          name: "Qualification",
          type: "text",
          value: "BSc Subject",
        },
        grade: {
          id: "grade",
          name: "grade",
          type: "text",
          value: "Upper Second-Class Honours",
        },
        startDate: {
          id: "startDate",
          name: "Start Date",
          type: "date",
          value: "2020-05-01",
        },
        endDate: {
          id: "endDate",
          name: "End Date",
          type: "date",
          value: "2020-06-01",
        },
      },
    },
  ],
  skills: [
    {
      id: uuid(),
      item: {
        skill: {
          id: "skill",
          name: "Skill",
          type: "text",
          value: "Society 1: Talk about what you did at the society",
        },
      },
    },
  ],
};

export default example;
