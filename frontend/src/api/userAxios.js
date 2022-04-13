import axios from "axios";
import {loginUrl, singupUrl} from "./urls/urls";


export const postSignup = (name,password) => {
    return axios.post(singupUrl, {
        name: name,
        password: password
    })
    .then((response) => {
        console.log(response);
    })
}

export const postLogin = (params) => {
    return axios.post(loginUrl, params)
    .then((response) => {
        return response;
    })
}


