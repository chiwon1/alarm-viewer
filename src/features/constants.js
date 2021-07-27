export const TIME_UPDATE_INTERVAL = 1000;

export const CURRENT_TIME_MESSAGE = "Current time";

export const DAY_LIST = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export const NORMAL = "Normal";

export const URGENT = "Urgent";

export const VIBRATION = "Vibration";

export const NIGHT = "Night";

export const ALERT_MESSAGE_SOUND = "Sound";

export const ALERT_MESSAGE_VIBRATION = "Vibration";

export const alarmModeMap = {
  [NORMAL]: {
    [NORMAL]: ALERT_MESSAGE_SOUND,
    [URGENT]: ALERT_MESSAGE_SOUND,
  },
  [VIBRATION]: {
    [NORMAL]: ALERT_MESSAGE_VIBRATION,
    [URGENT]: ALERT_MESSAGE_VIBRATION,
  },
  [NIGHT]: {
    [NORMAL]: null,
    [URGENT]: ALERT_MESSAGE_SOUND,
  }
};
