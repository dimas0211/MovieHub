import HttpService from '../services/dataService/httpService';
import { getGenresSuccess, getGenresError } from './actionsAPIcall';

import { ERROR404, BASE_URL } from '../constants/configurations';

const targetPath = '/genre';

const getGenres = (movieOrShow = '/movie/list') => (
  async (dispatch) => {
    const userAPI = new HttpService();

    try {
      const response = await userAPI.get(`${BASE_URL}${targetPath}${movieOrShow}`);
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
