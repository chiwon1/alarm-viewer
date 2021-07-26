import { cloneDeep } from "lodash";
import { ADD_EVENT } from "./types";

const initialState = {
  events: [],
};

export default function alarmReducer(state = initialState, action) {
  const newState = cloneDeep(state);

  switch (action.type) {
    case ADD_EVENT: {
      newState.events = [...newState.events, { ...action.payload, id: newState.events.length }];

      return newState;
    }

    default:
      return state;
  }
}
