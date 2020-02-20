import { Record, List } from 'immutable';

/**
 * MovieCardModel
 *
 * popularity: Number
 * vote_count: Number
 * video
 * poster_path
 * id
 * adult
 * adult
 * backdrop_path
 * original_language
 * original_title
 * genre_ids
 * title
 * vote_average
 * overview
 * release_date
 */

export class MovieCardModel extends Record({
  popularity: 0,
  vote_count: 0,
  video: false,
  poster_path: null,
  id: 0,
  adult: false,
  backdrop_path: null,
  original_language: null,
  original_title: null,
  genre_ids: List(),
  title: null,
  vote_average: 0,
  overview: null,
  release_date: null
}, 'MovieCardModel') {}
