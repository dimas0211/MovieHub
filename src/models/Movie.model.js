// eslint-disable-next-line max-classes-per-file
import { Record, List, Map } from 'immutable';

/**
 * GenreItemModel
 * id: Number
 * name" String
 */

class GenreItemModel extends Record({
  id: 0,
  name: null
}) {}

class ProdCompanyModel extends Record({
  id: 0,
  logo_path: null,
  name: null,
  origin_country: null
}) {}

class ProdCountryModel extends Record({
  iso_3166_1: null,
  name: null
}) {}

class SpokenLanguageModel extends Record({
  iso_639_1: null,
  name: null
}) {}

/**
 * adult: Boolean,
 * backdrop_path: String,
 * belongs_to_collection: Map(),
 * budget: Number,
 * genres: List(),
 * homepage: String,
 * id: Number,
 * imdb_id: String,
 * original_language: String,
 * original_title: String,
 * overview: String,
 * popularity: Number,
 * poster_path: String,
 * production_companies: List(),
 * production_countries: List(),
 * release_date: String,
 * revenue: Number,
 * runtime: Number,
 * spoken_languages: List(),
 * status: String,
 * tagline: String,
 * video: Boolean,
 * vote_average: Number,
 * vote_count: Number
 */

export class MovieModel extends Record({
  adult: false,
  backdrop_path: null,
  belongs_to_collection: Map(),
  budget: null,
  genres: List(),
  homepage: null,
  id: 0,
  imdb_id: null,
  original_language: null,
  original_title: null,
  overview: null,
  popularity: 0,
  poster_path: null,
  production_companies: List(),
  production_countries: List(),
  release_date: null,
  revenue: 0,
  runtime: 0,
  spoken_languages: List(),
  status: null,
  tagline: null,
  title: null,
  video: false,
  vote_average: 0,
  vote_count: 0
}, 'MovieModel') {
  constructor(values) {
    super(values);

    return this
      .set('results', this.populateGenres())
      .set('production_companies', this.populateProdCompanies())
      .set('production_countries', this.populateProdCountries())
      .set('spoken_languages', this.populateLanguages());
  }

  populateGenres() {
    const genres = this.get('genres');

    if (genres.length) {
      return List(genres.map((genre) => new GenreItemModel(genre)));
    }

    return List();
  }

  populateProdCompanies() {
    const productionCompanies = this.get('production_companies');

    if (productionCompanies.length) {
      return List(productionCompanies.map((company) => new ProdCompanyModel(company)));
    }

    return List();
  }

  populateProdCountries() {
    const productionCountries = this.get('production_countries');

    if (productionCountries.length) {
      return List(productionCountries.map((country) => new ProdCountryModel(country)));
    }

    return List();
  }

  populateLanguages() {
    const languages = this.get('spoken_languages');

    if (languages.length) {
      return List(languages.map((language) => new SpokenLanguageModel(language)));
    }

    return List();
  }

  get id() {
    return this.get('id');
  }

  get backdropPath() {
    return this.get('backdrop_path');
  }

  get budget() {
    return this.get('budget');
  }

  get genres() {
    return this.get('genres');
  }

  get homePage() {
    return this.get('homepage');
  }

  get originLanguage() {
    return this.get('original_language');
  }

  get originTitle() {
    return this.get('original_title');
  }

  get overview() {
    return this.get('overview');
  }

  get popularity() {
    return this.get('popularity');
  }

  get poster() {
    return this.get('poster_path');
  }

  get prodCompanies() {
    return this.get('production_companies');
  }

  get prodCountries() {
    return this.get('production_countries');
  }

  get releaseDate() {
    return this.get('release_date');
  }

  get revenue() {
    return this.get('revenue');
  }

  get runtime() {
    return this.get('runtime');
  }

  get languages() {
    return this.get('spoken_languages');
  }

  get status() {
    return this.get('status');
  }

  get tag() {
    return this.get('tagline');
  }

  get title() {
    return this.get('title');
  }

  get movieVote() {
    return this.get('vote_average');
  }

  get voteCount() {
    return this.get('vote_count');
  }
}
