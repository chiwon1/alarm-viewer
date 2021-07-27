import { cloneDeep } from "lodash";
import { ADD_ALARM, DELETE_ALARM } from "./types";
import { events } from '../../mock';

const initialState = {
  // events
  events: [],
};

export default function alarmReducer(state = initialState, action) {
  const newState = cloneDeep(state);

  switch (action.type) {
    case ADD_ALARM: {
      newState.events = [...newState.events, { ...action.payload, id: newState.events.length }];

      return newState;
    }

    case DELETE_ALARM: {
      const newEvents = [...newState.events.slice(0, action.id), ...newState.events.slice(action.id + 1)];

      newState.events = newEvents;

      return newState;
    }

    default:
      return state;
  }
}
