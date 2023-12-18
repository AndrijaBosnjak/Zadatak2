import { useState, useCallback, useMemo } from "react";
import "./App.css";
import Stopwatch from "./components/stopwatch/Stopwatch";
import { questionsAndAnswers } from "./mockData";
import { getNewIndex } from "./utils";
import { FinishQuiz } from "./FinishQuiz";
import { StartQuiz } from "./StartQuiz";

const questionsAnswers = questionsAndAnswers;
const initialIndex = getNewIndex([]);

function App() {
  const [correctAnswersCounter, setCorrectAnswersCounter] = useState(0);
  const [startQuiz, setStartQuiz] = useState(false);
  const [usedIndexes, setUsedIndexes] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(
    questionsAnswers[initialIndex].question
  );
  const [currentAnswer, setCurrentAnswer] = useState(
    questionsAnswers[initialIndex].answer
  );
  const [userAnswer, setUserAnswer] = useState("");
  const [answerLabelText, setAnswerLabelText] = useState("");

  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  const onStartQuiz = () => {
    setStartQuiz(true);
    setIsRunning(true);
    console.log(
      "initialIndex:",
      initialIndex,
      "current question and answer:",
      currentQuestion,
      ",",
      currentAnswer
    );
    setUsedIndexes((usedIndexes) => [...usedIndexes, initialIndex]);
  };

  const onConfirmAnswer = useCallback(
    (event) => {
      console.log("userAnswer:", userAnswer);
      console.log("currentAnswer", currentAnswer);
      console.log("correct answers counter:", correctAnswersCounter);
      console.log("usedIndexes array:", usedIndexes);

      if (userAnswer == currentAnswer) {
        setAnswerLabelText("Odgovor je točan!");

        const newIndex = getNewIndex(usedIndexes);
        setCurrentQuestion(questionsAnswers[newIndex].question);
        setCurrentAnswer(questionsAnswers[newIndex].answer);
        setUsedIndexes((usedIndexes) => [...usedIndexes, newIndex]);
        setCorrectAnswersCounter(correctAnswersCounter + 1);
      } else {
        setAnswerLabelText("Odgovor je netočan!Pokušaj ponovo!");
      }

      //  if (userAnswer.trim().length === 0) {
      //   setAnswerLabelText("Odgovor je netočan!Pokušaj ponovo!");
      //  }
      setUserAnswer("");
    },
    [userAnswer, currentAnswer, usedIndexes, correctAnswersCounter]
  );

  const onPlayAgain = () => {
    setStartQuiz(true);
    setCorrectAnswersCounter(0);
    setUsedIndexes([]);
    setAnswerLabelText("");
    setCurrentQuestion(questionsAnswers[initialIndex].question);
    setCurrentAnswer(questionsAnswers[initialIndex].answer);
    setTime(0);
  };

  const showQuestionAndResults = useMemo(() => {
    if (correctAnswersCounter == 5) {
      setIsRunning(false);

      return (
        <FinishQuiz playAgain={onPlayAgain} time={time} />
      );
    } else {
      return (
        <StartQuiz 
          confirmAnswer={onConfirmAnswer}
          currentQuestion={currentQuestion}
          userAnswer={userAnswer}
          setUserAnswer={setUserAnswer}
          answerLabelText={answerLabelText}
          correctAnswersCounter={correctAnswersCounter}
        />
      );
    }
  }, [correctAnswersCounter, userAnswer]);

  return (
    <>
      {!startQuiz && <button onClick={onStartQuiz}>Play</button>}
      {startQuiz && (
        <>
          <Stopwatch isRunning={isRunning} time={time} setTime={setTime} />
          <h2>Quiz:</h2>
          {showQuestionAndResults}
        </>
      )}
    </>
  );
}

export default App;
