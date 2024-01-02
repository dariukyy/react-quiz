import { useQuiz } from "./context/QuizContext";

function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();
  const persentage = (points / maxPossiblePoints) * 100;
  console.log(performance);

  let emoji;

  if (persentage === 100) emoji = "🥇";
  if (persentage >= 80 && persentage < 100) emoji = "🎉";
  if (persentage >= 50 && persentage < 80) emoji = "🙃";
  if (persentage > 0 && persentage < 50) emoji = "🤔";
  if (persentage === 0) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You Scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.round(persentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
