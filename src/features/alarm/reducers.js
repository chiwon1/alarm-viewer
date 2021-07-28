import { cloneDeep, uniqueId } from "lodash";
import { ADD_ALARM, SAVE_LATEST_ALARM, DELETE_ALARM, TOGGLE_ALARM_ACTIVATION } from "./types";

const initialState = {
  events: [],
  latestEvent: {}
};

export default function alarmReducer(state = initialState, action) {
  const newState = cloneDeep(state);

  switch (action.type) {
    case ADD_ALARM: {
      newState.events = [...newState.events, { ...action.payload, id: uniqueId() }];

      return newState;
    }

    case SAVE_LATEST_ALARM: {
      const eventToBeDeleted = newState.events.filter(event => event.id === action.id);

      newState.latestEvent = eventToBeDeleted[0];

      return newState;
    }

    case DELETE_ALARM: {
      const newEvents = newState.events.filter(event => event.id !== action.id);

      newState.events = newEvents;

      return newState;
    }

    case TOGGLE_ALARM_ACTIVATION: {
      const eventToToggleActivation = newState.events.filter(event => event.id === action.id);

      eventToToggleActivation[0].isActivated = !eventToToggleActivation[0].isActivated;

      const restEvents = newState.events.filter(event => event.id !== action.id);

      newState.events = [ ...restEvents, ...eventToToggleActivation ];

      return newState;
    }

    default:
      return newState;
  }
}
