import { twMerge } from "tailwind-merge";
import type { ComponentPropsWithoutRef } from "react";
import { type SpeedType } from "~/constants/speedConstants";

interface SpeedInputProps extends ComponentPropsWithoutRef<'input'> {
  speed: string | number;
  speedType: SpeedType;
  label: string;
  onClick: () => void;
  className?: string;
}

const INPUT_TYPE: Record<SpeedType, ComponentPropsWithoutRef<'input'>['type']> = {
  pace: 'time',
  speed: 'number'
}

function SpeedInput({ speed, speedType, label, onClick, className, ...rest }: SpeedInputProps) {  
  return (
    <div 
      onClick={() => {
        if (rest.disabled) onClick();
      }}
    >
      <label 
        className={twMerge(
          "text-white flex items-center space-x-2"
        )}
      >
        <input
          type={INPUT_TYPE[speedType]}
          value={speed}
          className={twMerge(
            "cursor-text",
            "h-10 appearance-none px-2 text-slate-700 outline-none",
            "w-20 text-center text-xl rounded-lg bg-white p-2",
            "disabled:bg-slate-500",
            "disabled:cursor-pointer",
            className
          )}
          disabled={rest.disabled}
          {...rest}
        />
      <span>{label}</span>
      </label>
    </div>
  );
}

export default SpeedInput;
