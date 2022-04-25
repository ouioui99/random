import axios from "axios";
import {getRestrauntUrl} from "./urls/urls";

export const getRestraunt = (params) => {
    return axios.post(getRestrauntUrl, params, {
        withCredentials: true
    })
    .then((response) => {
        return response;
    }).catch((response) => {
        return response;
    })
}