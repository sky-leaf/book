import axios from "@/plugin/axios";
import config from "@/config";

const perfix = "/book";

export const getBooksList = params => {
  return axios
    .post(`${config.apiUrl}${perfix}/hot`, params)
    .then(res => res.data);
};
