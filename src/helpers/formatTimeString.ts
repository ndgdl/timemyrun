function formatTimeString(time: number) {
  let formattedTime = time.toString();
  if (formattedTime.split("").length === 1) formattedTime = "0" + formattedTime;
  return formattedTime;
}

export default formatTimeString;