import { SET_LANG, SET_TOKEN , SET_LOGGEDINFreelancer,SET_LOGGEDINBusiness } from "./types";

const INITIAL_STATE = {
  language: true,
  token: "",
  isLoggedinFreelancer: false,
  isLoggedinBusiness:false,
};
const initialReducer = (state = INITIAL_STATE, action) => {
  switch (action?.type) {
    case SET_LANG:
      return { ...state, language: action?.data };
    case SET_TOKEN:
      return { ...state, token: action.data};
      case SET_LOGGEDINFreelancer:
      return{ ...state, isLoggedinFreelancer: action?.data };
      case SET_LOGGEDINBusiness:
        return {...state,isLoggedinBusiness:action?.data}
    default:
      return state;
  }
};

export default initialReducer;