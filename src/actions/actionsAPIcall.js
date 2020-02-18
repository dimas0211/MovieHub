import { GET_MOVIES_PENDING, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR } from '../constants/actionTypes';

export const getMoviesPending = () => ({ type: GET_MOVIES_PENDING });

export const getMoviesSuccess = (movies) => ({ type: GET_MOVIES_SUCCESS, movies });

export const getMoviesError = (error) => ({ type: GET_MOVIES_ERROR, error });

