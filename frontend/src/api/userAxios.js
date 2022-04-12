import axios from "axios";
import {loginUrl, singupUrl} from "./urls/urls";


export const postSignup = (params) => {
    console.log(params);
    return axios.post(singupUrl, params)
    .then((response) => {
        console.log(response.data);
    })
}

export const postLogin = (params) => {
    return axios.post(loginUrl, {
        params
    })
    .then((response) => {
        console.log(response.data);
    })
}


