import HttpService from '../services/dataService/httpService';
import { getMoviesSuccess, getMoviesError } from './actionsAPIcall';

import { ERROR404, BASE_URL } from '../constants/configurations';

const targetPath = '/discover';

const getMovies = (page = 1, movieOrShow = '/movie', ...otherParams) => (
  async (dispatch) => {
    const userAPI = new HttpService();
    const parsedParams = otherParams.reduce((acc, el) => ({ ...acc, ...el }), {});

    try {
      const response = await userAPI.get(`${BASE_URL}${targetPath}${movieOrShow}`, {
        params: {
          page,
          ...parsedParams
        }
      });
      const { statusText, status } = response;

      if (status === ERROR404) {
        return Error(statusText);
      }
      dispatch(getMoviesSuccess(response));
    } catch (error) {
      dispatch(getMoviesError(error));
    }
  }
);

export default getMovies;
