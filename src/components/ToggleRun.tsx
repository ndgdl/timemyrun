import type { Dispatch, SetStateAction } from "react";
import { type Run, runs } from "~/constants/runConstants";

interface ToggleRunProps {
  activeRun: Run;
  setDistance: Dispatch<SetStateAction<Run>>;
}

function ToggleRun({ activeRun, setDistance }: ToggleRunProps) {
  return (
    <div className="grid grid-cols-2 divide-x overflow-hidden rounded-lg border-white bg-slate-200 ">
      {runs.map((run) => (
        <button
          key={run.id}
          onClick={() => setDistance(run)}
          data-active={activeRun.id === run.id}
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