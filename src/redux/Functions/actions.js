import { SET_LANG, SET_LOGGEDINFreelancer, SET_LOGGEDINBusiness, SET_TOKEN } from "./types";

export const setLang = (data) => {
  return {
    type: SET_LANG,
    data: data,
  };
};

export const setToken = (data) => {
  return {
    type: SET_TOKEN,
    data: data,
  };
};
export const setLoggedInFreelancer = (data) => {
  return {
    type: SET_LOGGEDINFreelancer,
    data: data
  }
}
export const setLoggedInBusiness = (data) => {
  return {
    type: SET_LOGGEDINBusiness,
    data: data
  }
}