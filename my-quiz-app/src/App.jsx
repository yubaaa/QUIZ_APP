import React, { useState } from 'react';
import './App.css'; // Add your styling as needed

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    correctAnswer: 'Mars',
  },
  {
    question: 'What is the largest mammal in the world?',
    options: ['Elephant', 'Blue Whale', 'Giraffe', 'Polar Bear'],
    correctAnswer: 'Blue Whale',
  },
  {
    question: 'Who wrote "Romeo and Juliet"?',
    options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
    correctAnswer: 'William Shakespeare',
  },
  {
    question: 'What is the capital of Japan?',
    options: ['Beijing', 'Tokyo', 'Seoul', 'Bangkok'],
    correctAnswer: 'Tokyo',
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Jupiter', 'Mars', 'Venus'],
    correctAnswer: 'Jupiter',
  },
  {
    question: 'Which famous scientist developed the theory of general relativity?',
    options: ['Isaac Newton', 'Niels Bohr', 'Albert Einstein', 'Galileo Galilei'],
    correctAnswer: 'Albert Einstein',
  },
  {
    question: 'In which year did the Titanic sink?',
    options: ['1910', '1925', '1912', '1907'],
    correctAnswer: '1912',
  },
  {
    question: 'What is the currency of Brazil?',
    options: ['Peso', 'Real', 'Rupee', 'Dollar'],
    correctAnswer: 'Real',
  },
  // Add more questions as needed
];

const Question = ({ question, options, handleAnswerClick }) => {
  return (
    <div className="question-section">
      <h2>{question}</h2>
      <div className="answer-options">
        {options.map((option, index) => (
          <button key={index} onClick={() => handleAnswerClick(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

const Score = ({ score, handleRestartQuiz }) => {
  return (
    <div className="score-section">
      <h2>Your Score: {score}</h2>
      <button onClick={handleRestartQuiz}>Restart Quiz</button>
    </div>
  );
};

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <Score score={score} handleRestartQuiz={handleRestartQuiz} />
      ) : (
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          handleAnswerClick={handleAnswerClick}
        />
      )}
    </div>
  );
};

export default QuizApp;
