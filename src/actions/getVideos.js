import HttpService from '../services/dataService/httpService';
import { getVideosSuccess, getVideosError } from './actionsAPIcall';

import { ERROR404 } from '../constants/configurations';

const baseUrl = 'https://api.themoviedb.org/3';
const videos = '/videos';
const apiKey = '3f4df268ddd96ffb4344a1b20d93d24b';

const getVideos = (movieId, movieOrShow = '/movie') => (
  async (dispatch) => {
    const userAPI = new HttpService();

    try {
      const response = await userAPI.get(`${baseUrl}${movieOrShow}/${movieId}${videos}`, {
        params: {
          api_key: apiKey
        }
      });
      const { statusText, status } = response;

      if (status === ERROR404) {
        return Error(statusText);
      }
      dispatch(getVideosSuccess(response));
    } catch (error) {
      dispatch(getVideosError(error));
    }
  }
);

export default getVideos;
