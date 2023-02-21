import React from "react";

const TimerButtons = ({
  time,
  setTime,
  setTimerColor,
  timerOn,
  setTimerOn,
}) => {
  const startTimer = () => {
    const { hours, minutes, seconds, sign } = time;
    if (time["hours"] === 0 && time["minutes"] === 0 && time["seconds"] === 0) {
      return;
    }
    if (time["sign"] == "-") {
      resetTimer();
    } else {
      setTimerOn(true);
    }
    console.log("the time is", time);
    console.log(time["hours"] == 0);
  };
  const stopTimer = () => {
    setTimerOn(false);
  };
  const resetTimer = () => {
    setTimerOn(false);
    setTime({ hours: 0, minutes: 0, seconds: 0, sign: "" });
    setTimerColor("white");
  };
  return (
    <div className="large_buttons_container row">
      {" "}
      {!timerOn ? (
        <button className="large_buttons" onClick={startTimer}>
          Start
        </button>
      ) : (
        <button className="large_buttons" onClick={stopTimer}>
          Pause
        </button>
      )}
      <button className="large_buttons" onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
};

export default TimerButtons;
