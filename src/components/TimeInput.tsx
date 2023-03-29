import { twMerge } from "tailwind-merge";
import convertTimeToString from "~/helpers/convertTimeToString";
import parseTimeString from "~/helpers/parseTimeString";
import type { Dispatch, SetStateAction } from "react";

interface TimeInputProps {
  time: number;
  setTime: Dispatch<SetStateAction<number>>;
  className?: string;
}

function TimeInput({ time, setTime, className }: TimeInputProps) {
  return (
    <input
      id="run-time"
      type="time"
      min="00:00"
      max="10:00"
      value={convertTimeToString(time)}
      className={twMerge(
        "appearance-none  bg-transparent px-2 text-slate-700 outline-none",
        className
      )}
      onChange={(event) => {
        const timeString = event.currentTarget.value;
        const parsedTime = Number(parseTimeString(timeString));
        !isNaN(parsedTime) ? setTime(parsedTime) : setTime(0)
      }}
    />
  );
}

export default TimeInput;
