import React from "react";
import RightArrowIcon from "../../Assets/Icons/RightArrowIcon";
import LeftArrowIcon from "../../Assets/Icons/LeftArrowIcon";

const TimeSet = ({ time, setTime }) => {
  const decrementValue = (type) => {
    if (time[type] === 0) {
      return;
    }
    const newTime = { ...time, [type]: time[type] - 1 };
    setTime(newTime);
  };

  const incrementValue = (type) => {
    if (type === "hours" && time[type] === 23) {
      return;
    }
    if (type === "minutes" && time[type] === 59) {
      return;
    }
    if (type === "seconds" && time[type] === 59) {
      return;
    }
    const newTime = { ...time, [type]: time[type] + 1 };
    console.log(newTime);
    setTime(newTime);
  };

  return (
    <div className="time_set_container centered row">
      <div className="column time_set_block">
        <div className="time_set_typography">Hours</div>
        <div className="row">
          <button onClick={() => decrementValue("hours")}>
            <LeftArrowIcon />{" "}
          </button>
          <div className="set_time">
            {time["hours"].toString().padStart(2, "0")}
          </div>
          <button onClick={() => incrementValue("hours")}>
            <RightArrowIcon />
          </button>
        </div>
      </div>
      <div className="column time_set_block">
        <div className="time_set_typography">Minutes</div>
        <div className="row">
          <button onClick={() => decrementValue("minutes")}>
            <LeftArrowIcon />{" "}
          </button>{" "}
          <div className="set_time">
            {time["minutes"].toString().padStart(2, "0")}
          </div>
          <button onClick={() => incrementValue("minutes")}>
            <RightArrowIcon />
          </button>
        </div>
      </div>
      <div className="column time_set_block">
        <div className="time_set_typography">Seconds</div>
        <div className="row">
          <button onClick={() => decrementValue("seconds")}>
            <LeftArrowIcon />{" "}
          </button>
          <div className="set_time">
            {time["seconds"].toString().padStart(2, "0")}
          </div>
          <button onClick={() => incrementValue("seconds")}>
            <RightArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeSet;
