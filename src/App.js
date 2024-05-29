import Quiz from "./components/Quiz";
import "./App.css";
import { useState } from "react";
import CustomQuiz from "./components/CustomQuiz";

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
    return <Quiz onRestart={onRestart} numQuestions={0} />;
  }

  if (option === "person") {
    return <CustomQuiz onRestart={onRestart} />;
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
