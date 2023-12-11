import { useState, useCallback, useMemo } from "react";
import "./App.css";
import Stopwatch from "./components/stopwatch/Stopwatch";
import { questionsAndAnswers } from "./mockData";
import { getNewIndex } from "./utils";

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

  const onStartQuiz = () => {
    setStartQuiz(true);
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

      if (userAnswer == currentAnswer) {
        setAnswerLabelText("Odgovor je točan!");
        
        const newIndex = getNewIndex(usedIndexes);
        setCurrentQuestion(questionsAnswers[newIndex].question);
        setCurrentAnswer(questionsAnswers[newIndex].answer);
        setUsedIndexes((usedIndexes) => [...usedIndexes, newIndex]);

        setCorrectAnswersCounter(correctAnswersCounter + 1);
      } else if (userAnswer.trim().length === 0) {
        setAnswerLabelText("Odgovor je netočan!Pokušaj ponovo!")
      } else {
          setAnswerLabelText("Odgovor je netočan!Pokušaj ponovo!");
      }

      setUserAnswer("");
    },
    [userAnswer, currentAnswer, usedIndexes, correctAnswersCounter]
  );

  console.log("correct answers counter:", correctAnswersCounter);
  console.log("usedIndexes array:", usedIndexes);
 
  const onPlayAgain = () => {
    setStartQuiz(true);
    setCorrectAnswersCounter(0);
    setUsedIndexes([]);
    setAnswerLabelText("");
    setCurrentQuestion(questionsAnswers[initialIndex].question);
    setCurrentAnswer(questionsAnswers[initialIndex].answer);
  };

  const showQuestionAndResults = useMemo(() => {
    if (correctAnswersCounter == 5) {
     return (
        <>
          <p>Čestitam, odgovorio si točno na 5 pitanja!!</p>
          <p>Potrebno ti je bilo: </p>
          <button onClick={onPlayAgain}>Play again</button>
        </>
      );
    } else {
      return (
        <>
          <p>Izračunaj zbroj ova dva broja: {currentQuestion}</p>
          <form>
            <label htmlFor="fname">Your answer:</label>
            <input
              type="number"
              id="answer"
              name="answer"
              placeholder="upiši cijeli broj"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
          </form>
          <button onClick={onConfirmAnswer}>Confirm</button>
          <p>{answerLabelText}</p>
          <p>Broj točnih odgovora: {correctAnswersCounter}</p>
        </>
      );
    }
  }, [correctAnswersCounter, userAnswer]);

  return (
    <>
      {!startQuiz && <button onClick={onStartQuiz}>Play</button>}
      {startQuiz && (
        <>
          <Stopwatch />
          <h2>Quiz:</h2>
          {showQuestionAndResults}
        </>
      )}
    </>
  );
}

export default App;
