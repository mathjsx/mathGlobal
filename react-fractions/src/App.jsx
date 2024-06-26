import React, { useState } from 'react';
import { Button } from '@mui/material';
import generateQuestions from './utils/questions';
import QuestionForm from './components/QuestionForm';

function App() {
  const [questions, setQuestions] = useState(generateQuestions());
  const [selectedAnswers, setSelectedAnswers] = useState(Array(5).fill(null));
  const [score, setScore] = useState(null);

  const handleNewQuestions = () => {
    setQuestions(generateQuestions());
    setSelectedAnswers(Array(5).fill(null));
    setScore(null);
  };

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = value;
    setSelectedAnswers(newAnswers);
  };

  const handleScore = () => {
    const correctCount = questions.reduce((count, q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        return count + 1;
      }
      return count;
    }, 0);
    setScore(correctCount);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Soal Pecahan</h1>
      {questions.map((q, index) => (
        <QuestionForm
          key={index}
          question={q}
          selectedAnswer={selectedAnswers[index]}
          onChange={(value) => handleAnswerChange(index, value)}
          disabled={score !== null}
        />
      ))}
      <Button variant="contained" onClick={handleNewQuestions} style={{ marginRight: '10px' }}>
        Soal Baru
      </Button>
      {score === null && (
        <Button variant="contained" onClick={handleScore}>
          Score
        </Button>
      )}
      {score !== null && (
        <div style={{ marginTop: '20px' }}>
          <h2>Skor Anda: {score} dari 5</h2>
        </div>
      )}
    </div>
  );
}

export default App;

