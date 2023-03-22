import { twMerge } from "tailwind-merge";
import convertTimeToString from "~/helpers/convertTimeToString";
import parseTimeString from "~/helpers/parseTimeString";

interface TimeInputProps {
  time: number;
  setTime: (number: number) => void;
  className?: string;
}

function TimeInput({ time, setTime, className }: TimeInputProps) {
  return (
    <div className="relative">
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
      <label htmlFor="run-time" className="absolute -right-1/2 top-1/2 -translate-y-1/2 text-white"> / km</label>
    </div>
  );
}

export default TimeInput;
