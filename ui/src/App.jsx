import React from "react";
import Header from "./components/Header";
import QuizDashboard from "./components/QuizDashboard";
import AddQuestionForm from "./components/AddQuestionForm";
import ScoreBoard from "./components/ScoreBoard";

const App = () => (
  <div>
    <Header />
    <QuizDashboard />
    <ScoreBoard />
    <AddQuestionForm />
  </div>
);

export default App;
