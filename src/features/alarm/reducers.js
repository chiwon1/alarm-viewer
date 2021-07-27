import { cloneDeep } from "lodash";
import { ADD_EVENT, DELETE_EVENT } from "./types";
import { events } from '../../mock';

const initialState = {
  // events
  events: [],
};

export default function alarmReducer(state = initialState, action) {
  const newState = cloneDeep(state);

  switch (action.type) {
    case ADD_EVENT: {
      newState.events = [...newState.events, { ...action.payload, id: newState.events.length }];

      return newState;
    }

    case DELETE_EVENT: {
      const newEvents = [...newState.events.slice(0, action.id), ...newState.events.slice(action.id + 1)];

      newState.events = newEvents;

      return newState;
    }

    default:
      return state;
  }
}
