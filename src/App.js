import { useState } from "react";
import Header from "./components/Header";
import questions from "./data/questions.json";
import Card from "./components/Card";

import "./App.css";

const App = () => {
  const [questionList, setQuestionList] = useState(questions);
  const [current, setCurrent] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [finished, setFinished] = useState(false);

  const onSelectOption = (option) => {
    console.log(option);
    setQuestionList(
      questionList.map((question, i) => {
        if (i === current) {
          setCompleted(completed + 1);

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

  const onSubmit = () => {
    setFinished(true);
  };

  if (finished) {
    const score = questionList.filter(
      (question) => question.answered === question.correct
    );

    return (
      <div>
        <h1>
          {score.length} / {questionList.length}
        </h1>
      </div>
    );
  }

  return (
    <div>
      <Header
        current={current + 1}
        completed={completed}
        total={questionList.length}
      />
      <Card question={questionList[current]} onSelectOption={onSelectOption} />
      <div className="controls">
        {current > 0 && (
          <button onClick={onPrevious} className="previous">
            Previous
          </button>
        )}
        {current >= questionList.length - 1 ? (
          <button className="submit" onClick={onSubmit}>
            Submit
          </button>
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
