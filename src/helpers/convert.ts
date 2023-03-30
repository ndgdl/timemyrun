import { HOUR } from "../constants/timeConstants";

export function toSpeed(pace: number) {
  return Math.round((HOUR / pace) * 100) / 100;
}

export function toPace(speed: number) {
  return Math.round(HOUR / speed);
}