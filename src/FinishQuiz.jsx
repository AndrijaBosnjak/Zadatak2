import { Timer } from "../src/components/stopwatch/Timer";

export const FinishQuiz = ({ time, playAgain }) => {
  return (
    <>
      <p>Čestitam, odgovorio si točno na 5 pitanja!!</p>
      <p>
        Vrijeme potrebno za rješavanje: <Timer time={time} />
      </p>
      <button onClick={() => playAgain()}>Play again</button>
    </>
  );
};
