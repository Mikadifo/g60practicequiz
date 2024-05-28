import "./Card.css";

const Card = ({ question, onSelectOption, reviewMode }) => {
  return (
    <div className="card">
      <h5>{question.text}</h5>
      <ul>
        {question.options.map(({ id, option }) => (
          <div key={id}>
            {reviewMode ? (
              <li
                onClick={() => onSelectOption(id)}
                className={`${id === question.correct ? "correct" : ""} ${
                  question.correct !== question.answered &&
                  question.answered === id
                    ? "wrong"
                    : ""
                } review-list`}
              >
                {option}
              </li>
            ) : (
              <li
                onClick={() => onSelectOption(id)}
                className={`${
                  id === question.answered ? "selected" : ""
                } question-list`}
              >
                {option}
              </li>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Card;
