import { useState } from "react";
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
  const [showStopwatch, setShowStopwatch] = useState(false);
  const [index, setIndex] = useState(0);

  const [userAnswer, setUserAnswer] = useState();

  const onStartQuiz = () => {
    setShowStopwatch(true);
    
  };
  // console.log(questionsAnswers);

  const nextQuestionHandler = () => {
    setIndex(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  };

  const currentAnswer = questionsAnswers[index].answer;
    console.log(currentAnswer);

  const onConfirmAnswer = event => {
    event.preventDefault();
    setUserAnswer(event.target.value);
    console.log(userAnswer)
  }

  return (
    <>
      {showStopwatch && <Stopwatch />}
      <button onClick={onStartQuiz}>Play</button>
      <h2>Quiz:</h2>
      <button onClick={nextQuestionHandler}>Next question</button>
      <p>What is the sum: {questionsAnswers[index].question} ?</p>

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
          type="text"
          id="answer"
          name="answer"
          placeholder="upiši cijeli broj"
          value={userAnswer}
          onChange={onConfirmAnswer} 
        />
      </form>
      <button onClick={onConfirmAnswer}>Confirm</button>
      </>
  );
}

export default App;
