import HttpService from '../services/dataService/httpService';
import { getOneMovieSuccess, getOneMovieError } from './actionsAPIcall';

import { ERROR404, BASE_URL } from '../constants/configurations';

const getOneMovie = (movieId, movieOrShow = '/movie') => (
  async (dispatch) => {
    const userAPI = new HttpService();

    try {
      const response = await userAPI.get(`${BASE_URL}${movieOrShow}/${movieId}`);
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
