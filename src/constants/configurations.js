export const MOBILE = 'mobile';
export const DESKTOP = 'desktop';
export const TABLET = 'tablet';

export const ERROR404 = 404;

export const TV_SHOW_LIST = '/tv';
export const TV_SHOW_GENRES = '/tv/list';

export const MOVIE_LIST = '/movie';
export const MOVIE_GENRES = '/movie/list';

export const PARAMS_FOR_NEW_MOVIES = {
  primary_release_year: 2020
};

export const PARAMS_FOR_POPULAR_MOVIES = {
  'vote_average.gte': 8
};

export const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjRkZjI2OGRkZDk2ZmZiNDM0NGExYjIwZDkzZDI0YiIsInN1YiI6IjVlMzg2ZmY3NGNhNjc2MDAxNDUzYmU4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XfOoEYbhA813Z2z8dbshOuUetMBy9V1aey67QyGP1fo';
export const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

export const CAROUSEL_SIZE_VALUES = {
  desktop: { width: 1024, slidesCount: 4 },
  tablet: { width: 768, slidesCount: 3 },
  mobile: { width: 320, slidesCount: 2 }
};
