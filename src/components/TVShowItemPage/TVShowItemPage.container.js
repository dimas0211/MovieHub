import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import connectWithViewport from '../../services/connectWithViewport';

import TVShowItemPage from './TVShowItemPage';
import connectWithIoC from '../../services/connectWithIoC';
import {
  getGenresError,
  getGenresSuccess,
  getOneMovieSuccess,
  getOneMovieError,
  clearOneMovie,
  getVideosSuccess,
  getVideosError
} from '../../actions/actionsAPIcall';

const mapStateToProps = ({ ApiReducer }) => ({
  error: ApiReducer.error,
  movie: ApiReducer.movie,
  genres: ApiReducer.genresList.genres,
  videos: ApiReducer.videos,
  oneMovieId: ApiReducer.oneMovieId,
  movieOrShow: ApiReducer.movieOrShow
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getGenresSuccess,
  getGenresError,
  getOneMovieSuccess,
  getOneMovieError,
  clearOneMovie,
  getVideosSuccess,
  getVideosError
}, dispatch);

export const TVShowItemPageContainer = compose(
  connectWithIoC(['getDataService', 'apiCallConfig', 'routingConfig']),
  connectWithViewport(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(TVShowItemPage);
