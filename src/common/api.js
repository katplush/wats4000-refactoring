import axios from 'axios';


export const API = axios.create({
  baseURL: `//api.openweathermap.org/data/2.5/`
})
API.interceptors.request.use(function (config) {
    config.params.APPID = '929563d37fd0452ebae9f421022a2a3d';
    config.params.units = 'imperial';
    return config;
  }, function (error) {
    return Promise.reject(error);
  });