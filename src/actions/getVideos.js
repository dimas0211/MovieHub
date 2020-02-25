import HttpService from '../services/dataService/httpService';
import { getVideosSuccess, getVideosError } from './actionsAPIcall';

import { ERROR404, BASE_URL } from '../constants/configurations';

const videos = '/videos';

const getVideos = (movieId, movieOrShow = '/movie') => (
  async (dispatch) => {
    const userAPI = new HttpService();

    try {
      const response = await userAPI.get(`${BASE_URL}${movieOrShow}/${movieId}${videos}`);
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
