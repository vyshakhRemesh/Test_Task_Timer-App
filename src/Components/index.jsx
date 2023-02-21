import { useState, useEffect, useRef } from "react";
import TimeSet from "./TimeSet";
import TimePreview from "./TimePreview";
import TimerButtons from "./TimerButtons";
import "./index.css";
import Jog from "./Jog";

function TimerComponents() {
  const [timerColor, setTimerColor] = useState("white");
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    sign: "",
  });
  const [timerOn, setTimerOn] = useState(false);
  const [jogTracker, setJogTracker] = useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    console.log(time);
    const { hours, minutes, seconds } = time;
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    let newTime = {};

    if (timerOn) {
      intervalRef.current = setInterval(() => {
        totalSeconds -= 1;
        console.log(totalSeconds);

        if (hours !== 0 || minutes > 5) {
          setTimerColor("green");
        } else if (minutes <= 5) {
          setTimerColor("orange");
        }

        if (totalSeconds < 0) {
          setTimerColor("red");
          const absTime = Math.abs(totalSeconds);
          newTime = {
            hours: Math.floor(absTime / 3600),
            minutes: Math.floor((absTime % 3600) / 60),
            seconds: absTime % 60,
            sign: "-",
          };
        } else {
          const absTime = Math.abs(totalSeconds);
          newTime = {
            hours: Math.floor(absTime / 3600),
            minutes: Math.floor((absTime % 3600) / 60),
            seconds: absTime % 60,
            sign: "",
          };
        }

        setTime(newTime);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [timerOn, jogTracker]);

  return (
    <div className="TimerContainer centered column">
      {!timerOn && <TimeSet time={time} setTime={setTime}></TimeSet>}

      <TimePreview time={time} timerColor={timerColor}></TimePreview>

      <TimerButtons
        time={time}
        setTime={setTime}
        setTimerColor={setTimerColor}
        timerOn={timerOn}
        setTimerOn={setTimerOn}
      ></TimerButtons>
      <Jog
        time={time}
        setTime={setTime}
        jogTracker={jogTracker}
        setJogTracker={setJogTracker}
      ></Jog>
    </div>
  );
}

export default TimerComponents;
