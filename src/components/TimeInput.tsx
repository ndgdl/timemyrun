import { twMerge } from "tailwind-merge";

interface TimeInputProps {
  time: number;
  setTime: (number: number) => void;
  className?: string;
}

function TimeInput({ time, setTime, className }: TimeInputProps) {
  return (
    <input
      type="number"
      maxLength={2}
      value={time}
      className={twMerge(
        "appearance-none  bg-transparent px-2 text-slate-700 outline-none",
        className
      )}
      onChange={(event) => {
        setTime(Number(event.currentTarget.value));
      }}
    />
  );
}

export default TimeInput;
