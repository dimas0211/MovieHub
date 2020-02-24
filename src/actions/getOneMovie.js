import HttpService from '../services/dataService/httpService';
import { getOneMovieSuccess, getOneMovieError } from './actionsAPIcall';

import { ERROR404 } from '../constants/configurations';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '3f4df268ddd96ffb4344a1b20d93d24b';

const getOneMovie = (movieId, movieOrShow = '/movie') => (
  async (dispatch) => {
    const userAPI = new HttpService();

    try {
      const response = await userAPI.get(`${baseUrl}${movieOrShow}/${movieId}`, {
        params: {
          api_key: apiKey
        }
      });
      const { statusText, status } = response;

      if (status === ERROR404) {
        return Error(statusText);
      }
      dispatch(getOneMovieSuccess(response));
    } catch (error) {
      dispatch(getOneMovieError(error));
    }
  }
);

export default getOneMovie;
