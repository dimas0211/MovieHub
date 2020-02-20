import {
  GET_MOVIES_PENDING, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR, GET_GENRES_PENDING, GET_GENRES_SUCCESS, GET_GENRES_ERROR
} from '../constants/actionTypes';

const initialState = {
  rending: false,
  movies: [],
  moviesPages: null,
  genres: [],
  error: null
};

export const ApiReducer = (state = initialState, {
  type, movies, genres, error, pagesCount
}) => {
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
        movies: [...movies],
        moviesPages: pagesCount
      };
    case GET_MOVIES_ERROR:
      return {
        ...state,
        pending: false,
        error
      };
    case GET_GENRES_PENDING:
      return {
        ...state,
        pending: true
      };
    case GET_GENRES_SUCCESS:
      return {
        ...state,
        pending: false,
        genres: [...genres]
      };
    case GET_GENRES_ERROR:
      return {
        ...state,
        pending: false,
        error
      };
    default:
      return state;
  }
};
