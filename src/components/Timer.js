import { useEffect } from "react";
import { useQuiz } from "./context/QuizContext";

const SEC_IN_MIN = 60;

function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();
  const minutes = Math.floor(secondsRemaining / SEC_IN_MIN);
  const seconds = secondsRemaining - minutes * SEC_IN_MIN;

  function str_pad_left(string, pad, length) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
  }
  const finalTime =
    str_pad_left(minutes, "0", 2) + ":" + str_pad_left(seconds, "0", 2);

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return <div className="timer">{finalTime}</div>;
}

export default Timer;
