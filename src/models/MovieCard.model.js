import { Record, List } from 'immutable';

/**
 * MovieCardModel
 *
 * popularity: Number
 * vote_count: Number
 * video: Boolean
 * poster_path: String
 * id: Number
 * adult: Boolean
 * backdrop_path: String
 * original_language: String
 * original_title: String
 * genre_ids: List
 * title: String
 * vote_average: Number
 * overview: String
 * release_date: String
 * original_name: String,
 * name: String,
 * origin_country: List,
 * first_air_date: String
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
  release_date: null,

  original_name: null,
  name: null,
  origin_country: [],
  first_air_date: null
}, 'MovieCardModel') {
  getId() {
    return this.get('id');
  }

  getTitle() {
    const movieTitle = this.get('title');
    const showTitle = this.get('name');

    return movieTitle === null ? showTitle : movieTitle;
  }

  getOriginalTitle() {
    const movieOriginalTitle = this.get('original_title');
    const showOriginalTitle = this.get('original_name');

    return movieOriginalTitle === null ? showOriginalTitle : movieOriginalTitle;
  }

  getReleaseDate() {
    const movieRelease = this.get('release_date');
    const showRelease = this.get('first_air_date');

    return movieRelease === null ? showRelease : movieRelease;
  }

  getPosterPath() {
    return this.get('poster_path');
  }

  getMovieVote() {
    return this.get('vote_average');
  }

  getMovieVoteCount() {
    return this.get('vote_count');
  }

  getMovieGeresId() {
    return this.get('genre_ids');
  }
}
