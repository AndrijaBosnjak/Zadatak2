export const StartQuiz = ({
  onConfirmAnswer,
  currentQuestion,
  userAnswer,
  setUserAnswer,
  answerLabelText,
  correctAnswersCounter,
}) => {
  return (
    <>
      <p>Izračunaj zbroj ova dva broja: {currentQuestion}</p>
      <form>
        <label htmlFor="fname">Your answer: </label>
        <input
          type="number"
          id="answer"
          name="answer"
          placeholder="upiši cijeli broj"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
      </form>
      <button onClick={() => onConfirmAnswer()}>Confirm</button>
      <p>{answerLabelText}</p>
      <p>Broj točnih odgovora: {correctAnswersCounter}</p>
    </>
  );
};
