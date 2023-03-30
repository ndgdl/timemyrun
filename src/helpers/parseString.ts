export function stringToPace(pace: string) {
  if (!pace) return 0;
  const splitStringPace = pace.split(":");
  const minutes = Number(splitStringPace[0]);
  const seconds = Number(splitStringPace[1]);

  return minutes * 1000 * 60 + seconds * 1000;
}
