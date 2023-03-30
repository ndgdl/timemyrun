import { HOUR, MINUTE, SECOND } from "../constants/timeConstants";

function computeTotalTime(time: number) {
  const seconds = Math.floor(time / SECOND) % 60;
  const minutes = Math.floor(time / MINUTE) % 60;
  const hours = Math.floor(time / HOUR) % 60;

  return { hours, minutes, seconds};
}

export default computeTotalTime;
