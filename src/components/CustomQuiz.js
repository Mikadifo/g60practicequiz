import { useState } from "react";
import Quiz from "./Quiz";
import "./CustomQuiz.css";

const OPTIONS = [5, 10, 15, 20, 25, 30, 35];

const CustomQuiz = ({ onRestart }) => {
  const [numQuestions, setNumQuestions] = useState(0);

  if (numQuestions > 0 && numQuestions <= 35) {
    return <Quiz onRestart={onRestart} numQuestions={numQuestions} />;
  }

  return (
    <div className="menu-options">
      <h1>Cuantas preguntas quiere estudiar?</h1>
      <div>
        {OPTIONS.map((option) => (
          <button key={option} onClick={() => setNumQuestions(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomQuiz;
