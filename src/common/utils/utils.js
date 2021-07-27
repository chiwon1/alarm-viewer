import { DAY_LIST } from "../../features/constants";

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
