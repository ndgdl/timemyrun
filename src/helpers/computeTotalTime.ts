import { HOUR, MINUTE, SECOND } from "./timeConstants";

interface Props {
  runningSpeedPerKm: number;
  totalDistance: number;
}

function computeTotalTime({ runningSpeedPerKm, totalDistance }: Props) {
  const durationMs = runningSpeedPerKm * totalDistance;
  const seconds = Math.floor(durationMs / SECOND) % 60;
  const minutes = Math.floor(durationMs / MINUTE) % 60;
  const hours = Math.floor(durationMs / HOUR) % 60;

  return { hours, minutes, seconds};
}

export default computeTotalTime;
