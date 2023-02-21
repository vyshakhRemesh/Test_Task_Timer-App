import React from "react";
const TimePreview = ({ time, timerColor }) => {
  const formatTime = (time) => {
    return `${time.sign} ${time.hours
      .toString()
      .padStart(2, "0")}:${time.minutes
      .toString()
      .padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`;
  };
  return (
    <div
      className="timer_preview_container centered column"
      style={{ backgroundColor: `${timerColor}` }}
    >
      <div className="preview_typography">Remainig Time</div>

      <div className="preview_time">{formatTime(time)}</div>
    </div>
  );
};

export default TimePreview;
