export const FinishQuiz = (time, onPlayAgain) => {
    return (
        <>
          <p>Čestitam, odgovorio si točno na 5 pitanja!!</p>
          <p>
            Vrijeme potrebno za rješavanje: 
            {Math.floor(time / 360000)}{" "}:{" "}
            {Math.floor((time % 360000) / 6000)
              .toString()
              .padStart(2, "0")}{" "}
            :{" "}
            {Math.floor((time % 6000) / 100)
              .toString()
              .padStart(2, "0")}{" "}
            : {(time % 100).toString().padStart(2, "0")}
          </p>
          <button onClick={() => onPlayAgain}>Play again</button>
        </>
      );
}