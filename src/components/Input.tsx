interface TimeInputProps {
  setTime: (number: number) => void;
  className?: string;
}

function TimeInput({ setTime }: TimeInputProps) {
  return (
    <input
      type="text"
      className="appearance-none bg-transparent px-2 text-slate-700 outline-none"
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
