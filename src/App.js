import { useState } from "react";
import Header from "./components/Header";
import questions from "./data/questions.json";
import Card from "./components/Card";

import "./App.css";

const App = () => {
  const [questionList, setQuestionList] = useState(questions);
  const [current, setCurrent] = useState(0);
  const [completed, setCompleted] = useState(0);

  const onSelectOption = (option) => {
    console.log(option);
    setQuestionList(
      questionList.map((question, i) => {
        if (i === current) {
          return {
            ...question,
            answered: option,
          };
        }

        return question;
      })
    );
  };

  const onPrevious = () => {
    setCurrent(current - 1);
  };

  const onNext = () => {
    setCurrent(current + 1);
  };

  return (
    <div>
      <Header current={current + 1} total={questionList.length} />
      <Card question={questionList[current]} onSelectOption={onSelectOption} />
      <div className="controls">
        {current > 0 && (
          <button onClick={onPrevious} className="previous">
            Previous
          </button>
        )}
        {current >= questionList.length - 1 ? (
          <button className="submit">Submit</button>
        ) : (
          <button onClick={onNext} className="next">
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
