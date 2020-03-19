import { connect } from 'react-redux';
import { compose } from 'redux';
import connectWithViewport from '../../services/connectWithViewport';

import Navigation from './Navigation';

const mapStateToProps = ({ ApiReducer, setFiltrationParamsReducer }) => ({
  error: ApiReducer.error,
  movieList: ApiReducer.movieListInfo,
  genres: ApiReducer.genresList.genres,
  filtrationQueryParams: setFiltrationParamsReducer.filtrationQueryParams
});

export const NavigationContainer = compose(
  connectWithViewport(),
  connect(
    mapStateToProps,
    null
  )
)(Navigation);
