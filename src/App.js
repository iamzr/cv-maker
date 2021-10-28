import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";

import Form from "./form/form";
import Preview from "./preview/preview";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cv, setCV] = useState({
    personal: [],
    experience: [],
    education: [],
    skills: [],
  });

  console.log("cv", cv);
  return (
    <div>
      <Header setCV={setCV}></Header>
      <div className="flex-container">
        <Form cv={cv} setCV={setCV}></Form>
        <Preview cv={cv}></Preview>
      </div>
    </div>
  );
}

export default App;
