import { useState } from "react";
import Header from "./Header";
import Card from "./Card";
import {
  getCustomQuestions,
  getQuestions,
  getOriginalQuestions,
} from "./../utils/questions.js";
import "./Quiz.css";

const AIQuiz = ({ onRestart, numQuestions = 0, quizType }) => {
  const [questionList, setQuestionList] = useState(
    quizType === "AI"
      ? getQuestions()
      : quizType === "original"
      ? getOriginalQuestions()
      : getCustomQuestions(numQuestions)
  );
  const [current, setCurrent] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [finished, setFinished] = useState(false);

  const onSelectOption = (option) => {
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
        <h1 className="score">
          Score
          <br />
          <b>{score.length}</b>/ {questionList.length}
        </h1>
        <div>
          {questionList.map((question) => (
            <Card question={question} reviewMode={true} key={question.id} />
          ))}
        </div>
        <button onClick={onRestart} className="restart">
          Restart
        </button>
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

export default AIQuiz;
