import { cloneDeep } from "lodash";
import { UPDATE_TIME } from "./types";

const initialState = {
  currentTime: new Date().toISOString(),
};

export default function clockReducer(state = initialState, action) {
  const newState = cloneDeep(state);

  switch (action.type) {
    case UPDATE_TIME: {
      newState.currentTime = new Date().toISOString();

      return newState;
    }

    default:
      return newState;
  }
}
