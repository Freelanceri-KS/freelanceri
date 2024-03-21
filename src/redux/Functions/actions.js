import { SET_LANG, SET_TOKEN } from "./types";

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