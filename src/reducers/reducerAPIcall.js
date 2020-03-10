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
  GET_VIDEOS_ERROR,
  SET_ONE_MOVIE_ID,
  GET_NEW_MOVIES_SUCCESS,
  GET_NEW_MOVIES_ERROR,
  GET_POPULAR_MOVIES_SUCCESS,
  GET_POPULAR_MOVIES_ERROR
} from '../constants/actionTypes/index';
import { MovieListModel, GenresModel, MovieModel, VideosModel } from '../models';
import { routingConfig } from '../config/routingConfig';

const initialState = {
  rending: false,
  movies: [],
  moviesPages: null,
  genresList: new GenresModel(),
  error: null,
  movieListInfo: new MovieListModel(),
  newMovies: new MovieListModel(),
  popularMovies: new MovieListModel(),
  movie: new MovieModel(),
  videos: new VideosModel(),
  movieOrShow: routingConfig.moviePath
};

export const ApiReducer = (state = initialState, {
  type,
  movieListResponse,
  newMovieListResponse,
  popularMovieListResponse,
  genresResponse,
  moveResponse,
  videosResponse,
  error,
  movieOrShow
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
    case SET_ONE_MOVIE_ID:
      return {
        ...state,
        movieOrShow
      };
    case GET_NEW_MOVIES_SUCCESS:
      return {
        ...state,
        pending: false,
        newMovies: new MovieListModel(newMovieListResponse)
      };
    case GET_NEW_MOVIES_ERROR:
      return {
        ...state,
        pending: false,
        error
      };
    case GET_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        pending: false,
        popularMovies: new MovieListModel(popularMovieListResponse)
      };
    case GET_POPULAR_MOVIES_ERROR:
      return {
        ...state,
        pending: false,
        error
      };
    default:
      return state;
  }
};
