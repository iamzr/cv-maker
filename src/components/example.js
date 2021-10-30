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
  experience: [
    {
      id: uuid(),
      item: {
        title: {
          id: "title",
          name: "Title",
          type: "text",
          value: "Job Title 1",
        },
        company: {
          id: "company",
          name: "Company",
          type: "text",
          value: "Company 1",
        },
        startDate: {
          id: "startDate",
          name: "Start Date",
          type: "date",
          value: "2021-01-01",
        },
        endDate: {
          id: "endDate",
          name: "End Date",
          type: "date",
          value: "2021-02-01",
        },
        text: {
          id: "text",
          name: "Details",
          type: "textarea",
          value:
            "What did you learn?\nWhat were your responsiblities? What skills did you gain?\nWhat impact did you have?",
        },
      },
    },
    {
      id: uuid(),
      item: {
        title: {
          id: "title",
          name: "Title",
          type: "text",
          value: "Job Title 2",
        },
        company: {
          id: "company",
          name: "Company",
          type: "text",
          value: "Company 2",
        },
        startDate: {
          id: "startDate",
          name: "Start Date",
          type: "date",
          value: "2021-01-01",
        },
        endDate: {
          id: "endDate",
          name: "End Date",
          type: "date",
          value: "2021-02-01",
        },
        text: {
          id: "text",
          name: "Details",
          type: "textarea",
          value:
            "What did you learn?\nWhat were your responsiblities? What skills did you gain?\nWhat impact did you have?",
        },
      },
    },
    {
      id: uuid(),
      item: {
        title: {
          id: "title",
          name: "Title",
          type: "text",
          value: "Job Title 3",
        },
        company: {
          id: "company",
          name: "Company",
          type: "text",
          value: "Company 3",
        },
        startDate: {
          id: "startDate",
          name: "Start Date",
          type: "date",
          value: "2021-01-01",
        },
        endDate: {
          id: "endDate",
          name: "End Date",
          type: "date",
          value: "2021-02-01",
        },
        text: {
          id: "text",
          name: "Details",
          type: "textarea",
          value:
            "What did you learn?\nWhat were your responsiblities? What skills did you gain?\nWhat impact did you have?",
        },
      },
    },
    {
      id: uuid(),
      item: {
        title: {
          id: "title",
          name: "Title",
          type: "text",
          value: "Job Title 4",
        },
        company: {
          id: "company",
          name: "Company",
          type: "text",
          value: "Company 4",
        },
        startDate: {
          id: "startDate",
          name: "Start Date",
          type: "date",
          value: "2021-01-01",
        },
        endDate: {
          id: "endDate",
          name: "End Date",
          type: "date",
          value: "2021-02-01",
        },
        text: {
          id: "text",
          name: "Details",
          type: "textarea",
          value:
            "What did you learn?\nWhat were your responsiblities? What skills did you gain?\nWhat impact did you have?",
        },
      },
    },
  ],
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
          name: "Grade",
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
    {
      id: uuid(),
      item: {
        institute: {
          id: "institute",
          name: "Institute",
          type: "text",
          value: "Sixth Form",
        },
        qual: {
          id: "qual",
          name: "Qualification",
          type: "text",
          value: "A-Levels:",
        },
        grade: {
          id: "grade",
          name: "Grade",
          type: "text",
          value: "Biology (A*), Maths(A) , Chemsitry (A)",
        },
        startDate: {
          id: "startDate",
          name: "Start Date",
          type: "date",
          value: "2015-09-01",
        },
        endDate: {
          id: "endDate",
          name: "End Date",
          type: "date",
          value: "2017-06-01",
        },
      },
    },
    {
      id: uuid(),
      item: {
        institute: {
          id: "institute",
          name: "Institute",
          type: "text",
          value: "Academy",
        },
        qual: {
          id: "qual",
          name: "Qualification",
          type: "text",
          value: "GCSEs:",
        },
        grade: {
          id: "grade",
          name: "Grade",
          type: "text",
          value: "10 A*s, 2As",
        },
        startDate: {
          id: "startDate",
          name: "Start Date",
          type: "date",
          value: "2013-09-01",
        },
        endDate: {
          id: "endDate",
          name: "End Date",
          type: "date",
          value: "2015-06-01",
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
    {
      id: uuid(),
      item: {
        skill: {
          id: "skill",
          name: "Skill",
          type: "text",
          value: "Society 2: Talk about what you did at the society",
        },
      },
    },
    {
      id: uuid(),
      item: {
        skill: {
          id: "skill",
          name: "Skill",
          type: "text",
          value: "Skill 1: Talk about how you're good at said skill",
        },
      },
    },
    {
      id: uuid(),
      item: {
        skill: {
          id: "skill",
          name: "Skill",
          type: "text",
          value: "Skill 2: Show off how you're good at another skill",
        },
      },
    },
    {
      id: uuid(),
      item: {
        skill: {
          id: "skill",
          name: "Skill",
          type: "text",
          value: "Skill 3: Show off how you're good at another skill",
        },
      },
    },
    {
      id: uuid(),
      item: {
        skill: {
          id: "skill",
          name: "Skill",
          type: "text",
          value: "Skill 4: Show off how you're good at another skill",
        },
      },
    },
  ],
};

export default example;
