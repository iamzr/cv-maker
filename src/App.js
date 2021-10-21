import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CVForm from "./components/CVForm/CVForm";
import CVPreview from "./components/CVPreview/CVPreview";

function App() {
  let [state, setState] = useState({
    personal: [],
    experience: [],
    education: [],
    skills: [],
  });

  function updateState(newState) {
    setState(newState);
  }

  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <CVForm state={state} onChange={updateState}></CVForm>
        <CVPreview data={state}></CVPreview>
      </div>
    </div>
  );
}

export default App;
