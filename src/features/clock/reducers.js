import { cloneDeep } from "lodash";
import { NORMAL } from "../constants";
import { CHANGE_CLOCK_MODE, UPDATE_TIME } from "./types";

const initialState = {
  currentTime: new Date().toISOString(),
  mode: NORMAL
};

export default function clockReducer(state = initialState, action) {
  const newState = cloneDeep(state);

  switch (action.type) {
    case UPDATE_TIME: {
      newState.currentTime = new Date().toISOString();

      return newState;
    }

    case CHANGE_CLOCK_MODE: {
      newState.mode = action.payload;

      return newState;
    }

    default:
      return newState;
  }
}
