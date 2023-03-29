import { twMerge } from "tailwind-merge";
import { SPEED_SETTINGS, HOUR, MINUTE } from "~/helpers/timeConstants";
import type { SpeedSetting } from "~/helpers/timeConstants";
import type { Dispatch, SetStateAction } from "react";

interface ToggleSpeedSettingProps {
  time: number;
  setTime: Dispatch<SetStateAction<number>>;
  speedSetting: SpeedSetting;
  setSpeedSetting: Dispatch<SetStateAction<SpeedSetting>>;
  className?: string;
}

function ToggleSpeedSetting({ time, setTime, speedSetting, setSpeedSetting, className }: ToggleSpeedSettingProps) {

  return (
    <div className={className}>
      <label className="relative inline-flex items-center cursor-pointer">
        <input 
          type="checkbox"
          className="sr-only peer"
          value={speedSetting.id}
          onChange={() => {
            const nonActiveTimeSetting = SPEED_SETTINGS.find((otherTimeSetting) => otherTimeSetting.id !== speedSetting.id)
            if (nonActiveTimeSetting === undefined) return;

            // TODO: fix this mess
            let newTime = Math.floor((HOUR / time) * 100) / 100
            if (newTime <= 100) newTime = newTime * MINUTE
            setTime(newTime)
            setSpeedSetting(nonActiveTimeSetting)
          }
          }  />
        <div 
          className={twMerge(
            'w-28 h-6 rounded-full bg-slate-300',
            'flex items-center justify-center',
            'after:absolute after:top-[2px] after:left-[2px]',
            'after:h-5 after:w-5 after:rounded-full after:bg-white after:border after:border-slate-300 after:transition-all',
            'peer-checked:after:translate-x-[calc(7rem-_100%_-_5px)] peer-checked:bg-blue-600 peer-checked:text-white',
            'peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300'
            )
          }
        >
          {speedSetting.label}
        </div>
      </label>
    </div>
  )
}

export default ToggleSpeedSetting;