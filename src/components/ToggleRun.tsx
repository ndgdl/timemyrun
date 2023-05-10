import { twMerge } from "tailwind-merge";
import { RUN_OPTIONS, type Run } from "~/constants/runConstants";

interface ToggleRunProps {
  activeRun: Run;
  setDistance: (run: Run) => void;
}

function ToggleRun({ activeRun, setDistance }: ToggleRunProps) {
  const isActiveRun = (runId: string) => runId === activeRun.id;

  return (
    <div className={twMerge("grid grid-cols-5 space-x-3")}>
      {RUN_OPTIONS.map((run) => (
        <div
          key={run.id}
          data-active={isActiveRun(run.id)}
          className={twMerge(
            "flex flex-col items-center justify-start",
            "rounded-md bg-white p-2 font-semibold",
            "group",
            "transition-transform delay-75 ease-in-out",
            "hover:scale-105",
            "cursor-pointer data-[active=true]:cursor-default",
            "data-[active=true]:scale-95 data-[active=true]:bg-opacity-50 data-[active=true]:text-white"
          )}
          onClick={() => setDistance(run)}
        >
          {run.label}
          <span className="text-xs text-slate-500 group-data-[active=true]:text-white">
            {run.distanceLabel}
          </span>
        </div>
      ))}
    </div>
  );
}

export default ToggleRun;
