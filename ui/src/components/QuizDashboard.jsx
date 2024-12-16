import React, { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";

const QuizDashboard = ({ quizContract }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    if (!quizContract) return;

    const fetchQuestions = async () => {
      const questionCount = await quizContract.getQuestionsCount();
      const loadedQuestions = [];

      for (let i = 0; i < questionCount; i++) {
        const [text, options] = await quizContract.getQuestion(i);
        loadedQuestions.push({ text, options });
      }
      setQuestions(loadedQuestions);
    };

    fetchQuestions();
  }, [quizContract]);

  const submitAnswer = async (optionIndex) => {
    await quizContract.submitAnswer(currentQuestion, optionIndex);
    alert("Answer submitted!");
    setCurrentQuestion((prev) => prev + 1);
  };

  if (!quizContract) return <p>Please connect your wallet to load the quiz.</p>;
  if (questions.length === 0) return <p>Loading questions...</p>;

  return (
    <QuestionCard
      question={questions[currentQuestion].text}
      options={questions[currentQuestion].options}
      submitAnswer={submitAnswer}
    />
  );
};

export default QuizDashboard;
