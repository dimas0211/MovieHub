import { GET_MOVIES_PENDING, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR } from '../constants/actionTypes';

const initialState = {
  rending: false,
  movies: [],
  error: null
};

export const moviesReducer = (state = initialState, { type, movies, error }) => {
  switch (type) {
    case GET_MOVIES_PENDING:
      return {
        ...state,
        pending: true
      };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        pending: false,
        movies
      };
    case GET_MOVIES_ERROR:
      return {
        ...state,
        pending: false,
        error
      };
    default:
      return state;
  }
};

export const getMovies = (state) => state.movies;
export const getMoviesPending = (state) => state.pending;
export const getMoviesError = (state) => state.error;
