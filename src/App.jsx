import { useState, useEffect } from "react";
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
  const [correctAnswersCounter, setCorrectAnswersCounter] = useState(0);
  const [showQuestions, setshowQuestions] = useState(false); //starta i štopericu
  const [index, setIndex] = useState(
    Math.floor(Math.random() * (10 - 1 + 1)) + 1
  );
  const [usedIndex, setUsedIndex] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentAnswer, setCurrentAnswer] = useState("");

  const [userAnswer, setUserAnswer] = useState("");
  const [answerLabelText, setAnswerLabelText] = useState("");

  const onStartQuiz = () => {
    setshowQuestions(true);
    setCurrentQuestion(questionsAnswers[index].question);
    setCurrentAnswer(questionsAnswers[index].answer);
    setIndex(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  };

  const onConfirmAnswer = (event) => {
    console.log("odgovor", userAnswer);
    console.log("točan odgovor", currentAnswer);

    if (userAnswer == currentAnswer) {
      setAnswerLabelText("Odgovor je točan!");
      setIndex(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
      setUsedIndex(usedIndex => [...usedIndex, index]);
      setCorrectAnswersCounter(correctAnswersCounter + 1);
      setCurrentQuestion(questionsAnswers[index].question);
      setCurrentAnswer(questionsAnswers[index].answer);
      
    } else {
      setAnswerLabelText("Odgovor je netočan!Pokušaj ponovo!");
    }

    setUserAnswer("");
  };
  console.log(answerLabelText);
  console.log(correctAnswersCounter);
  console.log(usedIndex);

  useEffect(() => {
    console.log(userAnswer);
    console.log(currentAnswer);
  }, [userAnswer, currentAnswer]);

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
          <p>{answerLabelText} </p>
        </>
      )}
      ;
    </>
  );
}

export default App;
