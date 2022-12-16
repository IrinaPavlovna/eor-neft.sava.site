import React, { useState } from "react";
//import q1 from '../../../img/quiz/q1.jpg'
import { questionsVT1 } from "./testData";

function Test() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questionsVT1.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const refresh = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <>
     <div className="blur">
        <div className="test">
          {showScore ? (
            <div className="test__content" onClick={(e) => e.stopPropagation()}>
              Правильных ответов {score}из {questionsVT1.length}
              <button onClick={refresh}>Попробовать еще раз</button>
            </div>
          ) : (
            <div className="test__content" onClick={(e) => e.stopPropagation()}>
              <p>{questionsVT1[currentQuestion].questionText}</p>
              <span>Вопрос {currentQuestion + 1}</span> / {questionsVT1.length}
              <div className="btn-test">
                {questionsVT1[currentQuestion].answerOptions.map((item) => (
                  <button
                    onClick={() => handleAnswerOptionClick(item.isCorrect)}
                  >
                    {item.answerText}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Test;
