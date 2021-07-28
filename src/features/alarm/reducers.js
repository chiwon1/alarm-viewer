import { cloneDeep, uniqueId } from "lodash";
import { ADD_ALARM, DELETE_ALARM, TOGGLE_ALARM_ACTIVATION } from "./types";

const initialState = {
  events: [],
  latestEventDetails: {}
};

export default function alarmReducer(state = initialState, action) {
  const newState = cloneDeep(state);

  switch (action.type) {
    case ADD_ALARM: {
      newState.events = [...newState.events, { ...action.payload, id: uniqueId() }];

      return newState;
    }

    case DELETE_ALARM: {
      const eventToBeDeleted = newState.events.filter(event => event.id === action.id);

      newState.latestEventDetails = eventToBeDeleted[0];

      const newEvents = newState.events.filter(event => event.id !== action.id);

      newState.events = newEvents;

      return newState;
    }

    case TOGGLE_ALARM_ACTIVATION: {
      const newEvent = newState.events[action.id];

      newEvent.isActivated = !newEvent.isActivated;

      newState.events[action.id] = newEvent;

      return newState;
    }

    default:
      return state;
  }
}
