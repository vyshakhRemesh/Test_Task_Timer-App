import React from "react";

const TimerButtons = ({
  time,
  setTime,
  setTimerColor,
  timerOn,
  setTimerOn,
}) => {
  const startTimer = () => {
    if (time["hours"] === 0 && time["minutes"] === 0 && time["seconds"] === 0) {
      return;
    }
    if (time["sign"] === "-") {
      resetTimer();
    } else {
      setTimerOn(true);
    }
  };
  const pauseTimer = () => {
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
        <button className="large_buttons" onClick={pauseTimer}>
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
