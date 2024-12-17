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

  const onActualQuestionsClick = () => {
    setOption("original");
  };

  const onRestart = () => {
    setOption("");
  };

  if (option === "AI") {
    return <Quiz onRestart={onRestart} quizType="AI" />;
  }

  if (option === "person") {
    return <CustomQuiz onRestart={onRestart} />;
  }

  if (option === "original") {
    return <Quiz onRestart={onRestart} quizType="original" />;
  }

  return (
    <div className="menu">
      <h1>Seleccione una opcion:</h1>
      <button onClick={onAIClick}>
        Preguntas Hechas por maquina (posibles errores)
      </button>
      <button onClick={onPersonClick}>
        Preguntas Hechas por Persona (Mas confiable)
      </button>
      <button onClick={onActualQuestionsClick}>
        Preguntas de quiz original
      </button>
    </div>
  );
};

export default App;
