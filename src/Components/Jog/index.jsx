import React from "react";

const Jog = ({ time, setTime, jogTracker, setJogTracker }) => {
  const incrementJog = (n) => {
    const { hours, minutes, seconds, sign } = time;
    if (sign === "" && minutes + n < 60) {
      let newTime = { ...time, minutes: time["minutes"] + n };
      setTime(newTime);
      setJogTracker(!jogTracker);
    } else if (sign === "-") {
      let newTime = {
        hours: 0,
        minutes: n,
        seconds: 0,
        sign: "",
      };
      setTime(newTime);
      setJogTracker(!jogTracker);
    } else {
      let totalSeconds = hours * 3600 + (minutes + n) * 60 + seconds;
      let newTime = {};

      newTime = {
        hours: Math.floor(totalSeconds / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
        sign: "",
      };
      setTime(newTime);
      setJogTracker(!jogTracker);
    }
  };
  const decrementJog = (n) => {
    const { hours, minutes, seconds, sign } = time;
    if (sign === "" && minutes - n >= 0 && hours === 0) {
      let newTime = { ...time, minutes: time["minutes"] - n };
      setTime(newTime);
      setJogTracker(!jogTracker);
    } else if (sign === "-") {
      let newTime = {
        hours: 0,
        minutes: 0,
        seconds: 0,
        sign: "",
      };
      setTime(newTime);
      setJogTracker(!jogTracker);
    } else if (hours > 0) {
      let totalSeconds = hours * 3600 + (minutes - n) * 60 + seconds;
      let newTime = {};

      newTime = {
        hours: Math.floor(totalSeconds / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
        sign: "",
      };
      setTime(newTime);
      setJogTracker(!jogTracker);
    }
  };
  return (
    <div className="jog_block centered column">
      <div className="jog_typography">JOG</div>
      <div className="preset row">
        <button onClick={() => incrementJog(5)}>+ </button>
        <div className="jog_time">5</div>
        <button onClick={() => decrementJog(5)}>- </button>
      </div>
      <div className="preset row">
        {" "}
        <button jog_button onClick={() => incrementJog(1)}>
          +
        </button>
        <div className="jog_time">1</div>
        <button onClick={() => decrementJog(1)}>-</button>
      </div>
    </div>
  );
};

export default Jog;
