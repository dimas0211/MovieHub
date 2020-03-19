import { connect } from 'react-redux';
import { compose } from 'redux';
import connectWithViewport from '../../services/connectWithViewport';

import DefaultLayout from './DefaultLayout';
import connectWithIoC from '../../services/connectWithIoC';

const mapStateToProps = ({ ApiReducer }) => ({
  error: ApiReducer.error,
  movies: ApiReducer.movieList,
  genres: ApiReducer.genres
});

export const DefaultLayoutContainer = compose(
  connectWithIoC(['routingConfig']),
  connectWithViewport(),
  connect(
    mapStateToProps,
    null
  )
)(DefaultLayout);
