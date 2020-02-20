import {
  GET_MOVIES_PENDING, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR, GET_GENRES_PENDING, GET_GENRES_SUCCESS, GET_GENRES_ERROR
} from '../constants/actionTypes';

export const getMoviesPending = () => ({ type: GET_MOVIES_PENDING });

export const getMoviesSuccess = (movies, pagesCount) => ({ type: GET_MOVIES_SUCCESS, movies, pagesCount });

export const getMoviesError = (error) => ({ type: GET_MOVIES_ERROR, error });

export const getGenresPending = () => ({ type: GET_GENRES_PENDING });

export const getGenresSuccess = (genres) => ({ type: GET_GENRES_SUCCESS, genres });

export const getGenresError = (error) => ({ type: GET_GENRES_ERROR, error });
