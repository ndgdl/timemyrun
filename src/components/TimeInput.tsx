import { twMerge } from "tailwind-merge";

interface TimeInputProps {
  time: number;
  setTime: (number: number) => void;
  className?: string;
}

const MINUTE = 1000 * 60;
const SECOND = 1000;

function parseTime(time: string) {
  const splitStringTime = time.split(":");
  const minutes = Number(splitStringTime[0]);
  const seconds = Number(splitStringTime[1]);

  return minutes * 1000 * 60 + seconds * 1000;
}

function convertTime(time: number) {
  const minutes = Math.floor(time / MINUTE) % 60;
  const seconds = Math.floor(time / SECOND) % 60;

  return `${formatTimeFormat(minutes)}:${formatTimeFormat(seconds)}`;
}

function formatTimeFormat(time: number) {
  let formattedTime = time.toString();
  if (formattedTime.split("").length === 1) formattedTime = "0" + formattedTime;
  return formattedTime;
}

function TimeInput({ time, setTime, className }: TimeInputProps) {
  return (
    <input
      type="time"
      min="00:00"
      max="10:00"
      value={convertTime(time)}
      className={twMerge(
        "appearance-none  bg-transparent px-2 text-slate-700 outline-none",
        className
      )}
      onChange={(event) => {
        const time = event.currentTarget.value;
        setTime(Number(parseTime(time)));
      }}
    />
  );
}

export default TimeInput;
