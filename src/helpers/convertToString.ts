import formatNumberString from "./formatNumberString";
import { MINUTE, SECOND } from "../constants/timeConstants";

export function paceToString(pace: number) {
  if (isNaN(pace)) return formatNumberString('00', '00');
  const minutesString = (Math.floor(pace / MINUTE) % 60).toString();
  const secondsString = (Math.floor(pace / SECOND) % 60).toString();

  return formatNumberString(minutesString, secondsString);
}
