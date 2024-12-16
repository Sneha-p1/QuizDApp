const QuestionCard = ({ question, options, submitAnswer }) => {
    return (
      <div>
        <h3>{question}</h3>
        {options.map((option, index) => (
          <button key={index} onClick={() => submitAnswer(index)}>
            {option}
          </button>
        ))}
      </div>
    );
  };
  
  export default QuestionCard;
  