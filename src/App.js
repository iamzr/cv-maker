import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";

import Form from "./form/form";
import Preview from "./preview/preview";

function App() {
  const [cv, setCV] = useState({
    personal: [],
    experience: [],
    education: [],
    skills: [],
  });

  console.log(cv);
  return (
    <div>
      <Header></Header>
      <div className="container">
        <Form cv={cv} setCV={setCV}></Form>
        <Preview cv={cv}></Preview>
      </div>
    </div>
  );
}

export default App;
