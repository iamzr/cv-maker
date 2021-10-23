import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CVForm from "./components/CVForm/CVForm";
import CVPreview from "./components/CVPreview/CVPreview";

function App() {
  let [state, setState] = useState({
    personal: {},
    experience: {},
    education: {},
    skills: {},
  });

  function updateState(e) {
    const parentNode = e.target.parentNode.parentNode.id;
    console.log(parentNode);
    const id = e.target.parentNode.id;
    setState((prevState) => ({
      ...prevState,
      [parentNode]: {
        ...prevState[parentNode],
        [id]: {
          ...prevState[parentNode][id],
          [e.target.name]: e.target.value,
        },
      },
    }));
  }

  function removeItem(e) {
    const parentNode = e.target.parentNode.parentNode.id;
    const id = e.target.parentNode.id;
    setState((state) => {
      state[parentNode][id] = undefined;
      return state;
    });
  }

  useEffect(() => {
    console.log(state.experience);
  }, [state]);

  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <CVForm
          state={state}
          updateState={updateState}
          removeItem={removeItem}
        ></CVForm>
        {/* <CVPreview data={state}></CVPreview> */}
      </div>
    </div>
  );
}

export default App;
