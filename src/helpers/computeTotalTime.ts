interface Props {
  runningSpeedPerKm: number;
  totalDistance: number;
}

const HOUR = 1000 * 60 * 60;
const MINUTE = 1000 * 60;
const SECOND = 1000;

function computeTotalTime({ runningSpeedPerKm, totalDistance }: Props) {
  const durationMs = runningSpeedPerKm * totalDistance;
  const seconds = Math.floor(durationMs / SECOND) % 60;
  const minutes = Math.floor(durationMs / MINUTE) % 60;
  const hours = Math.floor(durationMs / HOUR) % 60;

  return `${hours}:${minutes}:${seconds}`;
}

export default computeTotalTime;
