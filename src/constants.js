export const TIME_UPDATE_INTERVAL = 1000;

export const HEADING_CONSTANTS = {
  CURRENT_TIME: "Current time",
  ALARM_ADD: "Alarm add",
  ALARM_LIST: "Alarm list",
  MESSAGE: "Message"
};

export const LABEL_CONSTANTS = {
  CLOCK_MODE: "Clock mode",
  TIME: "Time",
  ALARM_MODE: "Alarm mode",
  NOTE: "Note"
};

export const BUTTON_CONSTANTS = {
  SAVE: "Save",
  DELETE: "Delete",
  TURN_OFF: "Turn off",
  TURN_ON: "Turn on",
};

export const ON = "On";
export const OFF = "Off";

export const CLOCK_MODE_CONSTANTS = {
  NORMAL: "Normal",
  VIBRATION: "Vibration",
  NIGHT: "Night",
};

export const ALARM_MODE_CONSTANTS = {
  NORMAL: "Normal",
  URGENT: "Urgent"
};
export const ALERT_TYPE_CONSTANTS = {
  SOUND: "Sound",
  VIBRATION: "Vibration",
};

export const alarmModeMap = {
  [CLOCK_MODE_CONSTANTS.NORMAL]: {
    [ALARM_MODE_CONSTANTS.NORMAL]: ALERT_TYPE_CONSTANTS.SOUND,
    [ALARM_MODE_CONSTANTS.URGENT]: ALERT_TYPE_CONSTANTS.SOUND,
  },
  [CLOCK_MODE_CONSTANTS.VIBRATION]: {
    [ALARM_MODE_CONSTANTS.NORMAL]: ALERT_TYPE_CONSTANTS.VIBRATION,
    [ALARM_MODE_CONSTANTS.URGENT]: ALERT_TYPE_CONSTANTS.VIBRATION,
  },
  [CLOCK_MODE_CONSTANTS.NIGHT]: {
    [ALARM_MODE_CONSTANTS.NORMAL]: null,
    [ALARM_MODE_CONSTANTS.URGENT]: ALERT_TYPE_CONSTANTS.SOUND,
  }
};
