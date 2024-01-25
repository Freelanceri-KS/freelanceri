import { SET_LANG } from "./types";

const INITIAL_STATE = {
    language: true
};
const initialReducer = (state = INITIAL_STATE, action) => {
    switch (action?.type) {
        case SET_LANG:
            return { ...state, language: action?.data }
        default: return state;
    }
}
export default initialReducer;