import axios from 'axios/index';

const successHandler = (response) => response.data;
const errorHandler = (error) => {
  console.log(error);

  return error;
};
const defaultConfig = {
  headers: {
    'X-Custom-Header': 'foobar'
  }
};

export const createHttpHandler = (handler, onSuccess = successHandler, onError = errorHandler) => handler.then(onSuccess).catch(onError);

export default class HttpService {
  constructor(config = defaultConfig) {
    this.config = config;
  }

  get(url, config) {
    return createHttpHandler(axios.get(url, config));
  }

  put(url, data, config) {
    return createHttpHandler(axios.put(url, data, config));
  }

  post(url, data, config) {
    return createHttpHandler(axios.post(url, data, config));
  }

  delete(url, config) {
    return createHttpHandler(axios.delete(url, config));
  }
}