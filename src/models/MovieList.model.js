import { Record, List } from 'immutable';

/**
 * MovieListModel
 *
 * page: Number
 * totalResults: Number
 * totalPages: Number
 * results: List
 */

export class MovieListModel extends Record({
  page: 1,
  total_results: 0,
  total_pages: 0,
  results: List()
}, 'MovieListModel') {}
