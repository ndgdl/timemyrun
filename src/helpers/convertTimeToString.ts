import formatTimeString from "./formatTimeString";
import { MINUTE, SECOND } from "./timeConstants";

function convertTimeToString(time: number) {
  const minutes = Math.floor(time / MINUTE) % 60;
  const seconds = Math.floor(time / SECOND) % 60;

  return `${formatTimeString(minutes)}:${formatTimeString(seconds)}`;
}

export default convertTimeToString;