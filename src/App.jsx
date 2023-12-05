import { useState, useEffect, } from "react";
import "./App.css";
import Stopwatch from "./components/stopwatch/Stopwatch";

const questionsAnswers = [
  {
    question: "123 + 184",
    answer: 307,
  },
  {
    question: "214 + 107",
    answer: 321,
  },
  {
    question: "214 + 243",
    answer: 457,
  },
  {
    question: "248 + 354",
    answer: 602,
  },
  {
    question: "352 + 124",
    answer: 476,
  },
  {
    question: "286 + 408",
    answer: 694,
  },
  {
    question: "385 + 426",
    answer: 811,
  },
  {
    question: "252 + 464",
    answer: 716,
  },
  {
    question: "105 + 484",
    answer: 589,
  },
  {
    question: "314 + 529",
    answer: 843,
  },
];

function App() {
  const generateRandomNumber = Math.floor(Math.random() * 10); 

  const [correctAnswersCounter, setCorrectAnswersCounter] = useState(0);
  const [showQuestions, setShowQuestions] = useState(false); //starta i štopericu
  const [index, setIndex] = useState(generateRandomNumber);
  const [usedIndex, setUsedIndex] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(
    questionsAnswers[index].question
  );
  const [currentAnswer, setCurrentAnswer] = useState(
    questionsAnswers[index].answer
  );

  const [userAnswer, setUserAnswer] = useState("");
  const [answerLabelText, setAnswerLabelText] = useState("");

  useEffect(() => {
    console.log("here")
    console.log("useEffect, index", index);
    console.log("useEffect, currentQuestion", currentQuestion);
    console.log(currentAnswer);
    setCurrentQuestion(questionsAnswers[index].question);
    setCurrentAnswer(questionsAnswers[index].answer);

    for (let i = 0; i < usedIndex.length; i++) {
      if (index === usedIndex[i]) {
        setIndex(generateRandomNumber);
        break;
      }
    }
  }, [currentQuestion, index, usedIndex]);

  const onStartQuiz = () => {
    setShowQuestions(true);
    console.log(index, currentQuestion, currentAnswer);
  };

  const onConfirmAnswer = (event) => {
    console.log("odgovor", userAnswer);
    console.log("točan odgovor", currentAnswer);
    console.log(index);

    if (userAnswer == currentAnswer) {
      setAnswerLabelText("Odgovor je točan!");
      setUsedIndex((usedIndex) => [...usedIndex, index]);
      setCorrectAnswersCounter(correctAnswersCounter + 1);
    } else {
      setAnswerLabelText("Odgovor je netočan!Pokušaj ponovo!");
    }

    setUserAnswer("");
  }

  const onPlayAgain = () => {

  }

  console.log(correctAnswersCounter);
  console.log(index);
  console.log(usedIndex);

  return (
    <>
      <button onClick={onStartQuiz}>Play</button>
      {showQuestions && (
        <>
          <Stopwatch />
          <h2>Quiz:</h2>
          <p>Izračunaj zbroj ova dva broja: {currentQuestion}</p>

          {/* ispis kompletnog niza */}
          {/* {questionsAnswers.map((questionAnswer,index) => {
        return (
          <div key={index}>
            <p>{questionAnswer.question} "= ?"</p>
            <p>{questionAnswer.answer}</p>
          </div>
        )
      }  
      )}  */}

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
          {correctAnswersCounter >= 5 && (
            <>
              <p>Čestitam, odgovorio si točno na 5 pitanja!!</p> 
              {/* <p>Potrebno ti je bilo: </p> // time */}
              <button onClick={onPlayAgain}>Play again</button>
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;
