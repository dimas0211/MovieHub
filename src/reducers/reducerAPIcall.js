import {
  GET_MOVIES_PENDING,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  GET_GENRES_PENDING,
  GET_GENRES_SUCCESS,
  GET_GENRES_ERROR,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_ERROR,
  GET_VIDEOS_SUCCESS,
  GET_VIDEOS_ERROR
} from '../constants/actionTypes/index';
import { MovieListModel, GenresModel, MovieModel, VideosModel } from '../models';

const initialState = {
  rending: false,
  movies: [],
  moviesPages: null,
  genresList: new GenresModel(),
  error: null,
  movieListInfo: new MovieListModel(),
  movie: new MovieModel(),
  videos: new VideosModel()
};

export const ApiReducer = (state = initialState, {
  type,
  movieListResponse,
  genresResponse,
  moveResponse,
  videosResponse,
  error
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
        movieListInfo: new MovieListModel(movieListResponse)
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
        genresList: new GenresModel(genresResponse)
      };
    case GET_GENRES_ERROR:
      return {
        ...state,
        pending: false,
        error
      };
    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        pending: false,
        movie: new MovieModel(moveResponse)
      };
    case GET_MOVIE_ERROR:
      return {
        ...state,
        pending: false,
        error
      };
    case GET_VIDEOS_SUCCESS:
      return {
        ...state,
        pending: false,
        videos: new VideosModel(videosResponse)
      };
    case GET_VIDEOS_ERROR:
      return {
        ...state,
        pending: false,
        error
      };
    default:
      return state;
  }
};
