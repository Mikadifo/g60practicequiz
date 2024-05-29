import AIQuiz from "./components/AIQuiz";
import "./App.css";
import { useState } from "react";
import CustomQuiz from "./components/CutomsQuiz";

const App = () => {
  const [option, setOption] = useState("");

  const onAIClick = () => {
    setOption("AI");
  };

  const onPersonClick = () => {
    setOption("person");
  };

  const onRestart = () => {
    setOption("");
  };

  if (option === "AI") {
    return <AIQuiz onRestart={onRestart} />;
  }

  if (option === "person") {
    return <CustomQuiz />;
  }

  return (
    <div className="menu">
      <h1>Seleccione una opcion:</h1>
      <button onClick={onAIClick}>Inteligencia Artificial</button>
      <button onClick={onPersonClick}>Persona</button>
    </div>
  );
};

export default App;
