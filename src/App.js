import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import CVForm from "./components/CVForm/CVForm";
import CVPreview from "./components/CVPreview/CVPreview";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CVForm></CVForm>
    </div>
  );
}

export default App;
