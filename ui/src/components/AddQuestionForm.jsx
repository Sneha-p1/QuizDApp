import React, { useState } from "react";

const AddQuestionForm = ({ quizContract }) => {
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctOption, setCorrectOption] = useState(0);

  const addQuestion = async () => {
    if (!quizContract) {
      alert("Please connect your wallet first.");
      return;
    }

    await quizContract.addQuestion(questionText, options, correctOption);
    alert("Question added!");
  };

  return (
    <div>
      <h2>Add a Question</h2>
      <input
        type="text"
        placeholder="Question"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
      />
      {options.map((option, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Option ${index + 1}`}
          value={option}
          onChange={(e) =>
            setOptions((opts) =>
              opts.map((opt, i) => (i === index ? e.target.value : opt))
            )
          }
        />
      ))}
      <input
        type="number"
        placeholder="Correct Option Index"
        value={correctOption}
        onChange={(e) => setCorrectOption(parseInt(e.target.value))}
      />
      <button onClick={addQuestion}>Add Question</button>
    </div>
  );
};

export default AddQuestionForm;
