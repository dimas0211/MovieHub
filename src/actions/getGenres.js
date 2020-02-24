import HttpService from '../services/dataService/httpService';
import { getGenresSuccess, getGenresError } from './actionsAPIcall';

import { ERROR404 } from '../constants/configurations';

const baseUrl = 'https://api.themoviedb.org/3';
const targetPath = '/genre';
const apiKey = '3f4df268ddd96ffb4344a1b20d93d24b';

const getGenres = (movieOrShow = '/movie/list') => (
  async (dispatch) => {
    const userAPI = new HttpService();

    try {
      const response = await userAPI.get(`${baseUrl}${targetPath}${movieOrShow}`, {
        params: {
          api_key: apiKey
        }
      });
      const { statusText, status } = response;

      if (status === ERROR404) {
        return Error(statusText);
      }
      dispatch(getGenresSuccess(response));
    } catch (error) {
      dispatch(getGenresError(error));
    }
  }
);

export default getGenres;
