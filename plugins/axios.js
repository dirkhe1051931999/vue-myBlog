import * as axios from 'axios';
export default () => {
  // The server-side needs a full url to works
  axios.defaults.baseURL = 'http://127.0.0.1:9001/blogapi';
  // axios.defaults.timeout = 5000;
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  // axios.defaults.headers['Content-Type'] =
  //   'application/x-www-form-urlencoded;charset=UTF-8';
  // interceptors request
  axios.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      return Promise.reject(err);
    }
  );
};