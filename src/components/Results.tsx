import { type Run } from "~/constants/runConstants";
import { type SpeedType } from "~/constants/speedConstants";
import { HOUR } from "~/constants/timeConstants";
import computeTotalTime from "~/helpers/computeTotalTime";

interface ResultsProps {
  run: Run;
  speedType: SpeedType;
  speed: number;
}

function Results({ run, speedType, speed}: ResultsProps) {
  const { label, distance, distanceLabel} = run;
  const runDescription = distanceLabel ? `the ${label} (${distanceLabel})` : `a ${label}`
  const runTime = speedType === 'pace' ? speed * distance : (distance / speed) * HOUR

  const { hours, minutes, seconds } = computeTotalTime(runTime);

  return (
    <div className="text-xl text-white">
    {`You would run ${runDescription} in ${hours}:${minutes}:${seconds}`}
    </div>
  )
}

export default Results;