import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CVForm from "./components/CVForm/CVForm";
import CVPreview from "./components/CVPreview/CVPreview";

function App() {
  let [state, setState] = useState({
    personal: {},
    experience: {},
    education: [],
    skills: [],
  });

  function updateState(e) {
    const parentNode = e.target.parentNode.parentNode.id;
    const id = e.target.parentNode.id;
    setState((prevState) => ({
      [parentNode]: {
        ...prevState[parentNode],
        [id]: {
          ...prevState[parentNode][id],
          [e.target.name]: e.target.value,
        },
      },
    }));
  }

  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <CVForm state={state} updateState={updateState}></CVForm>
        <CVPreview data={state}></CVPreview>
      </div>
    </div>
  );
}

export default App;
