import { cloneDeep } from "lodash";
import { ADD_ALARM, DELETE_ALARM, TOGGLE_ALARM_ACTIVATION } from "./types";
import { events } from '../../mock';

const initialState = {
  // events,
  events: [],
  latestEventDetails: {}
};

export default function alarmReducer(state = initialState, action) {
  const newState = cloneDeep(state);

  switch (action.type) {
    case ADD_ALARM: {
      newState.events = [
        ...newState.events,
        { ...action.payload, id: newState.events.length }
      ];

      return newState;
    }

    case DELETE_ALARM: {
      newState.latestEventDetails = newState.events[action.id];

      const newEvents = [
        ...newState.events.slice(0, action.id),
        ...newState.events.slice(action.id + 1)
      ];

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
