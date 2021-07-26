import { DAY_LIST } from "../../features/constants";

export function getDay(time) {
  const date = new Date(time);

  return DAY_LIST[date.getDay()];
}

export function getLocalTime(time) {
  const date = new Date(time);

  return date.toLocaleString();
}

// export async function fetchMockData() {
//   const res = await fetch("../../../mock.json");
//   console.log('res', res);

//   const data = await res.json();

//   return data;
// }
