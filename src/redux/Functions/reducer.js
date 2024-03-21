import { SET_LANG, SET_TOKEN } from "./types";

const INITIAL_STATE = {
  language: true,
  token: "",
  isLoggedin: false
};
const initialReducer = (state = INITIAL_STATE, action) => {
  switch (action?.type) {
    case SET_LANG:
      return { ...state, language: action?.data };
    case SET_TOKEN:
      return { ...state, token: action.data, isLoggedin: true };
    default:
      return state;
  }
};
export default initialReducer;