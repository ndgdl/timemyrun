import { twMerge } from "tailwind-merge";

interface TimeInputProps {
  setTime: (number: number) => void;
  className?: string;
}

function TimeInput({ setTime, className }: TimeInputProps) {
  return (
    <input
      type="text"
      maxLength={2}
      className={twMerge(
        "appearance-none bg-transparent px-2 text-slate-700 outline-none",
        className
      )}
      onKeyDown={(event) => {
        if (isNaN(Number(event.key)) && event.code !== "Backspace")
          event.preventDefault();
      }}
      onKeyUp={(event) => {
        let value;
        value = Number(event.currentTarget.value);
        if (event.currentTarget.value === "") value = 0;
        setTime(value);
      }}
    />
  );
}

export default TimeInput;
