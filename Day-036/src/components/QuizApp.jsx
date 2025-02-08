import { useState } from "react";
import "./QuizApp.css";

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris",
  },
  {
    question: "Which is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Jupiter",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "High Tech Modern Language",
    ],
    answer: "Hyper Text Markup Language",
  },
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    if (option === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < quizData.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
  };

  return (
    <div className="quiz-container">
      <h2>📝 Quiz App</h2>

      {showResult ? (
        <div className="result">
          <h3>Quiz Completed!</h3>
          <p>Your Score: {score} / {quizData.length}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="quiz-content">
          <h3>{quizData[currentQuestion].question}</h3>
          <div className="options">
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option-btn ${selectedOption === option ? (option === quizData[currentQuestion].answer ? "correct" : "incorrect") : ""}`}
                onClick={() => handleOptionClick(option)}
                disabled={selectedOption !== null}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
