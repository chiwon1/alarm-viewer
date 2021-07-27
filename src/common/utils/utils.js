import { alarmModeMap, DAY_LIST } from "../../features/constants";

export function getDay(time) {
  const date = new Date(time);

  return DAY_LIST[date.getDay()];
}

export function getLocalTime(time) {
  const date = new Date(time);

  return date.toLocaleString();
}

export function isEqualTime(baseDate, targetDate) {
  return new Date(baseDate).toLocaleString() === new Date(targetDate).toLocaleString();
}

export function alertAlarm(currentTime, clockMode, events) {
  const eventsToAlert = events.filter(event => isEqualTime(currentTime, event.time));

  if (eventsToAlert.length === 0) return;

  eventsToAlert.forEach(event => {
    const alarmType = alarmModeMap[clockMode][event.mode];

    // if (alarmType !== null) alert(alarmType);
    if (alarmType !== null) console.log(alarmType);

    // removeAlarm();
  });
}
