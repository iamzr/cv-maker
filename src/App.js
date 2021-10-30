import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
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

  const print = false;

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  console.log("cv", cv);
  return (
    <div>
      <Header setCV={setCV} handlePrint={handlePrint}></Header>
      <div className="flex-container">
        <Form cv={cv} setCV={setCV}></Form>
        <Preview cv={cv} ref={componentRef} print={print}></Preview>
      </div>
    </div>
  );
}

export default App;
