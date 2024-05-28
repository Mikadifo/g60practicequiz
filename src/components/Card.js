import "./Card.css";

const Card = ({ question, onSelectOption }) => {
  return (
    <div className="card">
      <h5>{question.text}</h5>
      <ul>
        {question.options.map(({ id, option }) => (
          <li
            key={id}
            onClick={() => onSelectOption(id)}
            className={`${id === question.answered ? "selected" : ""}`}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
