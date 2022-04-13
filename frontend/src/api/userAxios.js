import axios from "axios";
import {loginUrl, singupUrl} from "./urls/urls";


export const postSignup = (params) => {
    return axios.post(singupUrl, params)
    .then((response) => {
        return response;
    })
}

export const postLogin = (params) => {
    return axios.post(loginUrl, params)
    .then((response) => {
        return response;
    })
}


