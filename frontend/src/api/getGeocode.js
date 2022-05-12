import axios from "axios";
import { getGeocodeUrl } from "./urls/urls";

export const getGeocode = (params) => {
  return axios
    .post(getGeocodeUrl, params, {
      withCredentials: true,
    })
    .then((response) => {
      return response;
    })
    .catch((response) => {
      return response;
    });
};
