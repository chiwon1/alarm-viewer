export const TIME_UPDATE_INTERVAL = 1000;
export const DAY_LIST = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export const CURRENT_TIME = "Current time";
export const CLOCK_MODE = "Clock mode";
export const NORMAL = "Normal";
export const URGENT = "Urgent";
export const VIBRATION = "Vibration";
export const NIGHT = "Night";

export const ALARM_ADD = "Alarm add";
export const TIME = "Time";
export const ALARM_MODE = "Alarm mode";
export const NOTE = "Note";
export const SAVE = "Save";
export const DELETE = "Delete";
export const TURN_OFF = "Turn off";
export const TURN_ON = "Turn on";
export const OFF = "Off";
export const ON = "On";

export const ALARM_LIST = "Alarm list";

export const MESSAGE = "Message";

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
