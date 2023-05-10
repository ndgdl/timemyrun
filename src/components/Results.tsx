import { type Run } from "~/constants/runConstants";
import { type SpeedType } from "~/constants/speedConstants";
import { HOUR } from "~/constants/timeConstants";
import computeTotalTime from "~/helpers/computeTotalTime";
import { toSpeed } from "~/helpers/convert";
import { formatTwoDigitNumber } from "~/helpers/formatNumberString";

interface ResultsProps {
  run: Run;
  speedType: SpeedType;
  speed: number;
}

function Results({ run, speedType, speed}: ResultsProps) {
  const { label, distance, distanceLabel} = run;
  const runSpeed = speedType === 'speed' ? speed : toSpeed(speed);
  const runTime = (distance / runSpeed) * HOUR;
  
  const { hours, minutes, seconds } = computeTotalTime(runTime);
  
  const hoursInString = formatTwoDigitNumber(hours.toString());
  const minutesInString = formatTwoDigitNumber(minutes.toString());
  const secondsInString = formatTwoDigitNumber(seconds.toString());
  
  const runDescription = distanceLabel ? `the ${label} (${distanceLabel})` : `a ${label}`

  return (
    <div className="text-xl text-white">
    {`You would run ${runDescription} in ${hoursInString}:${minutesInString}:${secondsInString}`}
    </div>
  )
}

export default Results;