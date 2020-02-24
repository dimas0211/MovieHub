import HttpService from '../services/dataService/httpService';
import { getMoviesSuccess, getMoviesError } from './actionsAPIcall';

import { ERROR404 } from '../constants/configurations';

const baseUrl = 'https://api.themoviedb.org/3';
const targetPath = '/discover';
const apiKey = '3f4df268ddd96ffb4344a1b20d93d24b';

const getMovies = (page = 1, movieOrShow = '/movie', ...otherParams) => (
  async (dispatch) => {
    const userAPI = new HttpService();
    const parsedParams = otherParams.reduce((acc, el) => ({ ...acc, ...el }), {});

    try {
      const response = await userAPI.get(`${baseUrl}${targetPath}${movieOrShow}`, {
        params: {
          api_key: apiKey,
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
