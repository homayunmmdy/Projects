import React, { useState } from 'react';

const Quiz: React.FC = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);

  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars',
    },
    {
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ['Harper Lee', 'Stephen King', 'J.K. Rowling', 'Charles Dickens'],
      correctAnswer: 'Harper Lee',
    },
    // Add more questions here...
  ];

  const handleAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
    if (answer === questions[step - 1].correctAnswer) {
      setScore(score + 1);
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const resetQuiz = () => {
    setStep(1);
    setAnswers([]);
    setScore(0);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-2xl rounded-md">
      <h1 className="text-3xl font-bold mb-8 text-center">Quiz App</h1>
      {step <= questions.length ? (
        <div>
          <h2 className="text-xl font-semibold mb-6">Question {step}</h2>
          <p className="mb-8 text-lg">{questions[step - 1].question}</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {questions[step - 1].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-md transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {option}
              </button>
            ))}
          </div>
          <div className="mt-10 flex justify-between">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Back
              </button>
            )}
            <button
              onClick={() => handleAnswer('Skip')}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Skip
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-6">Quiz Completed!</h2>
          <p className="text-lg mb-4">Your answers:</p>
          <ul className="mb-6">
            {answers.map((answer, index) => (
              <li key={index}>{answer}</li>
            ))}
          </ul>
          <p className="text-lg mb-4">Your score: {score}/{questions.length}</p>
          <p className="text-lg mb-4">Correct answers:</p>
          <ul className="mb-6">
            {questions.map((question, index) => (
              <li key={index}>
                {question.question}: {question.correctAnswer}
              </li>
            ))}
          </ul>
          <div className="flex justify-center">
            <button
              onClick={resetQuiz}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Restart Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;

