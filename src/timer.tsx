import { useState } from "react";

interface TimerProps {
  minutes: string;
  seconds: string;
}

function Timer({ minutes, seconds }: TimerProps) {
  const secondsFromProps = Number(minutes) * 60 + Number(seconds);

  const [secondsLeft, setSecondsLeft] = useState(secondsFromProps);
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerId, setTimerId] = useState<NodeJS.Timeout>();

  let secondsDeclaration = secondsFromProps;
  let dateStartTimer = 0;
  let timerIdForFinish: NodeJS.Timeout;

  const timerFinish = () => {
    setTimerStarted(false);
    secondsDeclaration = 0;
    clearInterval(timerIdForFinish);
  };

  const changeTimerValue = () => {
    const dateNow = Date.now();
    const secondsSinceStart = Math.floor((dateNow - dateStartTimer) / 1000);
    const newSecondsLeft = secondsDeclaration - secondsSinceStart;
    if (newSecondsLeft === 0) timerFinish();
    setSecondsLeft(newSecondsLeft);
  };

  const timerStart = () => {
    if (secondsLeft === 0) return;
    dateStartTimer = Date.now();
    setTimerStarted(true);
    const timer = setInterval(() => changeTimerValue(), 1000);
    setTimerId(timer);
    timerIdForFinish = timer;
  };

  const timerPause = () => {
    setTimerStarted(false);
    secondsDeclaration = secondsLeft;
    clearInterval(timerId);
  };

  const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

  const play = (
    <button type="button" className="icon-play" onClick={timerStart} />
  );
  const pause = (
    <button type="button" className="icon-pause" onClick={timerPause} />
  );
  const button = timerStarted ? pause : play;
  const displayMinutes = formatTime(Math.floor(secondsLeft / 60));
  const displaySeconds = formatTime(secondsLeft % 60);

  return (
    <div>
      {button}
      <span>
        {displayMinutes}:{displaySeconds}
      </span>
    </div>
  );
}

export default Timer;
