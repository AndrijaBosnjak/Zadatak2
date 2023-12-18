import "./stopwatch.css";

export const Timer = ({ time }) => {
  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time">
        {Math.floor(time / 360000)} :{" "}
        {Math.floor((time % 360000) / 6000)
          .toString()
          .padStart(2, "0")}{" "}
        :{" "}
        {Math.floor((time % 6000) / 100)
          .toString()
          .padStart(2, "0")}{" "}
        : {(time % 100).toString().padStart(2, "0")}
      </p>
    </div>
  );
};
