function parseTimeString(time: string) {
  const splitStringTime = time.split(":");
  const minutes = Number(splitStringTime[0]);
  const seconds = Number(splitStringTime[1]);

  return minutes * 1000 * 60 + seconds * 1000;
}

export default parseTimeString;