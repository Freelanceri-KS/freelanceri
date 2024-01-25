import {  SET_LANG } from "./types";


export const setLang = (data) => {
    return {
        type: SET_LANG,
        data: data
    }
}