import HttpService from '../services/dataService/httpService';
import { getMoviesSuccess, getMoviesError } from './actionsAPIcall';
import {
  SET_SEARCH_MODE,
  CLEAR_SEARCH_MODE,
  SET_SEARCH_QUERY,
  CLEAR_SEARCH_QUERY
} from '../constants/actionTypes';

import { ERROR404, BASE_URL } from '../constants/configurations';

export const setSearchMode = () => ({ type: SET_SEARCH_MODE });

export const clearSearchMode = () => ({ type: CLEAR_SEARCH_MODE });

export const setSearchQueryAction = (query) => ({ type: SET_SEARCH_QUERY, query });

export const clearSearchAction = () => ({ type: CLEAR_SEARCH_QUERY });

export const setSearchQuery = (query) => (dispatch) => dispatch(setSearchQueryAction(query));

export const clearSearchQuery = () => (dispatch) => dispatch(clearSearchAction());

const targetPath = '/search';

export const searchMovies = (page = 1, movieOrShow = '/movie', query) => (
  async (dispatch) => {
    const userAPI = new HttpService();
    // const parsedParams = searchParams.reduce((acc, el) => ({ ...acc, ...el }), {});

    try {
      const response = await userAPI.get(`${BASE_URL}${targetPath}${movieOrShow}`, {
        params: {
          page,
          query
        }
      });
      const { statusText, status } = response;

      if (status === ERROR404) {
        return Error(statusText);
      }
      dispatch(
        getMoviesSuccess(response)
      );
    } catch (error) {
      dispatch(getMoviesError(error));
    }
  }
);
