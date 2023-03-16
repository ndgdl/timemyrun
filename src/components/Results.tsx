import { DISTANCE_MARATHON } from "~/helpers/distanceConstants";
import formatTimeString from "~/helpers/formatTimeString";

interface ResultsProps {
  distance: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function Results({ distance, hours, minutes, seconds}: ResultsProps) {

  return (
    <div className="text-xl text-white">
    You would run the{" "}
    {distance === DISTANCE_MARATHON ? "marathon" : "semi-marathon"} in{" "}
    { `${formatTimeString(hours)}:${formatTimeString(minutes)}:${formatTimeString(seconds)}` }
    </div>
  )
}

export default Results;