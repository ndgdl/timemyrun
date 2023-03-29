import type { Dispatch, SetStateAction } from "react";
import { runs } from "~/helpers/runConstants";

interface ToggleRunProps {
  distance: number;
  setDistance: Dispatch<SetStateAction<number>>;
}

function ToggleRun({ distance, setDistance }: ToggleRunProps) {
  return (
    <div className="grid grid-cols-2 divide-x overflow-hidden rounded-lg border-white bg-slate-200 ">
      {runs.map((run) => (
        <button
          key={run.id}
          onClick={() => setDistance(run.distance)}
          data-active={distance === run.distance}
          className="group flex flex-col items-center p-2 opacity-20 data-[active=true]:bg-slate-500 data-[active=true]:text-white data-[active=true]:opacity-100 data-[active=true]:shadow-inner"
        >
          <span>{run.label}</span>
          {run.distanceLabel ? (
            <span className="text-xs text-slate-700 group-data-[active=true]:text-white">
              {run.distanceLabel}
            </span>
          ) : null}
        </button>
      ))}
    </div> 
  )
}

export default ToggleRun;