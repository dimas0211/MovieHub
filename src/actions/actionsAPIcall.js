import {
  GET_MOVIES_PENDING,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  GET_GENRES_PENDING,
  GET_GENRES_SUCCESS,
  GET_GENRES_ERROR,
  GET_MOVIE_PENDING,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_ERROR,
  GET_VIDEOS_SUCCESS,
  GET_VIDEOS_ERROR,
  SET_ONE_MOVIE_ID,
  GET_NEW_MOVIES_SUCCESS,
  GET_NEW_MOVIES_ERROR,
  GET_POPULAR_MOVIES_SUCCESS,
  GET_POPULAR_MOVIES_ERROR
} from '../constants/actionTypes';

export const getMoviesPending = () => ({ type: GET_MOVIES_PENDING });

export const getMoviesSuccess = (movieListResponse) => ({ type: GET_MOVIES_SUCCESS, movieListResponse });

export const getMoviesError = (error) => ({ type: GET_MOVIES_ERROR, error });

export const getNewMoviesSuccess = (newMovieListResponse) => ({ type: GET_NEW_MOVIES_SUCCESS, newMovieListResponse });

export const getNewMoviesError = (error) => ({ type: GET_NEW_MOVIES_ERROR, error });

export const getPopularMoviesSuccess = (popularMovieListResponse) => ({ type: GET_POPULAR_MOVIES_SUCCESS, popularMovieListResponse });

export const getPopularMoviesError = (error) => ({ type: GET_POPULAR_MOVIES_ERROR, error });

export const getGenresPending = () => ({ type: GET_GENRES_PENDING });

export const getGenresSuccess = (genresResponse) => ({ type: GET_GENRES_SUCCESS, genresResponse });

export const getGenresError = (error) => ({ type: GET_GENRES_ERROR, error });

export const getOneMoviePending = () => ({ type: GET_MOVIE_PENDING });

export const getOneMovieSuccess = (moveResponse) => ({ type: GET_MOVIE_SUCCESS, moveResponse });

export const getOneMovieError = (error) => ({ type: GET_MOVIE_ERROR, error });

export const getVideosSuccess = (videosResponse) => ({ type: GET_VIDEOS_SUCCESS, videosResponse });

export const getVideosError = (error) => ({ type: GET_VIDEOS_ERROR, error });

export const setOneMovieType = (movieOrShow) => ({ type: SET_ONE_MOVIE_ID, movieOrShow });
